import { inngest } from "./client";
import prisma from "@/lib/db";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createOpenAI } from "@ai-sdk/openai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { generateText } from "ai";
import * as Sentry from "@sentry/nextjs";
const google = createGoogleGenerativeAI();
const openai = createOpenAI();
// const anthropic = createAnthropic();

export const execute = inngest.createFunction(
  { id: "execute-ai" },
  { event: "execute/ai" },
  async ({ event, step }) => {
    

Sentry.logger.info('User triggered test log', { log_source: 'sentry_test' })
    const { steps: geminiSteps } = await step.ai.wrap(
      "gemini-generate-text",
      generateText,
      {
        system: "You are a helpful assistant.",
        prompt: "Latest version of Nextjs?",
        model: google("gemini-2.5-flash"),
        experimental_telemetry: {
          isEnabled: true,
          recordInputs: true,
          recordOutputs: true,
        },
      }
    );
    const { steps: openaiSteps } = await step.ai.wrap(
      "openai-generate-text",
      generateText,
      {
        system: "You are a helpful assistant.",
        prompt: "Latest version of Nextjs?",
        model: openai("gpt-4"),
        experimental_telemetry: {
          isEnabled: true,
          recordInputs: true,
          recordOutputs: true,
        },
      }
    );
    // const { steps: anthropicSteps } = await step.ai.wrap("anthropic-generate-text",
    //     generateText, {
    //     system: "You are a helpful assistant.",
    //     prompt: "Latest version of Nextjs?",
    //     model: anthropic("claude-4-5-sonnet"),
    //         experimental_telemetry: {
    //     isEnabled: true,
    //     recordInputs: true,
    //     recordOutputs: true,
    //   },
    // }
    // )
    return { geminiSteps, openaiSteps };
    // return { geminiSteps, openaiSteps, anthropicSteps };
  }
);

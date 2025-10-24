import { prefetchWorkflows } from "@/features/workflows/server/prefetch";
import { requireAuth } from "@/lib/auth-utlis";
import { HydrateClient } from "@/trpc/server";
import {
  WorkflowsContainer,
  WorkflowsList,
} from "@/features/workflows/components/workflow";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";

const Page = async () => {
  await requireAuth();

  prefetchWorkflows();

  return (
    <WorkflowsContainer>
      <HydrateClient>
        <ErrorBoundary fallback={<p>Error!</p>}>
          <Suspense fallback={<p>Loading</p>}>
            <WorkflowsList />
          </Suspense>
        </ErrorBoundary>
      </HydrateClient>
    </WorkflowsContainer>
  );
};
export default Page;
import { createTRPCRouter } from '../init';
import { workFlowRouter } from '@/features/workflows/server/router';

export const appRouter = createTRPCRouter({
    workflows: workFlowRouter,
});

export type AppRouter = typeof appRouter; 
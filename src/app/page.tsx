"use client"
import Logout from "./logout";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";

const Page = () => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data: workflows } = useQuery(trpc.getWorkflows.queryOptions());
  const create = useMutation(trpc.createWorkflow.mutationOptions({
    onSuccess: () => {
      queryClient.invalidateQueries(trpc.getWorkflows.queryOptions())
    }
  }))

  return <div className="flex flex-col justify-center items-center gap-10">
    <div>Protected Server Component</div>
    <div>{JSON.stringify(workflows)}</div>
    <Button onClick={() => create.mutate()} disabled={create.isPending}>Create Workflow</Button>
    <Logout />
  </div>;
};

export default Page;
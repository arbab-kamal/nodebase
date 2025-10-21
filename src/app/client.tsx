"use client";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { use } from "react";

export  const Client=()=> {
    const trpc=useTRPC()
    const {data:users}=useSuspenseQuery(trpc.getUsers.queryOptions())
    return <div>Client Component</div>;
}
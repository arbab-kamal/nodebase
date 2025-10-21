import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import React from 'react'
import { Client } from './client'
import { getQueryClient, trpc } from '@/trpc/server'



const Page = async () => {
  const queryClient =  getQueryClient()
  void queryClient.prefetchQuery(trpc.getUsers.queryOptions())
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Client/>
      </HydrationBoundary>
    </div>
  )
}

export default Page
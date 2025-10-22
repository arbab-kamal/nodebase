"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useTransition } from "react";

export default function Logout() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleLogout = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success("Logged out successfully!");
            
            // Use startTransition for smooth navigation
            startTransition(() => {
              router.refresh(); // Revalidate server components
              router.replace("/login"); // Navigate to login page
            });
          },
          onError: (ctx) => {
            toast.error(ctx.error.message ?? "Failed to logout");
          }
        }
      });
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <Button 
      onClick={handleLogout} 
      disabled={isPending}
      variant="destructive"
    >
      {isPending ? "Logging out..." : "Logout"}
    </Button>
  );
}
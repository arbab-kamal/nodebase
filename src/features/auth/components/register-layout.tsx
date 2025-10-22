"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardTitle, CardHeader } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { authClient } from "@/lib/auth-client";
import { useTransition } from "react";

const registerSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string(),
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "Password and Confirm Password don't match",
        path: ["confirmPassword"]
    });

type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterForm() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const form = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: ""
        },
    });

    const onSubmit = async (value: RegisterFormValues) => {
        try {
            await authClient.signUp.email(
                {
                    name: value.email,
                    email: value.email,
                    password: value.password,
                },
                {
                    onSuccess: () => {
                        toast.success("Account created successfully!");
                        
                        // Use startTransition for smooth navigation
                        startTransition(() => {
                            router.refresh(); // Revalidate server components
                            router.replace("/"); // Navigate without adding to history
                        });
                    },
                    onError: (ctx) => {
                        toast.error(ctx.error.message ?? "Failed to create account");
                    }
                }
            );
        } catch (error) {
            toast.error("An unexpected error occurred");
        }
    };

    const handleGoogleSignUp = async () => {
        try {
            await authClient.signIn.social(
                {
                    provider: "google",
                    callbackURL: "/",
                },
                {
                    onSuccess: () => {
                        toast.success("Signed up with Google!");
                        startTransition(() => {
                            router.refresh();
                            router.replace("/");
                        });
                    },
                    onError: (ctx) => {
                        toast.error(ctx.error.message ?? "Failed to sign up with Google");
                    }
                }
            );
        } catch (error) {
            toast.error("An unexpected error occurred");
        }
    };

    const handleGitHubSignUp = async () => {
        try {
            await authClient.signIn.social(
                {
                    provider: "github",
                    callbackURL: "/",
                },
                {
                    onSuccess: () => {
                        toast.success("Signed up with GitHub!");
                        startTransition(() => {
                            router.refresh();
                            router.replace("/");
                        });
                    },
                    onError: (ctx) => {
                        toast.error(ctx.error.message ?? "Failed to sign up with GitHub");
                    }
                }
            );
        } catch (error) {
            toast.error("An unexpected error occurred");
        }
    };

    const isLoading = isPending || form.formState.isSubmitting;

    return (
        <div className="flex flex-col gap-6 w-2/5 min-w-80">
            <Card>
                <CardHeader className="text-center">
                    <CardTitle>Get Started</CardTitle>
                    <CardDescription>Create your account to get started</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="grid gap-6">
                                <div className="flex flex-col gap-4">
                                    <Button 
                                        variant="outline" 
                                        disabled={isLoading} 
                                        className="w-full" 
                                        type="button"
                                        onClick={handleGitHubSignUp}
                                    >
                                        <Image alt="GitHub" src="/logos/github.svg" width={20} height={20} />
                                        Continue with GitHub
                                    </Button>
                                    <Button 
                                        variant="outline" 
                                        disabled={isLoading} 
                                        className="w-full" 
                                        type="button"
                                        onClick={handleGoogleSignUp}
                                    >
                                        <Image alt="Google" src="/logos/google.svg" width={20} height={20} />
                                        Continue with Google
                                    </Button>
                                </div>

                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <span className="w-full border-t" />
                                    </div>
                                    <div className="relative flex justify-center text-xs uppercase">
                                        <span className="bg-background px-2 text-muted-foreground">
                                            Or continue with
                                        </span>
                                    </div>
                                </div>

                                <div className="grid gap-6">
                                    <FormField 
                                        control={form.control} 
                                        name="email" 
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input 
                                                        type="email" 
                                                        placeholder="abc@example.com" 
                                                        disabled={isLoading} 
                                                        {...field} 
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} 
                                    />
                                    <FormField 
                                        control={form.control} 
                                        name="password" 
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input 
                                                        type="password" 
                                                        placeholder="***********" 
                                                        disabled={isLoading} 
                                                        {...field} 
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} 
                                    />
                                    <FormField 
                                        control={form.control} 
                                        name="confirmPassword" 
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Confirm Password</FormLabel>
                                                <FormControl>
                                                    <Input 
                                                        type="password" 
                                                        placeholder="***********" 
                                                        disabled={isLoading} 
                                                        {...field} 
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} 
                                    />
                                    <Button 
                                        type="submit" 
                                        className="w-full" 
                                        disabled={isLoading}
                                    >
                                        {isLoading ? "Creating account..." : "Sign Up"}
                                    </Button>
                                    <div className="text-center text-sm">
                                        Already have an account?{" "}
                                        <Link 
                                            className="underline underline-offset-4 decoration-2" 
                                            href="/login"
                                        >
                                            Login
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
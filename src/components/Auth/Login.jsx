"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, Card, Input, Label, TextField, Link } from "@heroui/react";
import { authClient, signIn } from "@/lib/auth-client";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get("redirect") || "/";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const { error: signInError } = await authClient.signIn.email({
                email,
                password,
                rememberMe,
            });

            if (signInError) {
                setError(signInError.message || "Invalid credentials");
            } else {
                router.push(redirectTo); // wherever you want to redirect
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="flex items-center justify-center bg-zinc-950 py-20">
            <Card className="w-full max-w-md">
                <Card.Header className="space-y-1 text-center">
                    <Card.Title className="text-2xl">Welcome back</Card.Title>
                    <Card.Description>Sign in to your account</Card.Description>
                </Card.Header>

                <Card.Content>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <p className="text-red-500 text-sm text-center">
                                {error}
                            </p>
                        )}

                        <TextField>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                placeholder="johndoe@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </TextField>

                        <TextField>
                            <Label>Password</Label>
                            <Input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </TextField>

                        <div className="flex items-center justify-between">
                            <Link href="/forgot-password" className="text-sm">
                                Forgot password?
                            </Link>
                        </div>

                        <Button
                            type="submit"
                            fullWidth
                            isPending={isLoading}
                            className="mt-2"
                        >
                            {isLoading ? "Signing in..." : "Sign in"}
                        </Button>
                    </form>
                </Card.Content>

                <Card.Footer className="flex flex-col gap-4">
                    <div className="text-center text-sm text-zinc-500">
                        Don&apos;t have an account?{" "}
                        <Link
                            href={`/signup?redirect=${redirectTo}`}
                            className="text-primary hover:underline"
                        >
                            Sign up
                        </Link>
                    </div>

                    {/* Social Logins */}
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            fullWidth
                            onPress={() =>
                                signIn.social({ provider: "google" })
                            }
                        >
                            Continue with Google
                        </Button>
                        <Button
                            variant="outline"
                            fullWidth
                            onPress={() =>
                                signIn.social({ provider: "github" })
                            }
                        >
                            Continue with GitHub
                        </Button>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Login;

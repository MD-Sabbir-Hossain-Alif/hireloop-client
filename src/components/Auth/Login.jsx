"use client";

import { useState } from "react";
import {
    Button,
    Card,
    Input,
    Label,
    TextField,
    Link,
    Checkbox,
} from "@heroui/react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            console.log("Login attempt:", { email, password, rememberMe });
            alert("Login successful! (Demo)");
            setIsLoading(false);
        }, 1500);
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
                        <TextField>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </TextField>

                        <TextField>
                            <Label>Password</Label>
                            <Input
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </TextField>

                        <div className="flex items-center justify-between">
                            <Checkbox
                                isSelected={rememberMe}
                                onChange={setRememberMe}
                            >
                                Remember me
                            </Checkbox>
                            <Link href="#" className="text-sm">
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
                            href="/signup"
                            className="text-primary hover:underline"
                        >
                            Sign up
                        </Link>
                    </div>

                    {/* Social Logins */}
                    <div className="flex gap-2">
                        <Button variant="outline" fullWidth>
                            Continue with Google
                        </Button>
                        <Button variant="outline" fullWidth>
                            Continue with GitHub
                        </Button>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Login;

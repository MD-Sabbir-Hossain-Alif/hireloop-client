"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Card, Input, Label, TextField, Link } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords don't match");
            return;
        }

        setIsLoading(true);

        try {
            const { error: signUpError } = await authClient.signUp.email({
                name: formData.name,
                email: formData.email,
                password: formData.password,
                // callbackURL: "/dashboard", // optional
            });

            if (signUpError) {
                setError(signUpError.message || "Failed to create account");
            } else {
                // Better Auth usually auto signs in or redirects
                router.push("/");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center bg-zinc-950 py-10">
            <Card className="w-full max-w-md">
                <Card.Header className="space-y-1 text-center">
                    <Card.Title className="text-2xl">Create account</Card.Title>
                    <Card.Description>Join us today</Card.Description>
                </Card.Header>

                <Card.Content>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <p className="text-red-500 text-sm text-center">
                                {error}
                            </p>
                        )}

                        <TextField>
                            <Label>Full Name</Label>
                            <Input
                                name="name"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </TextField>

                        <TextField>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </TextField>

                        <TextField>
                            <Label>Password</Label>
                            <Input
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </TextField>

                        <TextField>
                            <Label>Confirm Password</Label>
                            <Input
                                type="password"
                                name="confirmPassword"
                                placeholder="••••••••"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </TextField>

                        <Button type="submit" fullWidth isPending={isLoading}>
                            {isLoading
                                ? "Creating account..."
                                : "Create account"}
                        </Button>
                    </form>
                </Card.Content>

                <Card.Footer>
                    <div className="text-center text-sm text-zinc-500">
                        Already have an account?{" "}
                        <Link
                            href="/signin"
                            className="text-primary hover:underline"
                        >
                            Sign in
                        </Link>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Register;

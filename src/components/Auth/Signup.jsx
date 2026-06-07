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

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        if (!acceptTerms) {
            alert("Please accept the terms");
            return;
        }

        setIsLoading(true);

        setTimeout(() => {
            console.log("Register attempt:", formData);
            alert("Account created successfully! (Demo)");
            setIsLoading(false);
        }, 1500);
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

"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import NavLink from "./NavLink";
import { Bars, Xmark } from "@gravity-ui/icons";
import Image from "next/image";

const navLinks = [
    { name: "Browse Jobs", href: "/jobs" },
    { name: "Company", href: "/company" },
    { name: "Pricing", href: "/pricing" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="px-4">
            <div className="mx-auto flex container items-center justify-between rounded-2xl py-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="relative flex h-11 w-32 items-center justify-center overflow-hidden rounded-2xl bg-white/2 shadow-lg">
                        <Image
                            src="/images/logo.png"
                            alt="hire loop logo"
                            fill
                            className="object-contain p-2"
                        />
                    </div>

                    <div className="leading-tight">
                        <h1 className="text-lg font-semibold tracking-tight text-white">
                            Hire
                        </h1>
                        <p className="-mt-1 text-sm text-white/80">Loop</p>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-8 rounded-2xl border border-white/5 bg-white/2 px-6 py-3 md:flex">
                    {navLinks.map((item) => (
                        <NavLink key={item.name} href={item.href}>
                            {item.name}
                        </NavLink>
                    ))}

                    <div className="h-6 w-px bg-white/10" />

                    <NavLink href="/signin">Sign In</NavLink>

                    <Button
                        radius="xl"
                        className="bg-white px-6 font-semibold text-black hover:bg-white/90"
                    >
                        Get Started
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10 md:hidden"
                >
                    {isMenuOpen ? (
                        <Xmark className="size-5 text-fuchsia-400" />
                    ) : (
                        <Bars className="size-5 text-white" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-[#111116] p-6 md:hidden">
                    <div className="flex flex-col gap-5">
                        {navLinks.map((item) => (
                            <NavLink key={item.name} href={item.href}>
                                {item.name}
                            </NavLink>
                        ))}

                        <div className="h-px bg-white/10" />

                        <NavLink href="/signin">Sign In</NavLink>

                        <Button
                            radius="xl"
                            className="mt-2 w-full bg-white font-semibold text-black"
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

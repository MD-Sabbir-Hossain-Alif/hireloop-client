"use client";

import Link from "next/link";
import Image from "next/image";
import {
    LogoFacebook,
    LogoInstagram,
    LogoLinkedin,
    LogoTwitter,
} from "@gravity-ui/icons";

const socialLinks = [
    {
        name: "Twitter",
        href: "https://twitter.com",
        icon: LogoTwitter,
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com",
        icon: LogoLinkedin,
    },
    {
        name: "Instagram",
        href: "https://instagram.com",
        icon: LogoInstagram,
    },
    {
        name: "Facebook",
        href: "https://facebook.com",
        icon: LogoFacebook,
    },
];

const footerLinks = [
    {
        title: "Company",
        links: [
            { name: "About", href: "/about" },
            { name: "Careers", href: "/careers" },
            { name: "Contact", href: "/contact" },
        ],
    },
    {
        title: "Resources",
        links: [
            { name: "Browse Jobs", href: "/jobs" },
            { name: "Pricing", href: "/pricing" },
            { name: "Help Center", href: "/help" },
        ],
    },
];

const Footer = () => {
    return (
        <footer className="mt-20 border-t border-white/10 bg-[#0b0b0f] px-4">
            <div className="container mx-auto py-12">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative flex h-11 w-32 items-center justify-center overflow-hidden rounded-2xl bg-white/5 shadow-lg">
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
                                <p className="-mt-1 text-sm text-white/80">
                                    Loop
                                </p>
                            </div>
                        </Link>

                        <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
                            HireLoop helps companies connect with top talent
                            faster through a modern and seamless hiring
                            experience.
                        </p>

                        {/* Socials */}
                        <div className="mt-6 flex items-center gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:border-fuchsia-500/30 hover:bg-fuchsia-500/10 hover:text-fuchsia-400"
                                    >
                                        <Icon className="size-5" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Footer Links */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                                {section.title}
                            </h3>

                            <div className="flex flex-col gap-4">
                                {section.links.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-sm text-white/60 transition hover:text-fuchsia-400"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center md:flex-row">
                    <p className="text-sm text-white/50">
                        © {new Date().getFullYear()} HireLoop. All rights
                        reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <Link
                            href="/privacy"
                            className="text-sm text-white/50 transition hover:text-white"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms"
                            className="text-sm text-white/50 transition hover:text-white"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

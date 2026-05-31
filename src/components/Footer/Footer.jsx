"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-black text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at top center, rgba(99,102,241,0.25), transparent 40%)",
                    }}
                />
            </div>

            <div className="relative container mx-auto px-6 py-16">
                <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/images/logo.png"
                                alt="HireLoop"
                                width={160}
                                height={50}
                                className="object-contain"
                            />
                        </Link>

                        <p className="mt-8 max-w-sm text-base leading-8 text-white/50">
                            The AI-native career platform. Built for people who
                            take their work seriously.
                        </p>

                        {/* Socials */}
                        <div className="mt-12 flex gap-3">
                            <Link
                                href="https://facebook.com"
                                target="_blank"
                                className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-indigo-500"
                            >
                                <FaFacebookF />
                            </Link>

                            <Link
                                href="https://pinterest.com"
                                target="_blank"
                                className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-600 text-white"
                            >
                                <FaPinterestP />
                            </Link>

                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-indigo-500"
                            >
                                <FaLinkedinIn />
                            </Link>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="mb-6 text-lg font-medium text-indigo-500">
                            Product
                        </h3>

                        <div className="space-y-4 text-white/60">
                            <Link
                                href="/jobs"
                                className="block hover:text-white"
                            >
                                Job discovery
                            </Link>

                            <Link
                                href="/worker-ai"
                                className="block hover:text-white"
                            >
                                Worker AI
                            </Link>

                            <Link
                                href="/companies"
                                className="block hover:text-white"
                            >
                                Companies
                            </Link>

                            <Link
                                href="/salary-data"
                                className="block hover:text-white"
                            >
                                Salary data
                            </Link>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="mb-6 text-lg font-medium text-indigo-500">
                            Navigations
                        </h3>

                        <div className="space-y-4 text-white/60">
                            <Link
                                href="/help"
                                className="block hover:text-white"
                            >
                                Help center
                            </Link>

                            <Link
                                href="/career-library"
                                className="block hover:text-white"
                            >
                                Career library
                            </Link>

                            <Link
                                href="/contact"
                                className="block hover:text-white"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="mb-6 text-lg font-medium text-indigo-500">
                            Resources
                        </h3>

                        <div className="space-y-4 text-white/60">
                            <Link
                                href="/brand-guideline"
                                className="block hover:text-white"
                            >
                                Brand Guideline
                            </Link>

                            <Link
                                href="/newsroom"
                                className="block hover:text-white"
                            >
                                Newsroom
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
                    <p className="text-sm text-white/40">
                        Copyright {new Date().getFullYear()} — HireLoop
                    </p>

                    <div className="flex gap-6 text-sm text-white/40">
                        <Link href="/terms" className="hover:text-white">
                            Terms & Policy
                        </Link>

                        <Link href="/privacy" className="hover:text-white">
                            Privacy Guideline
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import Image from "next/image";
import {
    LuSearch,
    LuMapPin,
    LuBriefcase,
    LuBuilding2,
    LuUsers,
    LuStar,
} from "react-icons/lu";

const stats = [
    {
        icon: LuBriefcase,
        value: "50K",
        label: "Active Jobs",
    },
    {
        icon: LuBuilding2,
        value: "12K",
        label: "Companies",
    },
    {
        icon: LuUsers,
        value: "2M",
        label: "Job Seekers",
    },
    {
        icon: LuStar,
        value: "97%",
        label: "Satisfaction Rate",
    },
];

const Hero = () => {
    return (
        <section className="text-white mb-20">
            {/* Content */}
            <div className="relative z-10 flex min-h-screen flex-col">
                {/* Top Content */}
                <div className="container mx-auto px-4 pt-16">
                    {/* Badge */}
                    <div className="flex justify-center">
                        <div className="rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl">
                            <span className="text-sm font-medium uppercase tracking-[0.25em] text-white/80">
                                💼 50,000+ New Jobs This Month
                            </span>
                        </div>
                    </div>

                    {/* Heading */}
                    <div className="mx-auto mt-8 max-w-5xl text-center">
                        <h1 className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
                            Find Your Dream Job Today
                        </h1>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                            HireLoop connects top talent with world-class
                            companies. Browse thousands of curated opportunities
                            and land your next role faster.
                        </p>
                    </div>

                    {/* Search */}
                    <div className="mx-auto mt-10 max-w-4xl">
                        <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl md:flex-row">
                            <div className="flex flex-1 items-center gap-3 px-5 py-5">
                                <LuSearch className="size-5 text-white/60" />

                                <input
                                    type="text"
                                    placeholder="Job title, skill or company"
                                    className="w-full bg-transparent text-white outline-none placeholder:text-white/40"
                                />
                            </div>

                            <div className="hidden w-px bg-white/10 md:block" />

                            <div className="flex flex-1 items-center gap-3 px-5 py-5">
                                <LuMapPin className="size-5 text-white/60" />

                                <input
                                    type="text"
                                    placeholder="Location or Remote"
                                    className="w-full bg-transparent text-white outline-none placeholder:text-white/40"
                                />
                            </div>

                            <button className="m-2 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-600 transition hover:bg-indigo-500">
                                <LuSearch className="size-5" />
                            </button>
                        </div>
                    </div>

                    {/* Trending */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                        <span className="text-sm text-white/50">
                            Trending Position
                        </span>

                        {[
                            "Product Designer",
                            "AI Engineering",
                            "DevOps Engineer",
                        ].map((item) => (
                            <span
                                key={item}
                                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-200">
                    {/* Middle Text */}
                    <div className="mt-auto mb-32 flex justify-center px-4 text-center">
                        <h2 className="max-w-3xl text-3xl font-medium leading-tight md:text-5xl">
                            Assisting over 15,000 job seekers
                            <br />
                            find their dream positions.
                        </h2>
                    </div>

                    {/* Stats */}
                    <div className="container mx-auto px-4 pb-8">
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {stats.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.label}
                                        className="rounded-3xl border border-white/10 bg-black/50 p-8 backdrop-blur-xl"
                                    >
                                        <Icon className="size-6 text-white/70" />

                                        <h3 className="mt-8 text-5xl font-bold">
                                            {item.value}
                                        </h3>

                                        <p className="mt-3 text-white/60">
                                            {item.label}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

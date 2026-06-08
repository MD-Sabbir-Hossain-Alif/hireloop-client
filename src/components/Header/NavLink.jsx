"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
    const pathname = usePathname();

    // console.log(pathname);

    let isActive = false;

    if (href === "/") {
        isActive = pathname === "/signin" || pathname.startsWith("/signin");
    } else {
        isActive = pathname === href;
    }

    return (
        <Link
            href={href}
            className={`
                relative text-sm font-medium transition-all duration-300
                ${
                    isActive
                        ? "text-indigo-400"
                        : "text-white/70 hover:text-fuchsia-400"
                }
            `}
        >
            {children}

            {/* Active Border */}
            <span
                className={`
                    absolute -bottom-2 left-0 h-0.5 rounded-full
                    bg-linear-to-r from-fuchsia-500 to-indigo-500
                    transition-all duration-300
                    ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}
                `}
            />
        </Link>
    );
};

export default NavLink;

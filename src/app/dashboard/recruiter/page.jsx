"use client";

import { DashboardStats } from "@/components/Dashboard/DashboardStats";
import { authClient } from "@/lib/auth-client";
import {
    Briefcase,
    Persons,
    Thunderbolt,
    CircleCheck,
} from "@gravity-ui/icons";

const page = () => {
    const { data, isPending } = authClient.useSession();

    if (isPending) {
        return <div>Loading...</div>;
    }

    const recruiterStats = [
        { title: "Total Job Posts", value: "48", icon: Briefcase },
        { title: "Total Applicants", value: "1,284", icon: Persons },
        { title: "Active Jobs", value: "18", icon: Thunderbolt },
        { title: "Jobs Closed", value: "32", icon: CircleCheck },
    ];

    const user = data?.user;
    console.log(user);

    return (
        <div>
            <h2 className="text-4xl">Welcome back, {user?.name}</h2>
            <DashboardStats statsData={recruiterStats} />
        </div>
    );
};

export default page;

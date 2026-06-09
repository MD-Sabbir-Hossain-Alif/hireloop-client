"use client";

import React from "react";
import { Table, Chip, Avatar } from "@heroui/react";
import { ChevronRight } from "@gravity-ui/icons";

// Mock data matching the provided image dashboard
const applications = [
    {
        id: "1",
        name: "Julianne Moore",
        role: "Senior Product Designer",
        dateApplied: "Oct 24, 2023",
        experience: "6 years",
        status: "Interviewing",
    },
    {
        id: "2",
        name: "Robert Downey",
        role: "Backend Engineer",
        dateApplied: "Oct 23, 2023",
        experience: "4 years",
        status: "New",
    },
    {
        id: "3",
        name: "Emma Stone",
        role: "Marketing Lead",
        dateApplied: "Oct 22, 2023",
        experience: "8 years",
        status: "Reviewing",
    },
    {
        id: "4",
        name: "Chris Pratt",
        role: "Product Manager",
        dateApplied: "Oct 21, 2023",
        experience: "5 years",
        status: "Rejected",
    },
];

// Helper to style standard badges/chips according to status
const getStatusClasses = (status) => {
    switch (status) {
        case "Interviewing":
            return "bg-emerald-950 text-emerald-400 border border-emerald-800";
        case "New":
            return "bg-zinc-800 text-zinc-200 border border-zinc-700";
        case "Reviewing":
            return "bg-amber-950 text-amber-500 border border-amber-800";
        case "Rejected":
            return "bg-rose-950 text-rose-400 border border-rose-900";
        default:
            return "bg-zinc-800 text-zinc-200";
    }
};

export default function AppTable() {
    return (
        <div className="w-full max-w-5xl p-6 bg-zinc-950 text-zinc-100 rounded-xl min-h-screen">
            {/* Dashboard Top Header Bar */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold tracking-tight">
                    Recent Applications
                </h2>
                <button className="flex items-center gap-1 text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors">
                    View all
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>

            {/* HeroUI v3 Compound Table */}
            <Table className="w-full bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                <Table.ScrollContainer>
                    <Table.Content aria-label="Recent applications queue">
                        <Table.Header className="bg-zinc-900 border-b border-zinc-800">
                            <Table.Column className="text-zinc-400 font-medium text-xs uppercase px-6 py-4 text-left">
                                Candidate Name
                            </Table.Column>
                            <Table.Column className="text-zinc-400 font-medium text-xs uppercase px-6 py-4 text-left">
                                Role
                            </Table.Column>
                            <Table.Column className="text-zinc-400 font-medium text-xs uppercase px-6 py-4 text-left">
                                Date Applied
                            </Table.Column>
                            <Table.Column className="text-zinc-400 font-medium text-xs uppercase px-6 py-4 text-left">
                                Experience
                            </Table.Column>
                            <Table.Column className="text-zinc-400 font-medium text-xs uppercase px-6 py-4 text-left">
                                Status
                            </Table.Column>
                        </Table.Header>

                        <Table.Body>
                            {applications.map((app) => (
                                <Table.Row
                                    id={app.id}
                                    key={app.id}
                                    className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors last:border-none"
                                >
                                    {/* Candidate Name Cell with Initials Avatar */}
                                    <Table.Cell className="px-6 py-5 flex items-center gap-3">
                                        <Avatar
                                            name={app.name}
                                            className="bg-zinc-800 text-zinc-400 w-10 h-10 text-sm font-medium border border-zinc-700"
                                        />
                                        <span className="font-semibold text-zinc-100">
                                            {app.name}
                                        </span>
                                    </Table.Cell>

                                    {/* Role Cell */}
                                    <Table.Cell className="px-6 py-5 text-zinc-400">
                                        {app.role}
                                    </Table.Cell>

                                    {/* Date Applied Cell */}
                                    <Table.Cell className="px-6 py-5 text-zinc-400">
                                        {app.dateApplied}
                                    </Table.Cell>

                                    {/* Experience Cell */}
                                    <Table.Cell className="px-6 py-5 text-zinc-400">
                                        {app.experience}
                                    </Table.Cell>

                                    {/* Status Badges Cell */}
                                    <Table.Cell className="px-6 py-5">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium tracking-wide ${getStatusClasses(app.status)}`}
                                        >
                                            {app.status}
                                        </span>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = ["All", "Residential", "Commercial", "Institutional", "Interior"];

export function ProjectGrid() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = projects.filter(
        (project) => filter === "All" || project.category === filter
    );

    return (
        <div className="space-y-12">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={cn(
                            "text-sm uppercase tracking-wider px-4 py-2 transition-all duration-300",
                            filter === category
                                ? "text-orange-500"
                                : "text-stone-500 hover:text-charcoal-900"
                        )}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                    <Link href={`/projects/${project.id}`} key={project.id} className="group block">
                        <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 mb-4">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="text-xl font-normal text-charcoal-900 group-hover:text-stone-600 transition-colors mb-1">
                            {project.title}
                        </h3>
                        <p className="text-sm text-stone-500">{project.location || "Bangalore"}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

export function ConditionalFooter() {
    const pathname = usePathname();

    // Hide footer on contact page
    if (pathname === "/contact") {
        return null;
    }

    return <Footer />;
}

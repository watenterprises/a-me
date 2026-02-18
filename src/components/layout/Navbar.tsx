"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Work", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
];

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
            <Container className="flex h-20 items-center justify-between max-w-none">
                <Link href="/" className="relative h-12 w-32">
                    <Image
                        src="/logo.png"
                        alt="a+me Logo"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </Link>
                <nav className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-colors uppercase tracking-widest ${isActive(link.href)
                                ? "text-orange-500"
                                : "text-charcoal-600 hover:text-charcoal-900"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant="primary" size="sm" href="/contact">
                        Get in Touch
                    </Button>
                </nav>

                {/* Mobile Menu Trigger */}
                <button
                    className="md:hidden p-2 text-charcoal-900"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="absolute top-20 left-0 w-full bg-white border-b border-stone-200 p-6 flex flex-col gap-4 shadow-lg md:hidden">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-xl font-medium transition-colors ${isActive(link.href)
                                    ? "text-orange-500"
                                    : "text-charcoal-900 hover:text-stone-600"
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button variant="primary" className="w-full" href="/contact" onClick={() => setIsMenuOpen(false)}>
                            Get in Touch
                        </Button>
                    </div>
                )}
            </Container>
        </header>
    );
}

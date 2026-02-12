import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const navLinks = [
    { name: "Work", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Process", href: "/process" },
];

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
            <Container className="flex h-20 items-center justify-between">
                <Link href="/" className="relative h-12 w-32">
                    <Image
                        src="/logo.jpg"
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
                            className="text-sm font-medium text-charcoal-600 hover:text-charcoal-900 transition-colors uppercase tracking-widest"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant="primary" size="sm" href="/contact">
                        Get in Touch
                    </Button>
                </nav>
                {/* Mobile menu trigger will go here */}
                <Button variant="ghost" size="sm" className="md:hidden">
                    Menu
                </Button>
            </Container>
        </header>
    );
}

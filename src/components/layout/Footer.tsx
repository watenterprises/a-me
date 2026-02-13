import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="w-full border-t border-stone-200 bg-stone-50 py-16">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="inline-block relative h-10 w-24 mb-4">
                            <Image
                                src="/logo.png"
                                alt="a+me Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </Link>
                        <p className="mt-2 max-w-sm text-stone-600 text-sm leading-relaxed">
                            a+me is a multidisciplinary design practice based in Bangalore, offering architecture, interior design, and landscape consultancy.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-medium text-charcoal-900 mb-6 uppercase tracking-widest text-xs">Explore</h4>
                        <ul className="space-y-4 text-sm text-stone-600">
                            <li><Link href="/projects" className="hover:text-charcoal-900 transition-colors">Projects</Link></li>
                            <li><Link href="/about" className="hover:text-charcoal-900 transition-colors">Studio</Link></li>
                            <li><Link href="/services" className="hover:text-charcoal-900 transition-colors">Services</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium text-charcoal-900 mb-6 uppercase tracking-widest text-xs">Connect</h4>
                        <ul className="space-y-4 text-sm text-stone-600">
                            <li><a href="mailto:info@aplusme.in" className="hover:text-charcoal-900 transition-colors">info@aplusme.in</a></li>
                            <li><a href="tel:+919606407820" className="hover:text-charcoal-900 transition-colors">+91 96064 07820</a></li>
                            <li><Link href="/contact" className="hover:text-charcoal-900 transition-colors">Book Consultation</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500 uppercase tracking-wider">
                    <p>&copy; {new Date().getFullYear()} a+me. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-charcoal-900">Privacy</Link>
                        <Link href="#" className="hover:text-charcoal-900">Terms</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

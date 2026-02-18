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
                        <h4 className="font-medium text-charcoal-900 mb-6 uppercase tracking-widest text-xl">Explore</h4>
                        <ul className="space-y-4 text-sm text-stone-600">
                            <li><Link href="/projects" className="hover:text-charcoal-900 transition-colors">Projects</Link></li>
                            <li><Link href="/about" className="hover:text-charcoal-900 transition-colors">About</Link></li>
                            <li><Link href="/services" className="hover:text-charcoal-900 transition-colors">Services</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium text-charcoal-900 mb-6 uppercase tracking-widest text-xl">Connect</h4>
                        <ul className="space-y-6 text-sm text-stone-600">
                            <li className="flex flex-col">
                                <span className="text-xs font-bold text-stone-900 uppercase tracking-widest mb-1">For Project and Business Enquiry</span>
                                <a href="mailto:info@aplusme.in" className="hover:text-charcoal-900 transition-colors">info@aplusme.in</a>
                            </li>
                            <li className="flex flex-col">
                                <span className="text-xs font-bold text-stone-900 uppercase tracking-widest mb-1">For Vendors and Consultants</span>
                                <a href="mailto:office@aplusme.in" className="hover:text-charcoal-900 transition-colors">office@aplusme.in</a>
                            </li>
                            <li className="flex flex-col">
                                <span className="text-xs font-bold text-stone-900 uppercase tracking-widest mb-1">For Employment and Internship</span>
                                <a href="mailto:careers@aplusme.in" className="hover:text-charcoal-900 transition-colors">careers@aplusme.in</a>
                            </li>
                            <li className="flex flex-col pt-2">
                                <a href="tel:+919606407820" className="hover:text-charcoal-900 transition-colors">+91 96064 07820</a>
                                <a href="tel:+917907261843" className="hover:text-charcoal-900 transition-colors">+91 79072 61843</a>
                            </li>
                            <li className="pt-2"><Link href="/contact" className="hover:text-charcoal-900 transition-colors">Book Consultation</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500 uppercase tracking-wider">
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

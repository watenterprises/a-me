"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { team } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            {/* Navigation Links */}
            <section className="bg-white border-b border-stone-200 sticky top-20 z-40 bg-white/95 backdrop-blur pt-8">
                <Container>
                    <div className="flex gap-8 md:gap-12">
                        <a
                            href="#firm"
                            className="py-4 text-sm uppercase tracking-wider text-stone-500 hover:text-orange-500 transition-colors"
                        >
                            Firm
                        </a>
                        <a
                            href="#philosophy"
                            className="py-4 text-sm uppercase tracking-wider text-stone-500 hover:text-orange-500 transition-colors"
                        >
                            Design Philosophy
                        </a>
                        <a
                            href="#principals"
                            className="py-4 text-sm uppercase tracking-wider text-stone-500 hover:text-orange-500 transition-colors"
                        >
                            Principals
                        </a>
                    </div>
                </Container>
            </section>

            {/* The Firm */}
            <Section className="bg-white" id="firm">
                <Container>
                    <FadeIn>
                        <div className="max-w-4xl space-y-8">
                            <h2 className="text-2xl font-medium text-charcoal-900">The Firm</h2>

                            <div className="space-y-6 text-base leading-relaxed text-stone-700">
                                <p>
                                    a+me, a multidisciplinary Architecture and Interior Design firm based in Bangalore, India, was established in 2018.
                                </p>

                                <p>
                                    The firm is driven by a commitment to design excellence, quality craftsmanship, and meaningful client collaboration. Our work spans residential, commercial, and institutional projects, creating spaces that are both timeless and contextually relevant.
                                </p>

                                <p>
                                    a+me's approach integrates architecture, interiors, and landscape to create cohesive environments. The firm's portfolio includes a diverse range of projects across India, each reflecting a unique response to site, climate, and client aspirations.
                                </p>

                                <p>
                                    The work of a+me has been recognized for its thoughtful integration of context, materiality, and spatial quality. The firm continues to explore innovative design solutions that balance aesthetics, functionality, and sustainability.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </Section>

            {/* Design Philosophy */}
            <Section className="bg-white" id="philosophy">
                <Container>
                    <FadeIn>
                        <div className="max-w-4xl space-y-8">
                            <h2 className="text-2xl font-medium text-charcoal-900">Design Philosophy</h2>

                            <div className="space-y-6 text-base leading-relaxed text-stone-700">
                                <p>
                                    At a+me, we believe that exceptional architecture emerges from a deep understanding of context, purpose, and the people who inhabit our spaces. Our design philosophy is rooted in the thoughtful integration of multiple factors to create meaningful architectural forms.
                                </p>

                                <p>
                                    The name "a+me" embodies our ideology. The equation "a + me" represents architecture ("a") as the foundational element, the "+" symbolizes collaboration with our clients, and "me" signifies the range of services we provide through various mediums. Together, these elements reflect our commitment to co-creating unique architectural solutions.
                                </p>

                                <p>
                                    Each project begins with understanding—responding thoughtfully to site conditions, cultural context, environmental factors, and programmatic requirements. We approach every commission through a disciplined methodology that carefully balances aesthetics, functionality, and buildability.
                                </p>

                                <p>
                                    Our work emphasizes clarity of intent, innovative solutions, and attention to detail. We see architecture as a long-term investment in quality of life and environmental stewardship, creating spaces that age gracefully and remain relevant over time.
                                </p>

                                <p>
                                    By seamlessly integrating architecture, interiors, and landscape, we create holistic environments that are distinctive, timeless, and enduring. Our design process is collaborative, transparent, and focused on delivering excellence at every stage.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </Section>

            {/* Principals */}
            <Section className="bg-white" id="principals">
                <Container>
                    <FadeIn>
                        <div className="space-y-12">
                            <h2 className="text-2xl font-medium text-charcoal-900">Principals</h2>

                            <div className="space-y-16">
                                {team.map((member) => (
                                    <div key={member.name} className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
                                        <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="text-lg font-medium text-charcoal-900">{member.name}</h3>
                                                <p className="text-sm text-stone-500">{member.role}</p>
                                            </div>
                                            <p className="text-base leading-relaxed text-stone-700">{member.bio}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </Section>
        </div>
    );
}

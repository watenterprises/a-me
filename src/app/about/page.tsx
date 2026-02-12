import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { team } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="bg-stone-100 pt-32 pb-16 md:pt-48 md:pb-24">
                <Container>
                    <FadeIn>
                        <h1 className="text-5xl md:text-6xl font-serif text-charcoal-900 mb-8">
                            Founded in 2018 in <br />
                            <span className="italic text-stone-500">Bangalore</span>
                        </h1>
                        <p className="max-w-2xl text-lg md:text-xl text-stone-600 leading-relaxed">
                            a+me is a multidisciplinary design practice offering comprehensive consultancy services in architecture, interior design, and landscape design.
                        </p>
                    </FadeIn>
                </Container>
            </section>

            {/* Story & Philosophy */}
            <Section className="bg-white">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <div className="space-y-6 text-lg text-stone-600 leading-relaxed text-balance">
                            <FadeIn>
                                <h2 className="text-sm font-bold tracking-widest uppercase text-stone-500 mb-4">Our Practice</h2>
                                <p>
                                    At a+me, our work is driven by a strong commitment to client service, quality, and design excellence. Each project is approached through a disciplined methodology that carefully responds to site conditions, requirements, and timelines.
                                </p>
                                <p>
                                    We believe that meaningful design emerges from a deep understanding of cultural, environmental, and spatial context. Our design process emphasizes thoughtful inquiry, clarity of intent, and context-sensitive strategies integrated with innovative solutions.
                                </p>
                            </FadeIn>
                        </div>
                        <div className="relative aspect-square md:aspect-[4/5] bg-stone-100">
                            <FadeIn delay={0.2}>
                                <Image
                                    src="/photos/1. HD photographs without watermark (min. 800 pixels wide)/15.jpg"
                                    alt="Studio Workspace"
                                    fill
                                    className="object-cover"
                                />
                            </FadeIn>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Values / USP */}
            <Section className="bg-stone-900 text-stone-200">
                <Container>
                    <FadeIn>
                        <h2 className="text-sm font-bold tracking-widest uppercase text-stone-400 mb-12">What Makes a+me Different</h2>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <FadeIn delay={0.1}>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-serif text-white">Context-Driven</h3>
                                <p className="text-stone-400">Our work is guided by a context-driven approach, responding thoughtfully to site, climate, and client aspirations to create relevant spaces.</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-serif text-white">Integrated Design</h3>
                                <p className="text-stone-400">By integrating architecture, interiors, and landscape, we create cohesive and timeless environments that are unique and enduring.</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-serif text-white">Clarity & Quality</h3>
                                <p className="text-stone-400">We focus on clear design thinking, balancing aesthetics, functionality, and buildability, seeing architecture as a long-term investment.</p>
                            </div>
                        </FadeIn>
                    </div>
                </Container>
            </Section>

            {/* Team */}
            <Section className="bg-white">
                <Container>
                    <FadeIn>
                        <div className="mb-16">
                            <h2 className="text-sm font-bold tracking-widest uppercase text-stone-500 mb-4">Leadership</h2>
                            <h3 className="text-4xl font-serif text-charcoal-900">Principal Architects</h3>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                        {team.map((member, index) => (
                            <FadeIn key={member.name} delay={index * 0.1}>
                                <div className="group">
                                    <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-4">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale hover:grayscale-0"
                                        />
                                    </div>
                                    <h4 className="text-2xl font-serif text-charcoal-900">{member.name}</h4>
                                    <p className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-2">{member.role}</p>
                                    <p className="text-sm text-stone-600">{member.bio}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
    );
}

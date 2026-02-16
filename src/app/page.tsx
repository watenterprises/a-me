import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { projects } from "@/lib/data";
import { ArrowRight, Check } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] sm:h-[90vh] min-h-[500px] sm:min-h-[600px] w-full overflow-hidden flex items-center">
        {/* Background Image Restored */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/photos/1. HD photographs without watermark (min. 800 pixels wide)/46.jpg"
            alt="Hero Architecture"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <Container className="relative z-10 text-white">
          <FadeIn>
            <div className="max-w-4xl space-y-6 sm:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-serif leading-tight text-white/100">
                Every project begins with <span className="italic font-light text-stone-200">understanding</span>—creating meaningful architecture rooted in context, purpose, and experience.
              </h1>
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" href="/projects" className="bg-white text-charcoal-900 hover:bg-stone-200 w-full sm:w-auto text-center justify-center">
                  View Projects
                </Button>
                <Button variant="outline" size="lg" href="https://wa.me/919606407820" className="border-white text-white hover:bg-white/10 w-full sm:w-auto text-center justify-center">
                  Start a conversation
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Intro / About Snapshot */}
      <Section className="bg-white">
        <Container>
          <FadeIn>
            <div className="max-w-3xl">
              <h2 className="text-sm font-bold tracking-widest uppercase text-stone-500 mb-6">Who We Are</h2>
              <p className="text-xl md:text-2xl text-charcoal-900 leading-relaxed font-serif">
                a+me is a Bangalore-based design practice blending architecture, interiors, and landscape with context, clarity, and discipline.
              </p>
              <div className="mt-8">
                <Link href="/about" className="inline-flex items-center gap-2 group text-charcoal-900 font-medium hover:text-stone-600 transition-colors">
                  More about the studio <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Featured Projects */}
      <Section className="bg-stone-50">
        <Container>
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-sm font-bold tracking-widest uppercase text-stone-500 mb-2">Selected Works</h2>
                <h3 className="text-4xl font-serif text-charcoal-900">Featured Projects</h3>
              </div>
              <Button variant="link" href="/projects">View All Projects <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.slice(0, 4).map((project, index) => (
              <FadeIn delay={index * 0.1} key={project.id}>
                <Link href={`/projects/${project.id}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-white mb-6">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-bold tracking-widest uppercase text-stone-500">{project.category}</span>
                    <h4 className="text-2xl font-serif text-charcoal-900 group-hover:text-stone-600 transition-colors">{project.title}</h4>
                    <p className="text-stone-600 line-clamp-2">{project.description}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Design Philosophy (Short) */}
      <Section className="bg-charcoal-900 text-white">
        <Container>
          <FadeIn>
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-sm font-bold tracking-widest text-stone-400">"a+me" Equation</h2>
              <p className="text-xl md:text-2xl font-serif leading-relaxed text-stone-100">
                The name of our architecture firm embodies the essence of our design ideology, which emphasizes the thoughtful integration of multiple factors to innovate and create fresh forms. The concept revolves around the equation &quot;a + me.&quot; Here, &quot;a&quot; symbolizes architecture—the foundational element of our work—while the &quot;+&quot; represents the collaboration with our clients, highlighting the personalized approach we take in each project. The term &quot;me&quot; signifies the range of services we provide, conveyed through various mediums. Together, these elements merge to reflect our commitment to co-creating unique architectural solutions that resonate with both our clients&apos; visions and the surrounding environment.
              </p>
              <Link href="/about" className="inline-block border-b border-white pb-1 hover:text-stone-300 hover:border-stone-300 transition-colors">
                Read our full story
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Services Overview */}
      <Section className="bg-white">
        <Container>
          <FadeIn>
            <div className="mb-12 md:text-center max-w-2xl mx-auto">
              <h2 className="text-sm font-bold tracking-widest uppercase text-stone-500 mb-4">What We Do</h2>
              <h3 className="text-3xl md:text-4xl font-serif text-charcoal-900">Comprehensive Design Solutions</h3>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Architecture", desc: "Context-driven built environments." },
              { title: "Interiors", desc: "Spaces balancing aesthetics & utility." },
              { title: "Landscape", desc: "Harmonizing outdoor & built spaces." },
              { title: "Integrated Design", desc: "Seamless architecture + interior + landscape." }
            ].map((svc, i) => (
              <FadeIn delay={i * 0.1} key={i}>
                <div className="p-6 bg-stone-50 h-full border border-stone-100 hover:border-stone-200 transition-colors">
                  <h4 className="text-xl font-serif text-charcoal-900 mb-3">{svc.title}</h4>
                  <p className="text-stone-600 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" href="/services">View Detailed Services</Button>
          </div>
        </Container>
      </Section>

      {/* Why a+me */}
      <Section className="bg-stone-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-200 rounded-sm">
                {/* Generic Architectural Image, Not Founder */}
                <Image
                  src="/photos/1. HD photographs without watermark (min. 800 pixels wide)/35.jpg"
                  alt="a+me Studio Quality"
                  fill
                  className="object-cover transition-all duration-500"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-sm font-bold tracking-widest text-stone-500 mb-4">Why a+me</h2>
              <h3 className="text-3xl md:text-4xl font-serif text-charcoal-900 mb-8">Distinctive, Relevant, Enduring.</h3>
              <ul className="space-y-6">
                {[
                  { title: "Context-driven", desc: "Responding thoughtfully to site, climate, and client aspirations." },
                  { title: "Clarity of thinking", desc: "Balancing aesthetics, functionality, and buildability." },
                  { title: "Timeless outcomes", desc: "Creating environments that age gracefully and remain relevant." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 bg-charcoal-900 rounded-full p-1 h-fit w-fit text-white flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-charcoal-900">{item.title}</h4>
                      <p className="text-stone-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button variant="primary" href="/about">Learn about our approach</Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Contact CTA */}
      <Section className="bg-charcoal-900 text-white py-24">
        <Container className="text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">Ready to build something meaningful?</h2>
            <p className="text-xl text-stone-400 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your vision and how we can bring it to life through thoughtful design.
            </p>
            <Button variant="primary" size="lg" href="https://wa.me/919606407820" className="bg-white text-charcoal-900 hover:bg-stone-200">
              Start a conversation
            </Button>
          </FadeIn>
        </Container>
      </Section>
    </div>
  );
}

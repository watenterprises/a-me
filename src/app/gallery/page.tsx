import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { projects } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
    title: "Gallery | a+me",
    description: "A visual journey through our architecture, interior, and landscape projects.",
};

export default function GalleryPage() {
    // Aggregate all gallery images from all projects
    // Currently, we only have one project with a gallery, but this scales.
    const allImages = projects.flatMap((project) =>
        project.gallery ? project.gallery.map(img => ({ src: img, projectTitle: project.title })) : []
    );

    return (
        <div className="flex flex-col">
            <Section className="pt-24 md:pt-32 pb-12 bg-white">
                <Container>
                    <FadeIn>
                        <div className="max-w-2xl mb-12">
                            <h1 className="text-4xl md:text-5xl font-serif text-charcoal-900 mb-6">Visual Archive</h1>
                            <p className="text-sm text-stone-600 leading-relaxed">
                                A collection of moments, details, and spaces from our portfolio.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                        {allImages.map((item, index) => (
                            <FadeIn delay={index * 0.05} key={index}>
                                <div className="relative mb-4 overflow-hidden rounded-sm break-inside-avoid shadow-sm hover:shadow-md transition-shadow">
                                    <Image
                                        src={item.src}
                                        alt={`${item.projectTitle} Gallery Image ${index + 1}`}
                                        width={800}
                                        height={600}
                                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            </FadeIn>
                        ))}
                        {allImages.length === 0 && (
                            <p className="text-stone-500 italic">No gallery images available yet.</p>
                        )}
                    </div>
                </Container>
            </Section>
        </div>
    );
}

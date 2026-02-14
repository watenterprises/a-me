import { Container } from "@/components/ui/Container";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { FadeIn } from "@/components/ui/FadeIn";

export default function ProjectsPage() {
    return (
        <div className="flex flex-col">
            <section className="bg-white pt-32 md:pt-40 py-16 md:py-24">
                <Container>
                    <FadeIn delay={0.2}>
                        <ProjectGrid />
                    </FadeIn>
                </Container>
            </section>
        </div>
    );
}

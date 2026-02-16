"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Phone } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const phoneNumber = "919606407820";
        const text = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

        window.open(whatsappUrl, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    return (
        <div className="flex flex-col">
            <section className="bg-charcoal-900 text-white pt-32 pb-16 md:pt-48 md:pb-24">
                <Container>
                    <FadeIn>
                        <h1 className="text-5xl md:text-7xl font-serif mb-8 text-white">
                            Contact Us
                        </h1>
                        <p className="max-w-2xl text-lg md:text-xl text-stone-400 leading-relaxed">
                            Let's discuss your vision. We are currently accepting new projects for 2025.
                        </p>
                    </FadeIn>
                </Container>
            </section>

            <Section className="bg-white">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <FadeIn delay={0.1}>
                                    <h3 className="text-2xl font-serif text-charcoal-900 mb-6">Office</h3>
                                    <ul className="space-y-6">
                                        <li className="flex gap-4 items-start">
                                            <MapPin className="w-6 h-6 text-charcoal-900 mt-1" />
                                            <span className="text-stone-600 text-lg">No.245, 3rd Floor, HMT Layout,<br />Nellagadranahalli, Bengaluru – 560073</span>
                                        </li>
                                        <li className="flex gap-4 items-start">
                                            <Mail className="w-6 h-6 text-charcoal-900 mt-1" />
                                            <div className="flex flex-col space-y-2">
                                                <div className="flex flex-col">
                                                    <span className="text-xs font-bold uppercase tracking-widest text-stone-400">Projects enquire</span>
                                                    <a href="mailto:info@aplusme.in" className="text-stone-600 text-lg hover:text-charcoal-900 transition-colors">info@aplusme.in</a>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-xs font-bold uppercase tracking-widest text-stone-400">For vendors for consults</span>
                                                    <a href="mailto:office@aplusme.in" className="text-stone-600 text-lg hover:text-charcoal-900 transition-colors">office@aplusme.in</a>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-xs font-bold uppercase tracking-widest text-stone-400">For jobs and internships</span>
                                                    <a href="mailto:careers@aplusme.in" className="text-stone-600 text-lg hover:text-charcoal-900 transition-colors">careers@aplusme.in</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 items-center">
                                            <Phone className="w-6 h-6 text-charcoal-900" />
                                            <div className="flex flex-col">
                                                <a href="tel:+919606407820" className="text-stone-600 text-lg hover:text-charcoal-900 transition-colors">+91 96064 07820</a>
                                                <a href="tel:+917907261843" className="text-stone-600 text-lg hover:text-charcoal-900 transition-colors">+91 79072 61843</a>
                                            </div>
                                        </li>
                                    </ul>
                                </FadeIn>
                            </div>

                            <FadeIn delay={0.2} className="h-full">
                                <div className="h-64 w-full bg-stone-100 relative grayscale rounded-sm overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4003.4364132512537!2d77.50061107515377!3d13.033887513509463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dd489581821%3A0xbaa5caff7f389b35!2sa%2Bme%20Architects!5e1!3m2!1sen!2sin!4v1771235770931!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="a+me Architects Location"
                                    ></iframe>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Form */}
                        <div className="bg-stone-50 p-8 md:p-12 rounded-sm">
                            <FadeIn delay={0.3}>
                                <h3 className="text-2xl font-serif text-charcoal-900 mb-8">Send a Message</h3>
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-stone-500">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-white border border-stone-200 p-4 focus:outline-none focus:border-charcoal-900 transition-colors"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-stone-500">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-white border border-stone-200 p-4 focus:outline-none focus:border-charcoal-900 transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-stone-500">Message</label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full bg-white border border-stone-200 p-4 focus:outline-none focus:border-charcoal-900 transition-colors"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>
                                    <Button type="submit" variant="primary" className="w-full">Send Message</Button>
                                </form>
                            </FadeIn>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}

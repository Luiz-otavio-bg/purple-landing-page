

import { Navbar } from "@/components/ui/Navbar";
import { HeroSection } from "@/components/ui/HeroSection";
import { FeaturesSection } from "@/components/ui/FeaturesSection";
import { TestimonialsSection } from "@/components/ui/TestimonialSection";
import { FooterSection } from "@/components/ui/FooterSection";
import { FadeIn } from "@/components/ui/FadeIn";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CustomCursor } from "@/components/CustomCursor";


export default function Page() {
    return (
        <div className="relative">
            <CustomCursor />
            <Navbar /> 
            
            
            <main>
                <ScrollReveal id="home"> <HeroSection /> </ScrollReveal>
                <ScrollReveal id="features"> <FeaturesSection /> </ScrollReveal>
                <ScrollReveal id="testimonials"> <TestimonialsSection/> </ScrollReveal>
                <ScrollReveal id="footer"> <FooterSection /> </ScrollReveal>
                
            </main>
            
        </div>
    );
}
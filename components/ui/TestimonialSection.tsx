"use client";
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Card, CardContent } from "./card";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "./carousel";
import { Avatar, AvatarFallback, AvatarImage} from "@radix-ui/react-avatar"; 
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    { quote: "A simplicidade do Purple aliada à IA nos deu uma vantagem competitiva. Ganhamos 20% de produtividade.", name: "Alexia Mendes", title: "CEO, TechFusion", avatar: "/memojis/IMG_5118.png" },
    { quote: "Finalmente uma plataforma que a equipe gosta de usar. O design intuitivo reduziu nossa curva de aprendizado para zero.", name: "Bruno Garcia", title: "CTO, Geração Alpha", avatar: "/memojis/IMG_5115.png" },
    { quote: "O sistema é incrivelmente rápido e a segurança dos dados é inigualável. Essencial para qualquer líder de TI moderno.", name: "Carla Oliveira", title: "Líder de Produto, SoftData", avatar: "/memojis/IMG_5116.png" },
    { quote: "O suporte é ágil e as atualizações frequentes. O valor que o Purple entrega é muito superior ao preço cobrado.", name: "Daniel Rocha", title: "Consultor Sênior, BizGrow", avatar: "/memojis/IMG_5117.png" },
];
function TestimonialCarousel(){
    const [api, setApi] = useState<CarouselApi>();
    const [mounted, setMounted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const intervalRef = useRef<number | null>(null);
    useEffect(() => {
        if(!api) return;
        if (isPlaying){
            const intervalTime = 5000;
            if  (intervalRef.current !== null){
                window.clearInterval(intervalRef.current);
            }
            intervalRef.current = window.setInterval(() =>{
                api.scrollNext();
            }, intervalTime);
        } else {
            if (intervalRef.current !== null){
                window.clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
        return ()=> {
            if (intervalRef.current !== null){
                window.clearInterval(intervalRef.current)
            }
        };
    }, [api, isPlaying]);
    useEffect(() =>{
        setMounted(true);
    }, []);
    const onMouseEnter = useCallback (() => setIsPlaying(false), []);
    const onMouseLeave = useCallback (() => setIsPlaying(true), []);

    if (!mounted) {
        return (
            <div className="w-full max-w-5xl mx-auto h-96 flex items-center justify-center text-muted-foreground"> Carregando depoimentos...</div>
        );
    }
    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="w-full max-w-5xl mx-auto">
            <Carousel setApi={setApi} opts={{align: "start", loop: true, dragFree: true}}>
                <CarouselContent className="-ml-4">
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className="h-full border-2 border-/10 hover:border-purple/50 transition-colors shadow-xl">
                                            <CardContent className="flex flex-col items-start space-y-6 p-6">
                                                
                                                <Quote className="h-8 w-8 text-purple opacity-60" />
                                                
                                                
                                                <p className="text-lg italic font-medium text-foreground">&quot;{testimonial.quote}&quot;</p>
                                                
                                                        <div className="flex items-center space-x-3 pt-4 border-t border-border/50 w-full">
                                                            <div className="relative flex flex-col items-center">
                                                        
                                                        
                                                        <motion.div
                                                            whileHover={{ scale: 1.25 }}
                                                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                                            className="z-10 cursor-pointer"
                                                        >
                                                        
                                                            <motion.div
                                                                animate={{ y: [0, -12, 0] }}
                                                                transition={{
                                                                    duration: 3,
                                                                    repeat: Infinity,
                                                                    ease: "easeInOut",
                                                                    delay: index * 0.4
                                                                }}
                                                            >
                                                                <Avatar className="h-20 w-20 flex shrink-0 overflow-hidden rounded-full border-4 border-white shadow-lg bg-purple-50">
                                                                    <AvatarImage 
                                                                        src={testimonial.avatar} 
                                                                        alt={testimonial.name}
                                                                        className="aspect-square h-full w-full object-cover scale-110" 
                                                                    />
                                                                    <AvatarFallback className="flex h-full w-full items-center justify-center bg-purple-100 text-purple font-bold">
                                                                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                                                                    </AvatarFallback>
                                                                </Avatar>
                                                            </motion.div>
                                                        </motion.div>
                                                        
                                                        
                                                        <motion.div 
                                                            animate={{ 
                                                                scale: [1, 0.6, 1], 
                                                                opacity: [0.2, 0.05, 0.2] 
                                                            }}
                                                            transition={{
                                                                duration: 3,
                                                                repeat: Infinity,
                                                                ease: "easeInOut",
                                                                delay: index * 0.4
                                                            }}
                                                            className="absolute bottom-[-6px] w-12 h-1.5 bg-purple-900/20 rounded-[100%] blur-[3px]"
                                                        />
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                                                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {//<CarouselPrevious className="left-[-1.5rem] hidden md:flex" />
                        //<CarouselNext className="right-[-1.5rem] hidden md:flex" />
                        }
            </Carousel>
        </div>
    )
}
export function TestimonialsSection(){
    
    
    return (
        <section id="testimonials" className="w-full py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-purple2 mb-4">A Voz dos Nossos Clientes</h2>
                    <p className="text-xl text-muted-foreground">Veja por que líderes e equipes em território nacional confiam na <strong className='text-purple'>Purple</strong>.</p>
                </div>
                <TestimonialCarousel />
                
            </div>
        </section>
    );
}
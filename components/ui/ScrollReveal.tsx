"use client";

import { motion, useScroll, useTransform, HTMLMotionProps } from 'framer-motion';
import React, { useRef, ReactNode } from 'react';


interface ScrollRevealProps extends HTMLMotionProps<'div'> {
    children: ReactNode;
    yStart?: number;
    yEnd?: number;
    className?: string;
}

export function ScrollReveal({
    children,
    yStart = 50,
    yEnd = 0,
    className,
}: ScrollRevealProps) {
    
    const ref = useRef<HTMLDivElement>(null); 
    
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'start start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.5], [yStart, yEnd]);

    return (
        <motion.div 
            ref={ref}
            style={{ opacity, y }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
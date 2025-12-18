"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    yOffset?: number;
    once?: boolean;
    className?: string;
}

export function FadeIn({
    children,
    delay = 0.1,
    duration = 0.6,
    yOffset = 50,
    once = true,
    className,
}: FadeInProps) {
    const { ref, inView } = useInView ({
        triggerOnce: once,
        threshold: 0.1,
    })
    return (
    <motion.div
        ref={ref}
        initial={{ opacity: 0, y: yOffset }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
        transition={{ delay, duration, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
    );
}
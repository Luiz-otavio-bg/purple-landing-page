

"use client"; 

import React, { useState, useEffect } from 'react';

export function CustomCursor() {

    const [position, setPosition] = useState({ x: -100, y: -100 }); 

    useEffect(() => {
    
    const handleMouseMove = (e: MouseEvent) => {
        
        setPosition({ x: e.clientX, y: e.clientY });
    };

    
    document.addEventListener('mousemove', handleMouseMove);

    
    return () => {
        document.removeEventListener('mousemove', handleMouseMove);
    };
    }, []); 

    const style = {
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
    };

    return (
    <div
        className="fixed z-[9999] pointer-events-none 
                w-5 h-5 rounded-full border-1 border-primary/20
                bg-blue-800/10 backdrop-blur-3xl 
                opacity-70 transition-transform duration-100 ease-out" 
        style={style}
    />
    );
}
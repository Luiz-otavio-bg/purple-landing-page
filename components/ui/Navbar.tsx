"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from "next/link";
import { Button } from "./button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";

//------------------------------------------------------------------

const navLinks = [                                               //links de navegações.
{ name: "Home", href: "/" },         
{ name: "Roadmap", href: "/" },
]

//------------------------------------------------------------------

const sectionThemes = [
    { id: 'home', theme: 'light-on-dark' }, 
    { id: 'features', theme: 'dark-on-light' }, 
    { id: 'testimonials', theme: 'dark-on-light' },
    { id: 'footer', theme: 'light-on-dark' },
    
];

//------------------------------------------------------------------


export function Navbar(){
    const [navbarTheme, setNavbarTheme] = useState('light-on-dark');

    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY;
        let currentTheme = 'light-on-dark'; 
        const TRIGGER_OFFSET = 150; 

        for (const item of sectionThemes) {
            const section = document.getElementById(item.id);
            
            if (section) {
                const sectionTop = section.getBoundingClientRect().top + scrollY; 
                
                if (scrollY >= sectionTop - TRIGGER_OFFSET) {
                    currentTheme = item.theme;
                }
            }
        }
        
        
        if (currentTheme !== navbarTheme) {
            setNavbarTheme(currentTheme);
        }
    }, [navbarTheme]); 

    useEffect(() => {
        
        handleScroll(); 
        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]); 

    const isDarkOnLight = navbarTheme === 'dark-on-light';

    const navbarClasses = `
        fixed top-8 left-1/2 transform -translate-x-1/2 z-50
        transition-all duration-300 rounded-full h-14
        px-6 flex items-center justify-center space-x-4
        max-w-xs md:max-w-lg lg:max-w-xl
        
        ${isDarkOnLight
            ? 'bg-white/90 shadow-xl border-t border-b border-gray-200'
            : 'bg-white/10 backdrop-blur-md border border-white/20'
        }
    `;
    
    const textColor = isDarkOnLight ? 'text-purple' : 'text-white'; 
    const logoColor = isDarkOnLight ? 'text-purple' : 'text-white';
    return(
        <header className={navbarClasses}>
            <div className={`text-xl font-extrabold ${logoColor}`}>
                Purple.
            </div>
            <nav className={`flex items-center space-x-4 ${textColor}`}>
                <div className="w-auto h-12 rounded-full bg-transparent flex items-center justify-center pl-2 pr-4">
                </div>
                <div className="flex-1 hidden sm:flex items-center justify-center space-x-8 h-full ">
                    {navLinks.map((link) => (
                        <Link key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-purple/50 transition-colors">{link.name}</Link>))}
                </div>
                <div className="flex items-center space-x-2  pl-2 pr-2">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost"
                                    size="icon"
                                    className="rounded-full h-10 w-10 hover:bg-white/20">
                                        <Menu className="h-5 w-5"/>
                                        <span className="sr-only">Toggle Menu</span>
                                    </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full max-w-xl sm:max-w-md bg-background/50 backdrop-blur-xl p-0">
                            <div className="flex justify-between items-center px-8 py-4 border-b border-white/10">
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 rounded-full font-extrabold text-xl text-purple">P.</div> 
                                    <Link href="/" className="text-white text-sm ml-12">Home</Link> 
                                    <span className="text-white/50 text-sm">| RoadMap |</span>
                                </div>    
                            </div>
                            <div className="flex flex-col pt-4 divide-y divide-white/10">
                                {navLinks.map((link, index) => (
                                    <div key={link.name} className="flex items-center justify-between group">
                                        <span className="text-white/50 text-sm w-12 text-center p-6">
                                            {String(index + 1).padStart(2,'0')}
                                        </span>
                                    
                                    <Link
                                    href={link.href}
                                    className="flex-1 text-2xl md:text-3xl font-semibold text-white p-6 transition-colors hover:text-purple">
                                        {link.name === 'RoadMap' ? 'Grow Responsibly and Sustainably' : link.name}
                                        </Link>
                                    <span className="flex items-center space-x-4 p-6 text-white/50">
                                        <span className="text-xs">0{index + 3}</span>
                                        <Menu className="h-5 w-5 rotate-90"/>
                                    </span>
                                    </div>))}
                                    
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    )
}
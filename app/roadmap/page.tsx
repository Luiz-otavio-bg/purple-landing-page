"use client";

import {motion, AnimatePresence} from 'framer-motion';
import { useState, useMemo, useEffect } from 'react';
import { Navbar } from '@/components/ui/Navbar';

const Estrelas = () => {
    const [mounted, setMounted] = useState(false);
            useEffect(() => {
            setMounted(true);
            }, [])

    const estrelas = useMemo (()=>{
        return [... Array(80)].map ((_, i) => ({
            id: i,
            size: Math.random() * 2 + 1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            duration: Math.random() * 2 + 1.5,
            delay: Math.random() * 5,
            color: Math.random() > 0.8 ? '#b8b9e2' : '#ffffff',
        }));
    }, []);

    if (!mounted) return null;

    return(
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
            {estrelas.map((estrela)=>(
                <motion.div
                    key={estrela.id}
                    className="absolute bg-white rounded-full opacity-20"
                    style={{
                        width: estrela.size,
                        height: estrela.size,
                        top: estrela.top,
                        left: estrela.left,
                        backgroundColor: estrela.color,
                        boxShadow: `0 0 ${estrela.size * 4}px ${estrela.color}`,
                    }}
                    animate={{
                        opacity: [0.1, 0.6, 0.1],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: estrela.duration,
                        repeat: Infinity,
                        delay: estrela.delay,
                        ease: "easeInOut",
                    }}/>

                
            ))}
        </div>
    )
}


const roadmapSteps = [
    {id: 1, title: "Core Engine & UI", status: "completed", position: "top", description: "Finalização da interface com darkmode e UX otimizada."},
    {id: 2, title: "Smart Checkout PIX", status: "completed", position: "bottom", description: "Gateway de pagamento automatizado via PIX integraçado."},
    {id: 3, title: "Lançamento beta ", status: "up coming", position: "top", description: "Abertura da plataforma para farmácias fundadoras."},
    {id: 4, title: "Gestão de inventário", status: "up coming", position: "bottom", description: "Alertas de estoque crítico e controle de validades."},
    {id: 5, title: "Integração SNGPC", status: "up coming", position: "top", description: "Trasmissão de arquivos para controle de medicamentos (Anvisa)."},
    {id: 6, title: "App de delivery", status: "up coming", position: "bottom", description: "Canal de vendas direto para o cliente final."},
    {id: 7, title: "BI & Analytics", status: "up coming", position: "top", description: "Relatórios de lucratividades e curva ABC de produtos."},
    {id: 8, title: "Módulo CRM", status: "up coming", position: "bottom", description: "Sistema de fidelização e retenção de pacientes."},
    {id: 9, title: "IA Predict", status: "up coming", position: "top", description: "IA para sugestão de compras baseadas em sazonalidade."},
    {id: 10, title: "API de integração", status: "up coming", position: "bottom", description: "Abertura para integração com convênios e sistemas externos."},

];

export default function Roadmap (){
    
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);
    return (
        <section className='py-40 bg-purple text-white overflow-hidden cursor-default'>
            <Navbar/>
            <Estrelas/>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-32'>
                    <h2 className='text-5xl md:text-7xl font-bold tracking-tight'> O Caminho para a  <span className='text-purple3'> Purple </span></h2>
                </div>

                <div className='hidden md:flex relative max-w-6xl mx-auto h-[400px] items-center'>
                    <div className='absolute top-1/2 left-0 w-full h-[2px] bg-white/20 -translate-y-1/2'>
                    <motion.div initial={{ width:0}}
                                whileInView={{width:"100%"}}
                                viewport={{once: true}}
                                transition={{duration: 2.5, ease: "circOut"}}
                                className='absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-purple2 via-purple2 to-white -translate-y-1/2 shadow-[0_0_20px_rgba(85, 87, 244, 1)]'/>
                    </div>
                    <div className='relative flex justify-between w-full px-4'>
                        {roadmapSteps.map((step, index) =>(
                            <div key={step.id} className='relative flex flex-col items-center flex-1'
                                onMouseEnter={()=> setHoveredStep(step.id)}
                                onMouseLeave={()=> setHoveredStep(null)}>





                    {// dentro do site o efeito de linha com degrade para cima está como 'bottom' no codigo e vice-versa.
}
                                
                                
                                <div className={`absolute w-[1px] h-16 bg-gradient-to-b ${step.position === 'top'
                                    ? 'bottom-1/2 from-transparent to white/0' : 'top-1/2 from-white to-transparent'
                                }`}/>
                                <div className={`absolute w-[1px] h-16 bg-gradient-to-b ${step.position === 'bottom'
                                    ? 'top-1/2 from-transparent to white/0' : 'bottom-1/2 from-transparent to-white'
                                }`}/>

                                <div className='relative z-30 my-auto cursor-default'>
                                    <motion.div
                                        animate={{ scale: hoveredStep === step.id ? 1.3 : 1 }}
                                        className={`w-7 h-7 rounded-full border-2 flex items-center justify-center bg-white transition-all duration-300
                                        ${step.status === 'completed' || step.status === 'upcoming' 
                                        ? 'border-white shadow-[0_0_15px_rgba(255,255,255,0.8)]' 
                                        : 'bg-white/0'}`}>
                                        

                                        {step.status === 'up coming' && (<div className='w-2.5 h-2.5 bg-white/0 rounded-full animate-pulse'/>)}
                                        




                                    </motion.div>
                                
                                <AnimatePresence>
                                    {hoveredStep === step.id && (
                                        <motion.div
                                            initial={{ opacity: 0, y: step.position === 'top' ? 10 : -10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            className={`absolute left-1/2 -translate-x-1/2 z-[100] min-w-[220px] max-w-[280px] p-4 rounded-2xl bg-neutral-900/95 backdrop-blur-md border border-purple/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-center
                                            ${step.position === 'top' ? 'top-10' : 'bottom-12'}`}>

                                                <p className='text-sm text-white leading-relaxed whitespace-normal break-words'>{step.description}</p>
                                                <div className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-purple3 border-l border-t border-purple/50 rotate-45
                                                    ${step.position === 'top' ? '-top-1.5' : '-bottom-1.5'}`}></div>

                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                </div>
                                <div className={`absolute whitespace-nowrap text-center ${step.position === 'top' ? 'bottom-28' : 'top-28'}`}>
                                        <h3 className={`text-xs md:text-sm font-black tracking-widest uppercase 
                                            ${step.status === 'up coming' ? 'text-white/40' : 'text-white'}`}>
                                            {step.title}
                                        </h3>
                                </div>
                            </div>
                            
                            
                            
                        ))}
                    </div>
                </div>
                {//----------------------------------Ajuste pro Mobile-------------------------------//
                }
                <div className='md:hidden relative ml-4 border-l border-white/10 pl-8 space-y-12'> 
                    <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "65%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                    className="absolute left-[-1px] top-0 w-[2px] bg-gradient-to-b from-purple2 to-transparent shadow-[0_0_15px_rgba(85, 87, 244, 1)]"/>

                    {roadmapSteps.map((step, index)=>(
                        <motion.div 
                        key={step.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative"
                        >
                        <div className={`absolute left-[-41px] top-1 w-5 h-5 rounded-full border-2 bg-purple3 z-10
                            ${step.status === 'up coming' ? 'border-white/20' : 'border-white shadow-[0_0_10px_rgba(255,255,255,0.5)]'}`}>
                            {step.status === 'current' && <div className="w-full h-full bg-white rounded-full animate-pulse scale-50" />}
                        </div>
                        <div>
                            <span className="text-[10px] font-mono text-purple tracking-widest uppercase">Phase 0{step.id}</span>
                            <h3 className={`text-lg font-bold mb-2 ${step.status === 'upcoming' ? 'text-white/30' : 'text-white'}`}>{step.title}</h3>
                            <p className="text-sm text-neutral-400 leading-relaxed">{step.description}</p>
                        </div>

                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    )
}
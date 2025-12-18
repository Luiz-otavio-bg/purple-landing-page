import Link from "next/link";
import { Button } from "./button";

const floatingElements = [
    { top: '10%', left: '5%', size: 'text-8xl', opacity: 'opacity-10', duration: '15s' },
    { top: '30%', right: '15%', size: 'text-9xl', opacity: 'opacity-5', duration: '20s' },
    { top: '60%', left: '20%', size: 'text-7xl', opacity: 'opacity-15', duration: '12s' },
    { top: '80%', right: '5%', size: 'text-[100px]', opacity: 'opacity-8', duration: '18s' },
    { top: '50%', left: '50%', size: 'text-[120px]', opacity: 'opacity-3', duration: '10s' },
]

export function HeroSection(){
    return(
        <section id="home" className="relative w-full min-h-screen flex items-center justify-center pt-40 pb-20 overflow-hidden text-white bg-purple">
            <div className="absolute inset-0 z-0 pointer-events-none">
                {floatingElements.map((el, index) => (
                    <span key={index} style={{top:el.top,
                                            left:el.left || 'auto',
                                            right:el.right || 'auto',
                                            animation:`float ${el.duration} ease-in-out infinite alternate`,
                    }} className={`absolute ${el.size} font-extrabold text-white/90 ${el.opacity} lg:block hidden`}> P. </span>
                ))}
            </div>
            <div className="container max-w-4xl text-center z-10 p-4">
                <p className="text-sm font-medium text-white/70 tracking-widest uppercase mb-4">
                O Futuro é nosso | O futuro é roxo.</p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-none text-white mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple to bg-white"> O Fim
                    </span> do seus sistemas obsoletos. 
                </h1>
                <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Purple é a resposta moderna que simplifica processos complexos, permitindo que você e sua equipe foquem no que realmente importa: <strong>O Crescimento.</strong></p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-x-4">
                    <Button size="lg" className="h-14 px-8 text-lg font-bold bg-purple2 hover:bg-purple3 transition-all shadow-lg">
                        <Link href="#singup"> Comece Agora!</Link>
                    </Button>
                    <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-bold border-white/40 text-white bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm">
                        <Link href="#demo">Ver Demonstração</Link>
                    </Button>
                </div>
                <p className="text-sm text-white/60 mt-4"></p>
            </div>
        </section>
    )
}
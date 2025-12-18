import Link from "next/link";
import { Button } from "./button";

export function FooterSection(){
    return (
        <footer id="footer" className="w-full bg-purple text-white pt-20 pb-10">
            <div className="max-w-6xl mx-auto px-4 md:px-6 text-center border-b border-white/20 pb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Pronto para dar o Próximo Passo?</h2>
                <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">Junte-se a centenas de líderes que já revolucionaram sua gestão com o poder da <strong>Purple.</strong></p>
                <div className="flex justify-center space-x-4">
                    <Button asChild className="bg-white text-purple hover:bg-purple2 font-bold px-8 py-6 text-lg rounded-lg shadown-xl transition-all duration-300">
                        <Link href="#">
                            Comece Agora! 
                        </Link>
                    </Button>
                    
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 md:px-6 text-center pt-8 text-sm opacity-60">
                <p> &copy; {new Date().getFullYear()} Purple. Todos os direitos reservados.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <Link href="#" className="hover:text-white transition-colors">Política de Privacidade</Link>
                    <Link href="#" className="hover:text-white transition-colors">Termos de Serviço</Link>
                </div>
            </div>
        </footer>
    )
}
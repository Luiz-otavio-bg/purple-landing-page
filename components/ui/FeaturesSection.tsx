
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Zap, Sparkles, Shield, TrendingUp, Cpu, Users, } from "lucide-react";


const features = [{
    icon: Zap,
    title:"Performance imediata",
    description:"O sistema da Purple são otimizados para velocidade, garantindo que as tarefas do seu setor farmacêutico sejam concluidas rápidamentes.",
},
    {
    icon: Sparkles,
    title:"Design Intuitivo",
    description:"Interface moderna, limpa, e de alto nível, tornando a navegação agradável e eficiente aos colaboradores."
},
    {
    icon: Shield,
    title:"Segurança de Dados", 
    description:"Criptografia de ponta a ponta e conformidade com as normas globais, mantendo suas informações seguras.",
},
    {
    icon: TrendingUp,
    title:"Crescimento Escalável",
    description:"Acompanha o ritmo de vendas de sua farmácia, sem perda de performance."
},
    {
    icon: Cpu,
    title:"Integração com AI",
    description:"Ferramentas de Inteligência Artificial integradas para automação inteligente de tarefas e análises preditivas.",
},
    {
    icon: Users,
    title:"Colaboração Fluida",
    description: "Trabalhe em tempo real com sua equipe, elimine silos de informação e aumente a produtividade.",
},
];

//---------------------------------------------------------------------------------------------------

export function FeaturesSection(){
    return(
        <section id="features" className="w-full py-20 i md:py-32 bg-background/90">
            <div className="max-w-6xl mx-auto text-center z-10 p-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-purple2 mb-4 ">Transforme processos. <br /> Obtenha resultados.</h2>
                    <p className="text-xl text-muted-foreground">Descubra por que o Purple é a escolha de líderes que buscam <strong>simplicidade e poder</strong> em uma única plataforma.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {features.map((features, index) =>(
                        <Card key={index} className="bg-card/90 border-border/50 shadow-xl hover:shadow2xl hover:border-purple/50 transition-all duration-300">
                            <CardHeader>
                                <div className="p-3 w-fit rounded-full bg-primary/10 text-purple mb-4">
                                    <features.icon className="h-6 w-6"/>
                                </div>
                                <CardTitle className="text-xl font-bold text-purple3">
                                    {features.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {features.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
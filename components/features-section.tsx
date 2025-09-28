"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Globe, Zap, Users, Headphones } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    title: "Desenvolvimento Web",
    description: "Aplicações web modernas e responsivas usando as tecnologias mais atuais do mercado.",
    icon: <Globe className="size-5" />,
  },
  {
    title: "Apps Mobile",
    description: "Aplicativos nativos e híbridos para iOS e Android com performance excepcional.",
    icon: <Smartphone className="size-5" />,
  },
  {
    title: "Sistemas Customizados",
    description: "Soluções sob medida para automatizar processos e otimizar operações do seu negócio.",
    icon: <Code className="size-5" />,
  },
  {
    title: "Metodologia Ágil",
    description: "Desenvolvimento iterativo com entregas frequentes e feedback contínuo.",
    icon: <Zap className="size-5" />,
  },
  {
    title: "Equipe Especializada",
    description: "Desenvolvedores sênior com expertise em tecnologias modernas e melhores práticas.",
    icon: <Users className="size-5" />,
  },
  {
    title: "Suporte Dedicado",
    description: "Acompanhamento completo desde o desenvolvimento até a manutenção contínua.",
    icon: <Headphones className="size-5" />,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            Nossos Serviços
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Tudo que Você Precisa para Crescer</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Oferecemos soluções completas de desenvolvimento de software, desde a concepção até a implementação, para
            transformar sua visão em realidade digital.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={item}>
              <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    name: "MVP",
    price: "A partir de R$ 15.000",
    description: "Ideal para startups e validação de ideias.",
    features: [
      "Aplicação web responsiva",
      "Design moderno e intuitivo",
      "Funcionalidades essenciais",
      "Deploy e configuração",
      "30 dias de suporte",
    ],
    cta: "Solicitar Orçamento",
  },
  {
    name: "Aplicação Completa",
    price: "A partir de R$ 35.000",
    description: "Para empresas que precisam de soluções robustas.",
    features: [
      "Sistema web + mobile",
      "Painel administrativo",
      "Integrações com APIs",
      "Banco de dados otimizado",
      "Autenticação e segurança",
      "90 dias de suporte",
    ],
    cta: "Solicitar Orçamento",
    popular: true,
  },
  {
    name: "Solução Enterprise",
    price: "Sob consulta",
    description: "Para grandes empresas com necessidades específicas.",
    features: [
      "Arquitetura escalável",
      "Múltiplas integrações",
      "Dashboard analytics",
      "Suporte 24/7",
      "Treinamento da equipe",
      "Manutenção contínua",
      "SLA garantido",
    ],
    cta: "Falar com Especialista",
  },
]

function ServiceCards({ services }: { services: typeof services }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
      {services.map((service, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <Card
            className={`relative overflow-hidden h-full ${service.popular ? "border-primary shadow-lg" : "border-border/40 shadow-md"} bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
          >
            {service.popular && (
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                Mais Popular
              </div>
            )}
            <CardContent className="p-6 flex flex-col h-full">
              <h3 className="text-2xl font-bold">{service.name}</h3>
              <div className="flex items-baseline mt-4">
                <span className="text-2xl font-bold">{service.price}</span>
              </div>
              <p className="text-muted-foreground mt-2">{service.description}</p>
              <ul className="space-y-3 my-6 flex-grow">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center">
                    <Check className="mr-2 size-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full mt-auto rounded-full ${service.popular ? "bg-primary hover:bg-primary/90" : "bg-muted hover:bg-muted/80"}`}
                variant={service.popular ? "default" : "outline"}
              >
                {service.cta}
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            Nossos Pacotes
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Soluções para Cada Necessidade</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Escolha o pacote ideal para o seu projeto. Todos incluem consultoria gratuita e orçamento personalizado.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <ServiceCards services={services} />
        </div>
      </div>
    </section>
  )
}

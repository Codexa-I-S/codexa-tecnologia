"use client"

import { motion } from "framer-motion"
import { Mail, User, MessageSquare, Phone, Send } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Formata a mensagem para o email
    const emailBody = `
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}

Mensagem:
${formData.message}

---
Enviado através do formulário de contato do site.
    `.trim()

    // Cria o link mailto
    const mailtoLink = `mailto:codexa.technologgy@gmail.com?subject=Novo Contato do Site&body=${encodeURIComponent(emailBody)}`
    
    // Abre o cliente de email
    window.location.href = mailtoLink

    // Opcional: Limpar formulário após envio
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Coluna do Texto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Entre em Contato
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Vamos Transformar Sua Ideia em Realidade
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Pronto para levar seu projeto para o próximo nível? Entre em contato conosco 
                e vamos conversar sobre como podemos ajudar você.
              </p>
            </div>

            {/* Cards de Informação */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <Card className="border-border/40 bg-gradient-to-br from-background to-muted/5 backdrop-blur">
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">suaempresa@email.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/40 bg-gradient-to-br from-background to-muted/5 backdrop-blur">
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Telefone</h3>
                    <p className="text-muted-foreground">(11) 99999-9999</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Coluna do Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-border/40 bg-gradient-to-br from-background to-muted/5 backdrop-blur">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Nome */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium flex items-center space-x-2">
                      <User className="size-4" />
                      <span>Nome Completo</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border/40"
                    />
                  </div>

                  {/* Email e Telefone */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium flex items-center space-x-2">
                        <Mail className="size-4" />
                        <span>Email</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border/40"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium flex items-center space-x-2">
                        <Phone className="size-4" />
                        <span>Telefone</span>
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-background/50 border-border/40"
                      />
                    </div>
                  </div>

                  {/* Mensagem */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium flex items-center space-x-2">
                      <MessageSquare className="size-4" />
                      <span>Mensagem</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Conte-nos sobre seu projeto..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border/40 resize-none"
                    />
                  </div>

                  {/* Botão de Envio */}
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 transition-all duration-300"
                    size="lg"
                  >
                    <Send className="size-4 mr-2" />
                    Enviar Mensagem
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Ao enviar este formulário, você será redirecionado para seu cliente de email.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
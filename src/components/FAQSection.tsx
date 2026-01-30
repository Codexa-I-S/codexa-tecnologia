import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Quais tipos de software a CODEXA desenvolve?',
    answer: 'Desenvolvemos uma ampla gama de soluções: aplicações web responsivas, aplicativos mobile nativos e híbridos, sistemas de gestão empresarial (ERP), plataformas de e-commerce, APIs e microsserviços, dashboards analíticos e muito mais. Cada projeto é personalizado conforme as necessidades específicas do cliente.',
  },
  {
    question: 'Qual é o prazo médio para desenvolvimento de um projeto?',
    answer: 'O prazo varia conforme a complexidade do projeto. Projetos simples podem ser entregues em 4-6 semanas, enquanto soluções mais robustas podem levar de 3 a 6 meses. Trabalhamos com metodologias ágeis (Scrum/Kanban) para garantir entregas incrementais e transparência total durante todo o processo.',
  },
  {
    question: 'A CODEXA oferece suporte após a entrega do projeto?',
    answer: 'Sim! Oferecemos planos de suporte e manutenção contínua 24/7. Isso inclui correção de bugs, atualizações de segurança, melhorias de performance e evolução de funcionalidades. Nosso time de suporte está sempre disponível para garantir que sua solução opere com máxima eficiência.',
  },
  {
    question: 'Quais tecnologias vocês utilizam?',
    answer: 'Utilizamos as tecnologias mais modernas do mercado: React, Next.js, Node.js, Python, TypeScript, Go para desenvolvimento; AWS, Azure e GCP para cloud; TensorFlow e PyTorch para IA; PostgreSQL, MongoDB e Redis para bancos de dados; Docker e Kubernetes para containerização.',
  },
  {
    question: 'Como funciona o processo de consultoria em TI?',
    answer: 'Nossa consultoria começa com uma análise profunda do seu cenário atual (As-Is), seguida pela definição do estado desejado (To-Be). Desenvolvemos um roadmap estratégico, identificamos quick wins e priorizamos iniciativas por impacto. Acompanhamos a implementação e medimos resultados com KPIs definidos.',
  },
  {
    question: 'A CODEXA trabalha com empresas de todos os tamanhos?',
    answer: 'Absolutamente! Atendemos desde startups em fase inicial até grandes corporações. Para cada segmento, adaptamos nossa abordagem: startups recebem soluções ágeis e escaláveis com custo otimizado; empresas consolidadas obtêm projetos robustos com alta capacidade de integração e governança.',
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] orb orb-blue opacity-15" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm font-medium mb-6">
            FAQ
          </span>
          <h2 className="text-5xl font-bold mb-6">
            Dúvidas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Encontre respostas para as principais perguntas sobre nossos serviços e processos.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border-white/10 px-6 rounded-2xl overflow-hidden data-[state=open]:glow-sm"
              >
                <AccordionTrigger className="py-6 text-left text-white hover:text-primary hover:no-underline transition-colors duration-300 [&[data-state=open]]:text-primary">
                  <span className="pr-4 font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-white/60 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6">Não encontrou o que procurava?</p>
          <a href="#contact" className="btn-outline-neon inline-flex items-center justify-center">
            Fale com Nossa Equipe
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;

import { motion } from 'framer-motion';
import { Code, Cloud, Brain, Shield, Cpu, Database } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Desenvolvimento de Software',
    description: 'Soluções personalizadas e escaláveis para transformar sua visão em realidade digital.',
    features: ['Aplicações Web', 'Apps Mobile', 'APIs RESTful'],
  },
  {
    icon: Brain,
    title: 'Inteligência Artificial',
    description: 'Machine Learning e automação inteligente para otimizar processos e decisões.',
    features: ['Machine Learning', 'Chatbots', 'Análise Preditiva'],
  },
  {
    icon: Cloud,
    title: 'Infraestrutura Cloud',
    description: 'Arquitetura em nuvem segura, resiliente e preparada para escalar.',
    features: ['AWS / Azure / GCP', 'DevOps', 'Microsserviços'],
  },
  {
    icon: Shield,
    title: 'Consultoria em TI',
    description: 'Estratégias tecnológicas alinhadas aos objetivos do seu negócio.',
    features: ['Auditoria', 'Planejamento', 'Transformação Digital'],
  },
  {
    icon: Database,
    title: 'Big Data & Analytics',
    description: 'Transforme dados em insights acionáveis e vantagem competitiva.',
    features: ['Data Lakes', 'BI Dashboards', 'ETL Pipelines'],
  },
  {
    icon: Cpu,
    title: 'Automação de Processos',
    description: 'RPA e workflows automatizados para eficiência operacional.',
    features: ['RPA', 'Integração de Sistemas', 'Workflows'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] orb orb-purple opacity-20" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
            Nossos Serviços
          </span>
          <h2 className="section-title mb-6">
            Soluções que <span className="text-gradient">Impulsionam</span> seu Negócio
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Oferecemos um portfólio completo de serviços tecnológicos para atender 
            às necessidades mais complexas do mercado.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-card p-8 group cursor-pointer transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Icon */}
              <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 rounded-2xl bg-neon-gradient opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="absolute inset-[1px] rounded-[15px] bg-black/80 flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-gradient transition-colors duration-300" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-3 py-1 text-xs font-medium text-white/70 border border-white/10 rounded-full bg-white/5 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover Glow Line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-neon-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

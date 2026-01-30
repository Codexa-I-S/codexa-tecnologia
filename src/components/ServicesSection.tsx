import { motion } from 'framer-motion';
import { Code, Smartphone, Settings, Users, Headphones, Zap } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Desenvolvimento Web',
    description: 'Aplicações web modernas e responsivas usando as tecnologias mais atuais do mercado.',
    features: ['React/Next.js', 'Node.js', 'TypeScript'],
  },
  {
    icon: Smartphone,
    title: 'Apps Mobile',
    description: 'Aplicativos nativos e híbridos para iOS e Android com performance excepcional.',
    features: ['React Native', 'Flutter', 'iOS/Android'],
  },
  {
    icon: Settings,
    title: 'Sistemas Customizados',
    description: 'Soluções sob medida para automatizar processos e otimizar operações do seu negócio.',
    features: ['Automação', 'Integração', 'APIs'],
  },
  {
    icon: Zap,
    title: 'Metodologia Ágil',
    description: 'Desenvolvimento iterativo com entregas frequentes e feedback contínuo.',
    features: ['Scrum', 'Kanban', 'DevOps'],
  },
  {
    icon: Users,
    title: 'Equipe Especializada',
    description: 'Desenvolvedores sênior com expertise em tecnologias modernas e melhores práticas.',
    features: ['Sênior', 'Full-Stack', 'Especialistas'],
  },
  {
    icon: Headphones,
    title: 'Suporte Dedicado',
    description: 'Acompanhamento completo desde o desenvolvimento até a manutenção contínua.',
    features: ['24/7', 'Manutenção', 'Consultoria'],
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
          <h2 className="text-5xl font-bold mb-6">
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
              className="glass-card p-8 group cursor-pointer transition-all duration-500 hover:scale-[1.02] overflow-hidden"
            >
              {/* Icon */}
              <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 rounded-2xl bg-neon-gradient opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="absolute inset-[1px] rounded-[15px] bg-black/80 flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-primary transition-colors duration-300" />
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
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-neon-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

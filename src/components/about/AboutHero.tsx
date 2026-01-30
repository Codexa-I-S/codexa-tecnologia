import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section id="about" className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
      {/* Background gradient nebula effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[150px] animate-pulse-glow delay-500" />
      </div>
      
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-6">
            Sobre a CODEXA
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Nossa História.{' '}
            <span className="text-gradient">Nosso Código.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça a equipe por trás da inovação que está transformando o futuro da tecnologia
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;

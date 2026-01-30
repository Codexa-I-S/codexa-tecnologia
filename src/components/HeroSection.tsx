import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 grid-bg" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 orb orb-blue opacity-40" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 orb orb-purple opacity-40" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] orb orb-blue opacity-20" style={{ animationDelay: '4s' }} />

      {/* Central 3D Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full border border-primary/20"
        />
        {/* Middle Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-12 rounded-full border border-secondary/30"
        />
        {/* Inner Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-24 rounded-full border border-primary/40"
        />
        {/* Core Glow */}
        <div className="absolute inset-32 rounded-full bg-gradient-radial from-primary/30 via-secondary/20 to-transparent animate-pulse-glow" />
        
        {/* Orbiting Dots */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-md" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-12"
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-secondary glow-md" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight mb-6"
        >
          <span className="text-white">Tenha </span>
          <span className="text-gradient">O Futuro da</span>
          <br />
          <span className="text-gradient">Tecnologia</span>
          <span className="text-white"> em Suas Mãos</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-md text-white/60 max-w-2xl mx-auto mb-12"
        >
          Transformamos ideias em soluções digitais inovadoras. 
          Software sob medida, consultoria especializada e tecnologia de última geração.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#services" className="btn-neon inline-flex items-center justify-center gap-2 group">
            Conheça Nossas Soluções
          </a>
          <a href="#contact" className="btn-outline-neon inline-flex items-center justify-center">
            Entre em Contato
          </a>
        </motion.div>

        
      </div>
    </section>
  );
};

export default HeroSection;

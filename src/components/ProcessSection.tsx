import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';
import { Search, Code, Rocket } from 'lucide-react';

interface ProcessStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: 'blue' | 'purple' | 'cyan';
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Descoberta',
    subtitle: 'Exploração de Dados',
    description: 'Mergulhamos no seu ecossistema para identificar oportunidades e arquitetar a solução ideal.',
    icon: Search,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Desenvolvimento',
    subtitle: 'Codificação Futurista',
    description: 'Transformamos conceitos em realidade através de engenharia de software de alta performance e design centrado no usuário.',
    icon: Code,
    color: 'purple',
  },
  {
    id: 3,
    title: 'Entrega & Suporte',
    subtitle: 'Lançamento e Evolução',
    description: 'Implementação impecável e acompanhamento contínuo para garantir que sua tecnologia nunca pare de evoluir.',
    icon: Rocket,
    color: 'cyan',
  },
];

// 3D Tilt Card Component with Mouse Tracking
const TiltCard = ({ children, color }: { children: React.ReactNode; color: 'blue' | 'purple' | 'cyan' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);
  
  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };
  
  const colorMap = {
    blue: 'hsl(var(--neon-blue))',
    purple: 'hsl(var(--neon-purple))',
    cyan: 'hsl(var(--neon-cyan))',
  };
  
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer"
    >
      {/* Background with glassmorphism */}
      <div className="absolute inset-0 bg-[#1A1A1A] border border-white/10 rounded-3xl backdrop-blur-xl" />
      
      {/* Mouse tracking glow */}
      <motion.div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 rounded-3xl"
        style={{
          opacity: isHovered ? 0.6 : 0,
          background: `radial-gradient(600px circle at ${glowX}% ${glowY}%, ${colorMap[color]}20, transparent 40%)`,
        }}
      />
      
      {/* Inner glow border */}
      <div 
        className="absolute inset-[1px] rounded-3xl"
        style={{
          boxShadow: isHovered 
            ? `inset 0 0 40px ${colorMap[color]}20, 0 0 60px ${colorMap[color]}30`
            : `inset 0 0 20px ${colorMap[color]}10`,
          transition: 'box-shadow 0.3s ease',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center p-8">
        {children}
      </div>
    </motion.div>
  );
};

// Neural Network Animation for Discovery
const NeuralNetworkAnimation = () => {
  const nodes = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
  }));
  
  return (
    <div className="relative w-full h-full">
      {/* Scanning lupa effect */}
      <motion.div
        className="absolute w-24 h-24 rounded-full border-4 border-neon-blue"
        animate={{
          x: ['-20%', '80%', '30%', '-20%'],
          y: ['20%', '60%', '-10%', '20%'],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          boxShadow: '0 0 40px hsl(var(--neon-blue) / 0.5), inset 0 0 20px hsl(var(--neon-blue) / 0.3)',
        }}
      >
        <div className="absolute inset-2 rounded-full bg-neon-blue/10 backdrop-blur-sm" />
      </motion.div>
      
      {/* Neural nodes */}
      <svg className="absolute inset-0 w-full h-full">
        {nodes.map((node, i) => (
          <g key={node.id}>
            {/* Connections */}
            {nodes.slice(i + 1, i + 3).map((target) => (
              <motion.line
                key={`${node.id}-${target.id}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${target.x}%`}
                y2={`${target.y}%`}
                stroke="hsl(var(--neon-blue))"
                strokeWidth="1"
                strokeOpacity="0.2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: node.delay }}
              />
            ))}
            {/* Node */}
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="4"
              fill="hsl(var(--neon-blue))"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [1, 1.5, 1], 
                opacity: [0.4, 1, 0.4] 
              }}
              transition={{
                duration: 3,
                delay: node.delay,
                repeat: Infinity,
              }}
            />
          </g>
        ))}
      </svg>
      
      {/* Central icon */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Search className="w-16 h-16 text-neon-blue" style={{ filter: 'drop-shadow(0 0 20px hsl(var(--neon-blue)))' }} />
      </motion.div>
    </div>
  );
};

// Floating Code Animation for Development
const FloatingCodeAnimation = () => {
  const codeLines = [
    'const future = await buildSolution();',
    'function innovate(ideas: Vision[]) {',
    '  return transform(ideas);',
    '}',
    'deploy({ performance: "max" });',
    'const success = optimize(code);',
  ];
  
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Floating code lines */}
      {codeLines.map((line, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-sm text-neon-purple/80 whitespace-nowrap"
          style={{
            top: `${15 + i * 14}%`,
            left: `${10 + (i % 3) * 20}%`,
          }}
          initial={{ opacity: 0, x: -50, rotateX: 45 }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            x: [-50, 0, 50],
            z: [0, 50, 0],
          }}
          transition={{
            duration: 6,
            delay: i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {line}
        </motion.div>
      ))}
      
      {/* Pulsing particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 rounded-full bg-neon-purple"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 10px hsl(var(--neon-purple))',
          }}
          animate={{
            scale: [0.5, 1.5, 0.5],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 2,
            delay: Math.random() * 2,
            repeat: Infinity,
          }}
        />
      ))}
      
      {/* Central code icon */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        <Code className="w-16 h-16 text-neon-purple" style={{ filter: 'drop-shadow(0 0 20px hsl(var(--neon-purple)))' }} />
      </motion.div>
    </div>
  );
};

// Rocket Launch Animation for Delivery
const RocketLaunchAnimation = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Light beam portal */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-full"
        style={{
          background: 'linear-gradient(to top, hsl(var(--neon-cyan) / 0.4), hsl(var(--neon-blue) / 0.2), transparent)',
          filter: 'blur(20px)',
        }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scaleX: [1, 1.5, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
      
      {/* Portal ring */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-40 h-20 rounded-full border-2 border-neon-cyan"
        style={{
          boxShadow: '0 0 30px hsl(var(--neon-cyan) / 0.5), inset 0 0 20px hsl(var(--neon-cyan) / 0.3)',
          transform: 'translateX(-50%) perspective(100px) rotateX(60deg)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
      
      {/* Rocket */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2"
        animate={{
          y: ['60%', '30%', '60%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Rocket 
          className="w-20 h-20 text-neon-cyan rotate-[-45deg]" 
          style={{ filter: 'drop-shadow(0 0 30px hsl(var(--neon-cyan)))' }} 
        />
        
        {/* Exhaust flames */}
        <motion.div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-16 rotate-[-45deg]"
          style={{
            background: 'linear-gradient(to bottom, hsl(var(--neon-cyan)), hsl(var(--neon-blue)), transparent)',
            filter: 'blur(8px)',
            transformOrigin: 'top center',
          }}
          animate={{
            scaleY: [0.8, 1.2, 0.8],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
          }}
        />
      </motion.div>
      
      {/* Data particles flying up */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-4 bg-neon-cyan rounded-full"
          style={{
            left: `${40 + Math.random() * 20}%`,
            boxShadow: '0 0 10px hsl(var(--neon-cyan))',
          }}
          animate={{
            y: ['100%', '-100%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: Math.random() * 2,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
};

// Process Step Component
const ProcessStep = ({ step, index }: { step: ProcessStep; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const blurValue = useTransform(scrollYProgress, [0, 0.3], [10, 0]);
  
  const isReversed = index % 2 === 1;
  
  const getAnimation = () => {
    switch (step.id) {
      case 1:
        return <NeuralNetworkAnimation />;
      case 2:
        return <FloatingCodeAnimation />;
      case 3:
        return <RocketLaunchAnimation />;
      default:
        return null;
    }
  };
  
  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="relative py-16 md:py-24"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
        {/* Media Card */}
        <motion.div
          style={{ y: parallaxY }}
          className={`${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
        >
          <TiltCard color={step.color}>
            {getAnimation()}
          </TiltCard>
        </motion.div>
        
        {/* Text Content */}
        <motion.div
          style={{ 
            y,
            filter: `blur(${blurValue}px)`,
          }}
          className={`${isReversed ? 'lg:order-1 lg:text-right' : 'lg:order-2'}`}
        >
          {/* Step number */}
          <motion.span
            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block text-8xl font-bold text-white/5 absolute -top-8 select-none"
            style={{ 
              [isReversed ? 'right' : 'left']: 0,
              textShadow: `0 0 60px hsl(var(--neon-${step.color}) / 0.3)`,
            }}
          >
            0{step.id}
          </motion.span>
          
          {/* Subtitle badge */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`inline-block px-4 py-2 rounded-full border bg-white/5 text-sm font-medium mb-4 ${
              step.color === 'blue' 
                ? 'border-neon-blue/30 text-neon-blue' 
                : step.color === 'purple'
                ? 'border-neon-purple/30 text-neon-purple'
                : 'border-neon-cyan/30 text-neon-cyan'
            }`}
          >
            {step.subtitle}
          </motion.span>
          
          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            {step.title}
          </motion.h3>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-white/60 leading-relaxed max-w-md"
            style={{ marginLeft: isReversed ? 'auto' : 0 }}
          >
            {step.description}
          </motion.p>
          
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`h-[2px] w-24 mt-8 ${
              step.color === 'blue' 
                ? 'bg-neon-blue' 
                : step.color === 'purple'
                ? 'bg-neon-purple'
                : 'bg-neon-cyan'
            }`}
            style={{ 
              transformOrigin: isReversed ? 'right' : 'left',
              marginLeft: isReversed ? 'auto' : 0,
              boxShadow: `0 0 20px hsl(var(--neon-${step.color}) / 0.5)`,
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  
  // Background glow that changes based on scroll
  const blueGlow = useTransform(scrollYProgress, [0, 0.33], [0.3, 0]);
  const purpleGlow = useTransform(scrollYProgress, [0.2, 0.5, 0.66], [0, 0.3, 0]);
  const cyanGlow = useTransform(scrollYProgress, [0.5, 0.8], [0, 0.3]);
  
  return (
    <section ref={sectionRef} id="process" className="relative py-32 overflow-hidden">
      {/* Animated background glows */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: blueGlow }}
      >
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-neon-blue/20 blur-[150px]" />
      </motion.div>
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: purpleGlow }}
      >
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] rounded-full bg-neon-purple/20 blur-[150px]" />
      </motion.div>
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: cyanGlow }}
      >
        <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-neon-cyan/20 blur-[150px]" />
      </motion.div>
      
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
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
            Nosso Processo
          </span>
          <h2 className="section-title mb-6">
            Como <span className="text-gradient">Transformamos</span> Ideias em Realidade
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Uma jornada meticulosa de descoberta, desenvolvimento e entrega 
            que garante resultados excepcionais.
          </p>
        </motion.div>
        
        {/* Process Steps */}
        <div className="space-y-8 md:space-y-0">
          {processSteps.map((step, index) => (
            <ProcessStep key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

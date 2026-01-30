import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MissionControlDashboard = () => {
  const [launched, setLaunched] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [statusUpdates, setStatusUpdates] = useState<string[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setLaunched(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (launched) {
      const updates = [
        'SISTEMAS OPERACIONAIS...',
        'MONITORAMENTO ATIVO...',
        'DEPLOY COMPLETO ✓',
      ];
      
      updates.forEach((update, index) => {
        setTimeout(() => {
          setStatusUpdates((prev) => [...prev, update]);
        }, (index + 1) * 800);
      });
    }
  }, [launched]);

  return (
    <motion.div 
      className="glass-card overflow-hidden relative"
      style={{
        boxShadow: `
          0 0 30px hsla(270, 100%, 65%, 0.2),
          0 0 60px hsla(190, 100%, 50%, 0.1),
          inset 0 1px 0 hsla(0, 0%, 100%, 0.05)
        `,
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Dashboard Header */}
      <div className="px-4 py-3 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse" />
          <span className="text-sm font-mono text-muted-foreground">CONTROLE DA MISSÃO</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-neon-green/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-neon-cyan/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-neon-purple/60" />
        </div>
      </div>

      <div className="p-4 md:p-6">
        {/* Status Panels */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <StatusPanel 
            label="SISTEMA" 
            value="OK" 
            color="green" 
            active={launched}
          />
          <StatusPanel 
            label="SEGURANÇA" 
            value="99.99%" 
            color="cyan" 
            active={launched}
          />
          <StatusPanel 
            label="SUPORTE" 
            value="24/7" 
            color="purple" 
            active={launched}
          />
        </div>

        {/* Rocket Animation Container */}
        <div 
          className="relative h-[200px] md:h-[260px] rounded-xl overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, hsl(222 47% 3%) 0%, hsl(260 40% 6%) 100%)',
          }}
        >
          {/* Stars */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-foreground/60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Launch Pad */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-4">
            <div className="w-full h-full bg-gradient-to-t from-muted to-transparent rounded-t-lg" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-muted-foreground/30 rounded" />
          </div>

          {/* Countdown */}
          <AnimatePresence>
            {!launched && countdown > 0 && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.span
                  key={countdown}
                  className="text-6xl md:text-8xl font-bold text-glow-cyan text-primary font-mono"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {countdown}
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Rocket */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 bottom-8"
            initial={{ y: 0 }}
            animate={launched ? { y: -400 } : { y: 0 }}
            transition={{ 
              duration: 3, 
              ease: [0.4, 0, 0.2, 1],
              delay: 0.2,
            }}
          >
            {/* Rocket Body */}
            <div className="relative">
              {/* Rocket SVG */}
              <svg width="50" height="90" viewBox="0 0 50 90" className="relative z-10">
                {/* Nose Cone */}
                <path
                  d="M25 0 L35 25 L15 25 Z"
                  fill="url(#rocketNose)"
                />
                {/* Body */}
                <rect x="15" y="25" width="20" height="40" fill="url(#rocketBody)" rx="2" />
                {/* Window */}
                <circle cx="25" cy="40" r="6" fill="hsl(210 100% 60%)" opacity="0.8" />
                <circle cx="25" cy="40" r="4" fill="hsl(190 100% 50%)" opacity="0.6" />
                {/* Fins */}
                <path d="M15 55 L5 70 L15 65 Z" fill="hsl(270 100% 65%)" />
                <path d="M35 55 L45 70 L35 65 Z" fill="hsl(270 100% 65%)" />
                {/* Engine */}
                <rect x="18" y="65" width="14" height="8" fill="hsl(222 30% 20%)" rx="1" />
                
                <defs>
                  <linearGradient id="rocketNose" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(190 100% 50%)" />
                    <stop offset="100%" stopColor="hsl(210 100% 60%)" />
                  </linearGradient>
                  <linearGradient id="rocketBody" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(220 20% 85%)" />
                    <stop offset="50%" stopColor="hsl(220 20% 95%)" />
                    <stop offset="100%" stopColor="hsl(220 20% 75%)" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Thrust Effect */}
              {launched && (
                <motion.div
                  className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-8"
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Main Thrust */}
                  <motion.div
                    className="w-full h-16 rounded-b-full"
                    style={{
                      background: 'linear-gradient(180deg, hsl(30 100% 60%) 0%, hsl(20 100% 50%) 30%, hsl(270 100% 65%) 60%, transparent 100%)',
                    }}
                    animate={{
                      scaleY: [1, 1.2, 1],
                      opacity: [0.9, 1, 0.9],
                    }}
                    transition={{
                      duration: 0.15,
                      repeat: Infinity,
                    }}
                  />
                  {/* Glow */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-20 rounded-full blur-lg"
                    style={{
                      background: 'radial-gradient(ellipse, hsla(30 100% 60% / 0.6) 0%, transparent 70%)',
                    }}
                  />
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Light Beam Effect */}
          {launched && (
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: '100%', opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div
                className="w-full h-full"
                style={{
                  background: 'linear-gradient(180deg, transparent 0%, hsla(270 100% 65% / 0.1) 50%, hsla(270 100% 65% / 0.3) 100%)',
                  clipPath: 'polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)',
                }}
              />
            </motion.div>
          )}
        </div>

        {/* Status Log */}
        <div className="mt-4 h-16 overflow-hidden">
          <div className="font-mono text-xs space-y-1">
            {statusUpdates.map((update, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-muted-foreground"
              >
                <span className="text-neon-green">▸</span> {update}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const StatusPanel = ({ 
  label, 
  value, 
  color, 
  active 
}: { 
  label: string; 
  value: string; 
  color: 'green' | 'cyan' | 'purple'; 
  active: boolean;
}) => {
  const colorMap = {
    green: {
      text: 'text-neon-green text-glow-green',
      border: 'border-neon-green/30',
      bg: 'bg-neon-green/5',
    },
    cyan: {
      text: 'text-neon-cyan text-glow-cyan',
      border: 'border-neon-cyan/30',
      bg: 'bg-neon-cyan/5',
    },
    purple: {
      text: 'text-neon-purple text-glow-purple',
      border: 'border-neon-purple/30',
      bg: 'bg-neon-purple/5',
    },
  };

  return (
    <motion.div
      className={`rounded-lg border p-2 md:p-3 text-center ${colorMap[color].border} ${colorMap[color].bg}`}
      initial={{ opacity: 0.3 }}
      animate={{ opacity: active ? 1 : 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-[10px] md:text-xs text-muted-foreground mb-1">{label}</div>
      <div className={`text-sm md:text-lg font-bold font-mono ${colorMap[color].text}`}>
        {value}
      </div>
    </motion.div>
  );
};

export default MissionControlDashboard;
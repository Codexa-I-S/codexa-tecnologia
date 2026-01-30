import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface CodeLine {
  text: string;
  x: number;
  y: number;
  z: number;
  opacity: number;
  speed: number;
}

interface Particle {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
}

const DevelopmentAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const codeLinesRef = useRef<CodeLine[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  const codeSnippets = [
    'const deploy = async () => {',
    '  await buildProject();',
    '  return SUCCESS;',
    '};',
    'function optimize(data) {',
    '  return data.map(transform);',
    '}',
    'interface Solution {',
    '  scale: "infinite";',
    '  quality: "maximum";',
    '}',
    'export default App;',
    'npm run build',
    'git push origin main',
    '<Component {...props} />',
    'useEffect(() => {}, []);',
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resizeCanvas();

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    // Initialize code lines
    const lines: CodeLine[] = [];
    for (let i = 0; i < 12; i++) {
      lines.push({
        text: codeSnippets[i % codeSnippets.length],
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 100 + 50,
        opacity: Math.random() * 0.5 + 0.2,
        speed: Math.random() * 0.3 + 0.1,
      });
    }
    codeLinesRef.current = lines;

    // Initialize particles
    const particles: Particle[] = [];
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.05 + 0.02,
      });
    }
    particlesRef.current = particles;

    const animate = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      
      ctx.clearRect(0, 0, w, h);
      timeRef.current += 0.016;

      // Draw code lines with 3D effect
      ctx.font = '13px "JetBrains Mono", monospace';
      
      codeLinesRef.current.forEach((line) => {
        // Parallax movement
        line.y -= line.speed;
        if (line.y < -50) {
          line.y = h + 50;
          line.x = Math.random() * w;
        }

        // Calculate 3D scale based on z
        const scale = 150 / line.z;
        const fontSize = 13 * scale;
        
        ctx.save();
        ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
        
        // Purple gradient for code
        const gradient = ctx.createLinearGradient(line.x, line.y, line.x + 200, line.y);
        gradient.addColorStop(0, `hsla(270, 100%, 65%, ${line.opacity * scale})`);
        gradient.addColorStop(1, `hsla(270, 100%, 65%, ${line.opacity * scale * 0.3})`);
        
        ctx.fillStyle = gradient;
        ctx.fillText(line.text, line.x, line.y);
        ctx.restore();
      });

      // Draw pulsing particles
      particlesRef.current.forEach((particle) => {
        particle.pulse += particle.pulseSpeed;
        const pulseScale = 0.5 + Math.sin(particle.pulse) * 0.5;
        const currentOpacity = particle.opacity * pulseScale;
        const currentRadius = particle.radius * (0.8 + pulseScale * 0.4);

        // Draw particle glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, currentRadius * 3
        );
        gradient.addColorStop(0, `hsla(270, 100%, 65%, ${currentOpacity})`);
        gradient.addColorStop(0.5, `hsla(270, 100%, 65%, ${currentOpacity * 0.3})`);
        gradient.addColorStop(1, 'hsla(270, 100%, 65%, 0)');
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentRadius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw particle core
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(270, 100%, 75%, ${currentOpacity})`;
        ctx.fill();
      });

      // Draw connecting lines between close particles
      particlesRef.current.forEach((p1, i) => {
        particlesRef.current.forEach((p2, j) => {
          if (i < j) {
            const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
            if (dist < 100) {
              const opacity = (1 - dist / 100) * 0.3;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `hsla(270, 100%, 65%, ${opacity})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <motion.div 
      className="glass-card border-glow-purple p-1 overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <canvas 
        ref={canvasRef} 
        className="w-full h-[300px] md:h-[400px] rounded-xl"
        style={{ background: 'linear-gradient(135deg, hsl(260 40% 6%) 0%, hsl(222 47% 4%) 100%)' }}
      />
    </motion.div>
  );
};

export default DevelopmentAnimation;
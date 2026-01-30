import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
}

const DiscoveryAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const scanAngleRef = useRef(0);
  const animationRef = useRef<number>();

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

    // Initialize nodes
    const nodeCount = 25;
    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: [],
      });
    }
    nodesRef.current = nodes;

    // Find connections
    nodes.forEach((node, i) => {
      nodes.forEach((other, j) => {
        if (i !== j) {
          const dist = Math.hypot(node.x - other.x, node.y - other.y);
          if (dist < 120) {
            node.connections.push(j);
          }
        }
      });
    });

    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      
      ctx.clearRect(0, 0, width, height);

      // Update scan angle
      scanAngleRef.current += 0.02;

      // Draw scan effect
      const centerX = width / 2;
      const centerY = height / 2;
      const scanRadius = Math.max(width, height);

      // Scan line
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(scanAngleRef.current);
      
      const gradient = ctx.createLinearGradient(0, 0, scanRadius, 0);
      gradient.addColorStop(0, 'hsla(190, 100%, 50%, 0.8)');
      gradient.addColorStop(0.3, 'hsla(190, 100%, 50%, 0.3)');
      gradient.addColorStop(1, 'hsla(190, 100%, 50%, 0)');
      
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(scanRadius, 0);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Scan cone
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, scanRadius, -0.15, 0.15);
      ctx.closePath();
      const coneGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, scanRadius);
      coneGradient.addColorStop(0, 'hsla(190, 100%, 50%, 0.15)');
      coneGradient.addColorStop(1, 'hsla(190, 100%, 50%, 0)');
      ctx.fillStyle = coneGradient;
      ctx.fill();
      ctx.restore();

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Check if in scan cone
        const dx = node.x - centerX;
        const dy = node.y - centerY;
        const angle = Math.atan2(dy, dx);
        const scanAngle = scanAngleRef.current % (Math.PI * 2);
        const angleDiff = Math.abs(angle - scanAngle);
        const isScanned = angleDiff < 0.3 || angleDiff > Math.PI * 2 - 0.3;

        // Draw connections
        node.connections.forEach((j) => {
          if (j > i) {
            const other = nodes[j];
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = isScanned 
              ? 'hsla(190, 100%, 50%, 0.6)' 
              : 'hsla(190, 100%, 50%, 0.15)';
            ctx.lineWidth = isScanned ? 1.5 : 0.5;
            ctx.stroke();
          }
        });

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, isScanned ? 5 : 3, 0, Math.PI * 2);
        ctx.fillStyle = isScanned 
          ? 'hsla(190, 100%, 50%, 1)' 
          : 'hsla(190, 100%, 50%, 0.4)';
        ctx.fill();

        // Glow effect when scanned
        if (isScanned) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, 12, 0, Math.PI * 2);
          const glowGradient = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, 12
          );
          glowGradient.addColorStop(0, 'hsla(190, 100%, 50%, 0.4)');
          glowGradient.addColorStop(1, 'hsla(190, 100%, 50%, 0)');
          ctx.fillStyle = glowGradient;
          ctx.fill();
        }
      });

      // Draw center magnifying glass effect
      ctx.beginPath();
      ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
      ctx.strokeStyle = 'hsla(190, 100%, 50%, 0.3)';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(centerX, centerY, 35, 0, Math.PI * 2);
      ctx.strokeStyle = 'hsla(190, 100%, 50%, 0.5)';
      ctx.lineWidth = 1;
      ctx.stroke();

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
      className="glass-card border-glow-cyan p-1 overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <canvas 
        ref={canvasRef} 
        className="w-full h-[300px] md:h-[400px] rounded-xl"
        style={{ background: 'linear-gradient(135deg, hsl(222 47% 6%) 0%, hsl(222 47% 4%) 100%)' }}
      />
    </motion.div>
  );
};

export default DiscoveryAnimation;
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ProcessStepProps {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  media: ReactNode;
  mediaPosition: 'left' | 'right';
}

const ProcessStep = ({
  stepNumber,
  title,
  subtitle,
  description,
  media,
  mediaPosition,
}: ProcessStepProps) => {
  const isLeft = mediaPosition === 'left';

  return (
    <div className="min-h-[80vh] flex items-center py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center ${isLeft ? '' : 'lg:[direction:rtl]'}`}>
          {/* Media Side */}
          <motion.div
            className={isLeft ? '' : 'lg:[direction:ltr]'}
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
          >
            {media}
          </motion.div>

          {/* Content Side */}
          <motion.div
            className={`space-y-6 ${isLeft ? '' : 'lg:[direction:ltr]'}`}
            initial={{ opacity: 0, x: isLeft ? 50 : -50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Step Number */}
            <motion.div
              className="inline-flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="text-5xl md:text-6xl font-bold font-mono text-primary/20">
                0{stepNumber}
              </span>
              <div className="h-px w-12 bg-gradient-to-r from-primary to-transparent" />
            </motion.div>

            {/* Title */}
            <motion.h3
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h3>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl text-primary font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>

            {/* Decorative Line */}
            <motion.div
              className="pt-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              style={{ transformOrigin: 'left' }}
            >
              <div className="h-px w-24 bg-gradient-to-r from-primary via-secondary to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProcessStep;
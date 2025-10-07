"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface AlternatingSectionProps {
  imageSrc: string
  title: string
  description: string
  reverse?: boolean
}

function Section({ imageSrc, title, description, reverse = false }: AlternatingSectionProps) {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`${reverse ? 'lg:order-2' : 'lg:order-1'}`}
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden bg-muted">
              {/* Placeholder - substitua pela sua imagem */}
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`space-y-6 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
            <p className="text-muted-foreground text-lg">{description}</p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export function AlternatingSections() {
  const sections = [
    {
      imageSrc: "/image1.jpg",
      title: "Primeira Seção",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      reverse: false
    },
    {
      imageSrc: "/image2.jpg",
      title: "Segunda Seção", 
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      reverse: true
    },
    {
      imageSrc: "/image3.jpg",
      title: "Terceira Seção",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      reverse: false
    }
  ]

  return (
    <div>
      {sections.map((section, index) => (
        <Section
          key={index}
          imageSrc={section.imageSrc}
          title={section.title}
          description={section.description}
          reverse={section.reverse}
        />
      ))}
    </div>
  )
}
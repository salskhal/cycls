import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

interface HowItWorksCardProps {
  title?: string;
  description?: string;
  img?: string;
  index?: number;
}

export default function HowItWorksCard({
  title,
  description,
  img,
}: HowItWorksCardProps) {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);

  //   const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
  const maskImage = useMotionTemplate`radial-gradient(150px 150px at ${offsetX}px ${offsetY}px, rgba(147, 51, 234, 0.7), rgba(59, 130, 246, 0.5), transparent)`;

  const border = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return;
      const borderRect = border.current?.getBoundingClientRect();
      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  // Floating particles animation
  const particles = Array(5)
    .fill(0)
    .map((_, i) => {
      const size = 4 + Math.random() * 8;
      return {
        id: i,
        size,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: 3 + Math.random() * 7,
        delay: Math.random() * 2,
      };
    });
  return (
    <div
      key={title}
      className="border border-grey/30 px-5 py-10  rounded-xl sm:flex-1 text-center relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 border-4 border-amber-400 rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
        ref={border}
      ></motion.div>

      {/* Web3 Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 opacity-40"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -40, -20, -60, 0],
            x: [0, 10, -10, 15, 0],
            scale: [1, 1.2, 0.8, 1.1, 1],
            opacity: [0.4, 0.6, 0.4, 0.7, 0.4],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}

      <h3 className="text-xl md:text-2xl font-medium">{title}</h3>
      <img src={img} alt={title} className="w-full my-4 object-contain" />
      <p className="text-black/70 text-base md:text-lg ">{description}</p>
    </div>
  );
}

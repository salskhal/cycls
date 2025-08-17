import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import Badge from "./ui/Badge";
import { Button } from "./ui/button";
import GridBg from "@/assets/grid.png";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculateMovement = (axis: "x" | "y", strength = 0.02) => {
    if (!isMounted) return 0;
    const center =
      axis === "x" ? window.innerWidth / 2 : window.innerHeight / 2;
    const position = axis === "x" ? mousePosition.x : mousePosition.y;
    return (position - center) * strength;
  };
  return (
    <section
      className="relative py-24 pt-48 overflow-hidden flex items-center justify-center"
      id="home"
    >
      {/* Enhanced Grid Background with Multiple Layers */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          x: calculateMovement("x", 0.02),
          y: y1,
        }}
      >
        <img
          src={GridBg}
          alt="Background Grid"
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Secondary grid layer for depth */}
      <motion.div
        className="absolute inset-0 opacity-20 scale-110"
        style={{
          x: calculateMovement("x", -0.01),
          y: y2,
        }}
      >
        <img
          src={GridBg}
          alt="Background Grid"
          className="object-cover w-full h-full"
        />
      </motion.div>
      <div className="max-w-7xl mx-auto px-3 relative z-10  text-center">
        <motion.div
          className="flex justify-center"
          initial="initial"
          animate="animate"
          custom={0}
        >
          <Badge text="🚀 Welcome to Cycls" />
        </motion.div>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-medium text-center mt-6 max-w-4xl mx-auto"
          initial="initial"
          animate="animate"
          custom={1}
        >
          Go from AI Agent to AI Business. Instantly.
        </motion.h1>
        <motion.p
          className="text-center text-lg md:text-xl text-black/70 mt-8 max-w-2xl mx-auto"
          initial="initial"
          animate="animate"
          custom={2}
        >
          Cycls is the definitive platform for commercial AI agents. Our
          open-source framework and managed cloud transform your{" "}
          <span className="font-semibold text-black">Python code</span> into a
          scalable, monetizable business with a{" "}
          <span className="font-semibold text-black">single decorator</span>.
        </motion.p>
        <motion.div
          className="mt-8 flex justify-center"
          initial="initial"
          animate="animate"
          custom={3}
        >
          <Button
            variant="outline"
            size="lg"
            className="group border-2 border-black/20 hover:border-black/40 px-8 py-4 text-lg font-semibold bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300"
          >
            Get Started
          </Button>
        </motion.div>
        <motion.div className="mt-16 max-w-md mx-auto">
          <div className="bg-black/5 backdrop-blur-sm rounded-2xl p-6 border border-black/10">
            <div className="text-sm text-black/60 mb-2">It's this simple:</div>
            <div className="font-mono text-sm bg-black text-green-400 rounded-lg p-3">
              <span className="text-blue-400">@cycls.agent</span>
              <br />
              <span className="text-white">def</span>{" "}
              <span className="text-yellow-400">my_agent</span>():
              <br />
              <span className="ml-4 text-gray-300"># Your AI logic here</span>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-black/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-black/40 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}

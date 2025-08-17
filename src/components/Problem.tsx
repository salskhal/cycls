import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Badge from "./ui/Badge";

const text = `The gap between a brilliant AI agent and a viable business is immense. You’ve built a powerful AI agent but turning it into a commercial product is a maze of infrastructure, frontend boilerplate, authentication, and payment integrations.`;

const words = text.split(" ");

export default function ProblemSection() {
  const scrollTarget = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });

  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    const unsubscribe = wordIndex.on("change", (latest) => {
      setCurrentWord(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [wordIndex]);

  return (
    <section className="py-24" id="the-problem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sticky top-38">
          <motion.div
            className="flex justify-center"
            initial="initial"
            animate="animate"
            custom={0}
          >
            <Badge text="The Problem" />
          </motion.div>
          <motion.div
            className="text-4xl md:text-5xl text-center font-medium mt-10 text-white"
            initial="initial"
            animate="animate"
            custom={0}
          >
            <span>
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={twMerge(
                    "transition duration-500 text-black/15",
                    wordIndex < currentWord && "text-black"
                  )}
                >{`${word} `}</span>
              ))}
            </span>
            <span className="text-amber-300 block mt-4">
              Cycls closes that gap instantly.
            </span>
          </motion.div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
}

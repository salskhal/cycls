import { motion } from "framer-motion";
import Badge from "./ui/Badge";

import logic from "@/assets/logic.png";
import deploy from "@/assets/deploy.png";
import HowItWorksCard from "./HowItWorksCard";

import monitize from "@/assets/monitize.png";

const HowItWorks = [
  {
    title: " Write Your Agent",
    description:
      "Focus on what you do best. Write your agent's logic in a simple Python function. Our guided meta-agent can even help you get started, turning ideas into code even faster.",
    img: logic,
  },
  {
    title: "Deploy Instantly",
    description:
      "Add our @cycls.agent decorator to your function. That’s it. Cycls automatically packages your agent into a full-stack, serverless application with a pre-built frontend and API.",
    img: deploy,
  },
  {
    title: "Monetize Immediately",
    description:
      "Launch your subscription business in minutes. Our managed platform comes with a built-in user pool and monetization, allowing you to charge for your agent with a simple take-rate model.",
    img: monitize,
  },
];

export default function How() {
  return (
    <section className="py-24" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex justify-center"
          initial="initial"
          animate="animate"
          custom={0}
        >
          <Badge text="How it Works" />
        </motion.div>
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-black text-center mt-6"
          initial="initial"
          animate="animate"
          custom={1}
        >
          From Code to Customer in Three Steps
        </motion.h2>
        <motion.div
          className="mt-16 flex flex-col items-center sm:flex-row gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {HowItWorks.map(({ title, description, img }, index) => (
            <motion.div
              key={title}
              //   variants={scaleUp}
              custom={index}
              className="sm:flex-1"
            >
              <HowItWorksCard
                title={title}
                description={description}
                img={img}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

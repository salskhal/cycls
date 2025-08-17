import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Badge from "./ui/Badge";

export default function ForDevAndBusiness() {
  return (
    <>
      {/* For Developers Section */}
      <section className="py-24" id="for-dev">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
              <motion.div
                className="inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Badge text="🚀 For Developers" />
              </motion.div>

              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-medium text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                A Zero-Config Dream for Builders
              </motion.h2>

              <motion.p
                className="text-lg text-black/70 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Cycls is built by developers, for developers. Our open-source
                core gives you ultimate flexibility, while our zero-config
                philosophy removes all the boilerplate. The Python SDK is all
                you need to learn.
              </motion.p>

              <motion.ul
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {[
                  "Open-source core with ultimate flexibility",
                  "Zero-config philosophy - no boilerplate",
                  "Simple Python SDK - that's all you need",
                  "Perfect dev/prod parity",
                  "Serverless infrastructure that scales globally",
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-black/80">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <Button className="transform transition-transform hover:scale-105">
                  Read the Docs
                </Button>
              </motion.div>
          </motion.div>
        </div>
      </section>

      {/* For Business & Enterprise Section */}
      <section className="py-24 bg-gray-50" id="for-business">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
              <motion.div
                className="inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Badge text="🏢 For Business & Enterprise" />
              </motion.div>

              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-medium text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                A Complete Commercial Engine
              </motion.h2>

              <motion.p
                className="text-lg text-black/70 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Cycls is more than a tool; it's an economic engine. For
                startups, we provide a complete business-in-a-box. For
                enterprises, our sovereign managed cloud offers a flexible,
                enterprise-ready platform.
              </motion.p>

              <motion.ul
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {[
                  "Complete business-in-a-box for startups",
                  "Sovereign managed cloud hosted in Dammam",
                  "Enterprise-ready platform and security",
                  "Built-in user management and payments",
                  "Foundational AI capabilities for the Kingdom",
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-black/80">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <Button
                  variant="outline"
                  className="transform transition-transform hover:scale-105"
                >
                  Contact Sales
                </Button>
              </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

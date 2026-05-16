"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Non-surgical spinal decompression",
  "Precision targeting for disc issues",
  "Painless and highly effective",
  "Reduced recovery time vs traditional methods",
  "FDA-cleared advanced technology",
  "Customizable treatment profiles",
];

export default function RoboticTherapy() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-white/5">
              <Image
                src="/robotic-therapy.png"
                alt="Robotic Decompression Therapy"
                width={700}
                height={500}
                className="object-cover transition-transform duration-1000 hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl max-w-[200px]">
              <p className="text-3xl font-bold text-secondary">95%</p>
              <p className="text-sm font-medium">Patient Satisfaction</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">Advanced Technology</h2>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Future of Spine Care: <br />
              <span className="gradient-text">Robotic Decompression</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Orthocare is proud to lead in Kanchipuram with state-of-the-art robotic 
              decompression therapy. This precision-based system allows us to treat 
              herniated discs and chronic back pain without surgery.
            </p>
            
            <ul className="grid sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-foreground/80 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold shadow-lg transition-all"
            >
              See How It Works
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

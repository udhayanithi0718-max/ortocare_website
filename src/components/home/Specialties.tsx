"use client";

import { motion } from "framer-motion";
import { 
  Activity, 
  Settings as Robotic, 
  Stethoscope, 
  Zap, 
  HeartPulse, 
  Trophy 
} from "lucide-react";

const specialties = [
  {
    title: "Robotic Decompression",
    description: "Advanced spinal therapy using state-of-the-art robotic technology for non-surgical relief.",
    icon: Robotic,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Sports Injury Rehab",
    description: "Personalized recovery programs for athletes to return to their peak performance safely.",
    icon: Trophy,
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    title: "Orthopedic Physiotherapy",
    description: "Expert care for bone, joint, and ligament conditions including fractures and dislocations.",
    icon: Activity,
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    title: "Neurological Rehab",
    description: "Specialized therapy for stroke recovery, Parkinson's, and other neurological conditions.",
    icon: Stethoscope,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Post-Surgical Recovery",
    description: "Carefully monitored rehabilitation following orthopedic or cardiac surgeries.",
    icon: HeartPulse,
    color: "bg-rose-500/10 text-rose-500",
  },
  {
    title: "Pain Management",
    description: "Holistic approaches to chronic pain relief using manual therapy and advanced modalities.",
    icon: Zap,
    color: "bg-amber-500/10 text-amber-500",
  },
];

export default function Specialties() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Specialized Care for <span className="text-secondary">Every Need</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            We combine clinical expertise with advanced technology to provide 
            comprehensive physiotherapy services tailored to your recovery journey.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-card p-8 rounded-3xl border border-border hover:shadow-xl transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${specialty.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <specialty.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{specialty.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {specialty.description}
              </p>
              <button className="mt-6 text-sm font-semibold text-secondary hover:underline inline-flex items-center gap-1">
                Learn More <span className="text-xs">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden hero-gradient">
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
            #1 Physiotherapy Hospital in Kanchipuram
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6">
            Restore Your Mobility. <br />
            <span className="gradient-text">Reclaim Your Life.</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-lg">
            Experience world-class physiotherapy with advanced robotic decompression technology. 
            Our expert team is dedicated to your recovery and long-term wellness.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-8 py-4 rounded-full glass font-semibold hover:bg-white/40 transition-all"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 text-secondary" />
            </motion.button>
          </div>
          
          <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">10k+</span>
              <span>Patients Treated</span>
            </div>
            <div className="h-10 w-[1px] bg-border" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">15+</span>
              <span>Expert Specialists</span>
            </div>
            <div className="h-10 w-[1px] bg-border" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">98%</span>
              <span>Success Rate</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative lg:block hidden"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white/50 dark:border-white/5">
            <Image
              src="/hero-physio.png"
              alt="Orthocare Physiotherapy Clinic"
              width={800}
              height={600}
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          
          {/* Floating Card */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -left-8 glass p-6 rounded-2xl shadow-xl max-w-[240px]"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-bold">★</span>
              </div>
              <div className="text-xs">
                <p className="font-bold">Highly Rated</p>
                <p className="text-muted-foreground">Trusted by locals</p>
              </div>
            </div>
            <p className="text-sm italic text-muted-foreground">
              "The robotic therapy changed my life. I'm pain-free!"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

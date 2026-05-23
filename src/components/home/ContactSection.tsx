"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  const mapEmbedUrl =
    "https://maps.google.com/maps?q=No3%2F1%20Astapujam%2C%20East%20mada%20street%2C%20Chinna%20Kanchipuram%2C%20Kanchipuram%2C%20Arappanacheri%2C%20Tamil%20Nadu%20631501%2C%20India&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Visit Our <span className="text-secondary">Hospital</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conveniently located in Kanchipuram to serve all your physiotherapy needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-secondary w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold">Our Location</p>
                    <p className="text-muted-foreground leading-relaxed">
                      No3/1 Astapujam, East mada street,<br />
                      Chinna Kanchipuram, Kanchipuram,<br />
                      Arappanacheri, Tamil Nadu 631501, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="text-accent w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold">Phone Number</p>
                    <p className="text-muted-foreground">+91 63797 90075</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Clock className="text-blue-500 w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold">Working Hours</p>
                    <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Emergency Only</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary p-8 rounded-3xl text-primary-foreground">
              <h3 className="text-xl font-bold mb-4">Emergency Assistance?</h3>
              <p className="mb-6 opacity-80">Our specialized team is available for urgent physiotherapy needs.</p>
              <a href="tel:+916379790075" className="inline-flex items-center gap-2 font-bold text-lg hover:underline">
                <Phone className="w-5 h-5" /> Call: +91 63797 90075
              </a>
            </div>
          </motion.div>

          {/* Google Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-white/5"
          >
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Coffee,
  MapPin,
  Calendar,
  ArrowUp,
  ExternalLink,
  Sparkles,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { socialLinks } from "@/data/footer/social-links";
import { quickLinks } from "@/data/footer/quick-links";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background border-t border-border/50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center text-white text-lg font-bold shadow-md"
                >
                  A
                </motion.div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Aditya Saputra
                </h3>
              </div>

              <motion.p
                className="text-muted-foreground text-sm mb-6 max-w-md leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Full-stack developer who is passionate about creating innovative
                digital experiences. Currently learning new technologies while
                building sophisticated web applications.
              </motion.p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <motion.div
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border/20 hover:bg-muted transition-colors"
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Sidoarjo, Indonesia</span>
                </motion.div>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border/20 hover:bg-muted transition-colors"
                >
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>Available for opportunities</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm group inline-flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Connect Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
                <Code className="w-4 h-4 text-primary" />
                Connect
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={
                      social.href.startsWith("mailto:") ? "_self" : "_blank"
                    }
                    rel={
                      social.href.startsWith("mailto:")
                        ? ""
                        : "noopener noreferrer"
                    }
                    className={`flex items-center gap-3 text-muted-foreground transition-all duration-300 text-sm group ${social.hoverColor}`}
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={cn(
                        "p-2 rounded-lg bg-muted/50 group-hover:bg-muted transition-colors",
                        social.color
                      )}
                    >
                      {social.icon}
                    </motion.div>
                    <div>
                      <div className="font-medium">{social.name}</div>
                      <div className="text-xs text-muted-foreground/70">
                        {social.description}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border/50 py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span>&copy; {currentYear} Aditya Saputra</span>
              <span className="hidden md:block">•</span>
              <span className="flex items-center gap-2">
                Made with
                <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                and
                <Coffee className="w-4 h-4 text-amber-600" />
                in Sidoarjo
              </span>
            </div>

            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 text-green-600 text-sm border border-green-500/20"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Open to opportunities</span>
              </motion.div>

              {/* Scroll to Top Button */}
              {showScrollTop && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    onClick={scrollToTop}
                    size="sm"
                    variant="outline"
                    className="rounded-full w-10 h-10 p-0 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

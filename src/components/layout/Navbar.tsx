"use client";

import * as React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Menu,
  ChevronDown,
  X,
  Calendar,
  MapPin,
  ArrowUpRight,
  Sparkles, // ✅ Add this import
} from "lucide-react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { motion, AnimatePresence } from "framer-motion";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/dateFormated";
import { cn } from "@/lib/utils";
import { navigationItems } from "@/data/navbar/navigation-items";
import ThemeToggle from "../ui/ThemeToggle";
import Image from "next/image";
import FeatureAnnouncement from "../FeatureAnnouncement";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {}
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (title: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
    setOpenDropdowns({});
  };

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-background/95 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-xl font-bold text-foreground hover:text-primary transition-colors group"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center text-white text-sm font-bold"
            >
              A
            </motion.div>
            <span className="group-hover:text-primary transition-colors">
              Adityasputra
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center space-x-1">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                        {item.icon}
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px]"
                        >
                          {item.title === "Home" && (
                            <div className="grid lg:grid-cols-[.75fr_1fr] gap-4">
                              <div className="relative rounded-xl overflow-hidden min-h-[220px]">
                                <Image
                                  src="/images/bg-home.webp"
                                  alt="Background Home"
                                  fill
                                  sizes="(max-width: 1024px) 100vw, 50vw"
                                  priority
                                  className="object-cover object-center"
                                />

                                {/* Overlay content */}
                                <div className="relative z-10 flex h-full rounded-xl flex-col justify-center space-y-4 p-6 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm">
                                  <div className="text-xl font-semibold text-white">
                                    Welcome
                                  </div>
                                  <p className="text-sm leading-relaxed text-white">
                                    Explore my digital portfolio and creative
                                    journey through code, design, and
                                    innovation.
                                  </p>
                                  <div className="flex items-center gap-2 text-xs text-white">
                                    <MapPin className="w-3 h-3" />
                                    <span>Sidoarjo, Indonesia</span>
                                  </div>
                                </div>
                              </div>

                              {/* RIGHT: Menu list */}
                              <div className="grid gap-2">
                                {item.submenu.map((subItem) => (
                                  <ListItem
                                    key={subItem.title}
                                    href={subItem.href}
                                    title={subItem.title}
                                    icon={subItem.icon}
                                  >
                                    {subItem.description}
                                  </ListItem>
                                ))}
                              </div>
                            </div>
                          )}

                          {item.title === "Portfolio" && (
                            <div className="grid md:grid-cols-2 gap-3">
                              {item.submenu.map((subItem) => (
                                <ListItem
                                  key={subItem.title}
                                  href={subItem.href}
                                  title={subItem.title}
                                  icon={subItem.icon}
                                  badge={subItem.badge}
                                >
                                  {subItem.description}
                                </ListItem>
                              ))}
                            </div>
                          )}
                          {(item.title === "Mindscape" ||
                            item.title === "Gallery") && (
                            <div className="grid gap-2">
                              {item.submenu.map((subItem) => (
                                <ListItem
                                  key={subItem.title}
                                  href={subItem.href}
                                  title={subItem.title}
                                  icon={subItem.icon}
                                >
                                  {subItem.description}
                                </ListItem>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </motion.div>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* ✅ Updated Right Side */}
          <div className="flex items-center space-x-3">
            {/* Date */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 text-xs border border-border/50">
              <Calendar className="w-3 h-3 text-primary" />
              <span className="text-muted-foreground">
                {formatDate(new Date())}
              </span>
            </div>

            {/* ✅ Feature Announcement - Desktop Only */}
            <div className="hidden lg:block relative">
              <FeatureAnnouncement />
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <AnimatePresence mode="wait">
                    {mobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="h-5 w-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="h-5 w-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[320px] sm:w-[400px] overflow-y-auto"
              >
                <div className="flex flex-col space-y-6 mt-6">
                  {/* ✅ Updated Mobile Header */}
                  <div className="flex items-center justify-between">
                    <Link
                      href="/"
                      className="flex items-center space-x-2 text-lg font-bold"
                      onClick={handleMobileMenuClose}
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-primary to-primary/60 rounded-md flex items-center justify-center text-white text-xs font-bold">
                        A
                      </div>
                      <span>Adityasputra</span>
                    </Link>

                    {/* ✅ Feature Announcement - Mobile */}
                    <FeatureAnnouncement />
                  </div>

                  {/* Mobile Date */}
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{formatDate(new Date())}</span>
                  </div>

                  {/* ✅ Mobile Feature Banner */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-xl border border-primary/20"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">
                        New: AI Playground
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        Live
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                      Try our new AI-powered tools for text, code, and creative
                      writing.
                    </p>
                    <Button size="sm" className="w-full text-xs" asChild>
                      <Link
                        href="/ai-playground"
                        onClick={handleMobileMenuClose}
                      >
                        <ArrowUpRight className="w-3 h-3 mr-1" />
                        Explore Now
                      </Link>
                    </Button>
                  </motion.div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-2">
                    {navigationItems.map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <MobileDropdownItem
                          item={item}
                          isOpen={openDropdowns[item.title] || false}
                          onToggle={() => toggleDropdown(item.title)}
                          onLinkClick={handleMobileMenuClose}
                        />
                      </motion.div>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

// Mobile Dropdown Component
function MobileDropdownItem({
  item,
  isOpen,
  onToggle,
  onLinkClick,
}: {
  item: {
    title: string;
    icon: React.ReactNode;
    submenu: {
      title: string;
      href: string;
      description: string;
      icon?: React.ReactNode;
      badge?: string;
    }[];
  };
  isOpen: boolean;
  onToggle: () => void;
  onLinkClick: () => void;
}) {
  return (
    <Collapsible.Root open={isOpen} onOpenChange={onToggle}>
      <div className="border border-border/50 rounded-xl overflow-hidden bg-muted/30">
        <Collapsible.Trigger asChild>
          <Button
            variant="ghost"
            className="w-full justify-between h-auto p-4 font-medium text-left hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                {item.icon}
              </div>
              <span className="text-base">{item.title}</span>
            </div>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </Button>
        </Collapsible.Trigger>

        <Collapsible.Content className="overflow-hidden">
          <div className="border-t border-border/50 bg-muted/20">
            {item.submenu.map((subItem, index) => (
              <motion.div
                key={subItem.title}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={subItem.href}
                  className="flex items-start gap-3 p-4 hover:bg-muted/50 transition-colors border-b border-border/30 last:border-b-0 group"
                  onClick={onLinkClick}
                >
                  {subItem.icon && (
                    <div className="p-1 rounded bg-primary/5 text-primary/70 group-hover:text-primary transition-colors">
                      {subItem.icon}
                    </div>
                  )}
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                        {subItem.title}
                      </div>
                      {subItem.badge && (
                        <Badge variant="secondary" className="text-xs">
                          {subItem.badge}
                        </Badge>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground leading-relaxed">
                      {subItem.description}
                    </div>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>
        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  );
}

// List Item Component
function ListItem({
  title,
  children,
  href,
  icon,
  badge,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & {
  href: string;
  icon?: React.ReactNode;
  badge?: string;
}) {
  return (
    <div {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="group block select-none space-y-2 rounded-xl p-4 leading-none no-underline outline-none transition-all hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground border border-transparent hover:border-border/50"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {icon && (
                <div className="p-1.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  {icon}
                </div>
              )}
              <div className="text-sm font-medium leading-none group-hover:text-primary transition-colors">
                {title}
              </div>
            </div>
            {badge && (
              <Badge variant="secondary" className="text-xs">
                {badge}
              </Badge>
            )}
          </div>
          <p className="text-sm leading-snug text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </div>
  );
}

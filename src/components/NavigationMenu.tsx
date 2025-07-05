"use client";

import * as React from "react";
import Link from "next/link";
import { useState } from "react";
import { Menu, ChevronDown, ChevronRight } from "lucide-react";
import * as Collapsible from "@radix-ui/react-collapsible";

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
import ThemeToggle from "./ui/ThemeToggle";
import { formatDate } from "@/lib/dateFormated";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Web Projects",
    href: "/docs/primitives/alert-dialog",
    description: "My website, landing page, and platform.",
  },
  {
    title: "AI / ML Projects",
    href: "/docs/primitives/hover-card",
    description: "Artificial Intelligence and Machine Learning Project.",
  },
  {
    title: "Bootcamp Projects",
    href: "/docs/primitives/progress",
    description: "Project deliverables from the bootcamp/training program.",
  },
  {
    title: "Experimental Projects",
    href: "/docs/primitives/scroll-area",
    description: "Experimental, concept or prototype projects.",
  },
];

const navigationItems = [
  {
    title: "Home",
    submenu: [
      {
        title: "Biography",
        href: "/docs",
        description: "Learn more about me and my journey",
      },
      {
        title: "Skills and Tools",
        href: "/docs/installation",
        description: "Technologies and tools I work with",
      },
      {
        title: "Timeline",
        href: "/docs/primitives/typography",
        description: "My professional timeline and milestones",
      },
    ],
  },
  {
    title: "Portfolio",
    submenu: components,
  },
  {
    title: "Blog",
    submenu: [
      {
        title: "Notes",
        href: "#",
        description: "Self-study notes across topics.",
      },
      {
        title: "Programming",
        href: "#",
        description: "Tips, guides and ideas around development.",
      },
      {
        title: "Philosophy and Logic",
        href: "#",
        description: "Philosophy, logic, and cognitive exploration.",
      },
      {
        title: "Self-Development",
        href: "#",
        description: "Periodic self-reflection and development.",
      },
    ],
  },
  {
    title: "Gallery",
    submenu: [
      {
        title: "Digital Art",
        href: "#",
        description: "My original digital art work.",
      },
      {
        title: "Playroom",
        href: "#",
        description: "Idols and favorite music collections.",
      },
      {
        title: "Design",
        href: "#",
        description: "Posters, layouts, and other graphic designs.",
      },
    ],
  },
  {
    title: "Playground",
    submenu: [
      {
        title: "AI Playground",
        href: "#",
        description: "Chatbots, AI image genes, and other AI experiments.",
      },
      {
        title: "Experimental Coding",
        href: "#",
        description: "Algorithms, logic, and free experimentation.",
      },
      {
        title: "Tools by Me",
        href: "#",
        description: "Simple tools and apps that you build.",
      },
    ],
  },
];

export function NavigationsMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {}
  );

  const toggleDropdown = (title: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const closeAllDropdowns = () => {
    setOpenDropdowns({});
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
    closeAllDropdowns();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-lg sm:text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              Adityasputra
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center space-x-1">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className="text-sm font-medium">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px]">
                        {item.title === "Home" && (
                          <div className="grid lg:grid-cols-[.75fr_1fr] gap-3">
                            <div className="flex h-full flex-col justify-center space-y-2 rounded-md bg-gradient-to-b from-muted/50 to-muted p-6">
                              <div className="text-lg font-medium">Welcome</div>
                              <p className="text-sm text-muted-foreground leading-tight">
                                Explore my digital portfolio and creative
                                journey.
                              </p>
                            </div>
                            <div className="grid gap-2">
                              {item.submenu.map((subItem) => (
                                <ListItem
                                  key={subItem.title}
                                  href={subItem.href}
                                  title={subItem.title}
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
                              >
                                {subItem.description}
                              </ListItem>
                            ))}
                          </div>
                        )}
                        {(item.title === "Blog" ||
                          item.title === "Gallery" ||
                          item.title === "Playground") && (
                          <div className="grid gap-3">
                            {item.submenu.map((subItem) => (
                              <ListItem
                                key={subItem.title}
                                href={subItem.href}
                                title={subItem.title}
                              >
                                {subItem.description}
                              </ListItem>
                            ))}
                          </div>
                        )}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side - Date, Theme Toggle, Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Date - Hidden on very small screens */}
            <div className="hidden sm:flex items-center">
              <span className="text-xs sm:text-sm px-2 py-1 bg-muted rounded-full text-muted-foreground">
                {formatDate(new Date())}
              </span>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] overflow-y-auto"
              >
                <div className="flex flex-col space-y-4 mt-6">
                  <div className="flex items-center justify-between">
                    <Link
                      href="/"
                      className="text-lg font-bold"
                      onClick={handleMobileMenuClose}
                    >
                      Adityasputra
                    </Link>
                  </div>

                  {/* Mobile Date */}
                  <div className="sm:hidden">
                    <span className="text-sm px-3 py-2 bg-muted rounded-full text-muted-foreground">
                      {formatDate(new Date())}
                    </span>
                  </div>

                  {/* Mobile Navigation with Dropdowns */}
                  <nav className="flex flex-col space-y-2">
                    {navigationItems.map((item) => (
                      <MobileDropdownItem
                        key={item.title}
                        item={item}
                        isOpen={openDropdowns[item.title] || false}
                        onToggle={() => toggleDropdown(item.title)}
                        onLinkClick={handleMobileMenuClose}
                      />
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
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
    submenu: { title: string; href: string; description: string }[];
  };
  isOpen: boolean;
  onToggle: () => void;
  onLinkClick: () => void;
}) {
  return (
    <Collapsible.Root open={isOpen} onOpenChange={onToggle}>
      <div className="border border-border rounded-lg overflow-hidden">
        {/* Dropdown Header */}
        <Collapsible.Trigger asChild>
          <Button
            variant="ghost"
            className="w-full justify-between h-auto p-4 font-medium text-left hover:bg-muted/50"
          >
            <span className="text-base">{item.title}</span>
            {isOpen ? (
              <ChevronDown className="h-4 w-4 transition-transform" />
            ) : (
              <ChevronRight className="h-4 w-4 transition-transform" />
            )}
          </Button>
        </Collapsible.Trigger>

        {/* Dropdown Content */}
        <Collapsible.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
          <div className="border-t border-border bg-muted/20">
            {item.submenu.map((subItem, index) => (
              <Link
                key={subItem.title}
                href={subItem.href}
                className="block p-4 hover:bg-muted/50 transition-colors border-b border-border/50 last:border-b-0"
                onClick={onLinkClick}
              >
                <div className="space-y-1">
                  <div className="font-medium text-sm text-foreground">
                    {subItem.title}
                  </div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    {subItem.description}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  );
}

// ListItem component tetap sama
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & { href: string }) {
  return (
    <div {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </div>
  );
}

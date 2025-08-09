import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface PortfolioSection {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  status: "active" | "coming-soon" | "beta";
  count: number;
}

interface PortfolioCardProps {
  portfolioSections: PortfolioSection[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
    },
  }),
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return {
        icon: <CheckCircle className="w-3 h-3" />,
        label: "Available",
        className: "bg-green-500/10 text-green-500 border-green-500/20",
      };
    case "coming-soon":
      return {
        icon: <Clock className="w-3 h-3" />,
        label: "Coming Soon",
        className: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      };
    case "beta":
      return {
        icon: <AlertCircle className="w-3 h-3" />,
        label: "Beta",
        className: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
      };
    default:
      return {
        icon: <CheckCircle className="w-3 h-3" />,
        label: "Available",
        className: "bg-green-500/10 text-green-500 border-green-500/20",
      };
  }
};

export function PortfolioCard({ portfolioSections }: PortfolioCardProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 items-stretch">
      {portfolioSections.map((section, index) => {
        const { title, description, icon: Icon, href, count, status } = section;
        const statusBadge = getStatusBadge(status);

        return (
          <motion.div
            key={title}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="group rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <Link href={href}>
              <div className="space-y-4 cursor-pointer">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-3 rounded-lg"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <Badge
                    variant="outline"
                    className={`text-xs ${statusBadge.className}`}
                  >
                    {statusBadge.icon}
                    <span className="ml-1">{statusBadge.label}</span>
                  </Badge>
                </div>

                {/* Title */}
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    {count} {count === 1 ? "Project" : "Projects"}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <span className="text-xs text-muted-foreground">
                    {status === "active" ? "View Projects" : "Coming Soon"}
                  </span>
                  <ArrowRight className="w-4 h-4 opacity-50 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </section>
  );
}

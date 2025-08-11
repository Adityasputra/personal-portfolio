"use client";

import { useState } from "react";
import { Bell, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

export default function FeatureAnnouncement() {
  const [open, setOpen] = useState(false);

  const features = [
    {
      title: "Web Project Showcase",
      desc: "showcasing the website projects I have created.",
      icon: Clock,
      status: "Coming Soon",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          aria-label="Feature announcements"
        >
          <Bell className="w-5 h-5" />
          {/* Notifikasi badge */}
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500" />
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            🚀 New & Upcoming Features
          </DialogTitle>
          <DialogDescription>
            Stay up to date with the latest updates and planned improvements.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 border rounded-lg"
              >
                <Icon className="w-5 h-5 mt-1 text-primary" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{feature.title}</h4>
                    <Badge
                      variant={
                        feature.status === "New" ? "default" : "secondary"
                      }
                    >
                      {feature.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}

"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Beranda", href: "/" },
    { label: "Tentang Saya", href: "/about" },
    { label: "Projek", href: "/projects" },
    { label: "Pendidikan", href: "/education" },
    { label: "resume", href: "/resume" },
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Consultation",
    "Technical Writing",
  ];

  return (
    <footer className="bg-muted/30 border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Fajar</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Mahasiswa Teknik Informatika semester 5 yang passionate dalam
                pengembangan web fullstack dan selalu siap untuk tantangan baru.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-xs">
                Universitas Dr. Soetomo
              </Badge>
              <Badge variant="outline" className="text-xs">
                Semester 5
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm hover:translate-x-1 duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Layanan</h4>
            <div className="space-y-2">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors cursor-default"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Connect</h4>
            <div className="flex gap-2 mb-4">
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-accent transition-all duration-300"
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-accent transition-all duration-300"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-accent transition-all duration-300"
              >
                <Mail className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Selalu terbuka untuk diskusi teknologi, kolaborasi projek, dan
              kesempatan belajar bersama.
            </p>

            <div className="mt-4">
              <Badge variant="secondary" className="text-primary flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                Available for freelance
              </Badge>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm flex items-center gap-1 text-center md:text-left">
              © {currentYear} Muhammad Fajar Sholehuddin Maulana Putra. Made with{" "}
              <Heart className="h-3 w-3 text-red-500" /> for learning & growth
            </p>

            <div className="flex items-center gap-4">
              <p className="text-muted-foreground text-xs text-center md:text-left">
                Built with <span className="text-primary font-medium">Next.js</span>,{" "}
                <span className="text-primary font-medium">Tailwind CSS</span> &{" "}
                <span className="text-primary font-medium">ShadCN UI</span>
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="gap-1 hover:bg-accent transition-all duration-300"
              >
                <ArrowUp className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

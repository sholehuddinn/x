"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Home,
  User,
  Code,
  Mail,
  GraduationCap,
  Sun,
  Moon,
  FileText,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Beranda", href: "/", icon: Home },
    { label: "Tentang", href: "/about", icon: User },
    { label: "Projek", href: "/projects", icon: Code },
    { label: "Pendidikan", href: "/education", icon: GraduationCap },
    { label: "Resume", href: "/resume", icon: FileText },
  ];

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const isActive = (href) => pathname === href;

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0">
            {/* <h1 className="text-primary font-bold text-xl gradient-text-primary">
              Portfolio
            </h1> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 gap-2 ${
                    isActive(item.href)
                      ? "bg-gradient-to-r bg-black text-white shadow-md"
                      : "text-muted-foreground hover:text-primary hover:bg-gradient-to-r hover:from-accent/50 hover:to-purple-100/50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="ml-2 hover:bg-gradient-to-r hover:from-accent "
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="hover:bg-gradient-to-r hover:from-accent "
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-gradient-to-r hover:from-accent "
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-md border-b shadow-lg">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full transition-all duration-200 ${
                    isActive(item.href)
                      ? "bg-gradient-to-r text-white shadow-md"
                      : "text-muted-foreground hover:text-primary hover:bg-gradient-to-r hover:from-accent/50 hover:to-purple-100/50"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

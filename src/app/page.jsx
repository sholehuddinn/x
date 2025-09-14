"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Code,
  Zap,
  Users,
  Trophy,
  ArrowRight,
  User,
} from "lucide-react";

export default function Home() {
  const stats = [
    { icon: Code, label: "Projek Selesai", value: "15+" },
    { icon: Zap, label: "Teknologi Dikuasai", value: "10+" },
    { icon: Users, label: "Tim Projek", value: "5+" },
    { icon: Trophy, label: "Prestasi", value: "3+" },
  ];

  const highlights = [
    {
      title: "Fullstack Developer",
      description:
        "Berpengalaman dalam mengembangkan aplikasi web end-to-end menggunakan teknologi modern",
    },
    {
      title: "Fast Learner",
      description:
        "Selalu antusias mempelajari teknologi baru dan mengikuti perkembangan industri",
    },
    {
      title: "Team Player",
      description:
        "Mampu bekerja dalam tim dan berkomunikasi efektif dalam pengembangan projek",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="mb-6 text-4xl lg:text-6xl font-bold">
                Halo, Saya{" "}
                <span className="text-highlight">
                  Muhammad Fajar Sholehuddin Maulana Putra
                </span>
              </h1>
              <p className="mb-8 text-muted-foreground text-lg leading-relaxed">
                Mahasiswa Teknik Informatika semester 5 di Universitas Dr.
                Soetomo yang passionate dalam pengembangan web fullstack.
                Berpengalaman dalam membangun aplikasi web modern dengan
                teknologi terkini.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link href="https://api.whatsapp.com/send/?phone=6285731101269&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2 shadow-lg">
                    <Mail className="h-4 w-4" />
                    Hubungi Saya
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
                <Link href="/resume">
                  <Button variant="outline" size="lg" className="gap-2">
                    <FileText className="h-4 w-4" />
                    Lihat Resume
                  </Button>
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Github className="h-4 w-4" />
                  <Link href="https://github.com/sholehuddinn" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Linkedin className="h-4 w-4" />
                  <Link href="https://www.linkedin.com/in/muhammad-fajar-sholehuddin-maulana-putra-b901572a1/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>

            {/* Image pakai next/image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden border shadow-xl">
                  <Image
                    src="/img/aku_bg_blue.jpg"
                    alt="Developer workspace"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover-lift hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Trophy className="h-3 w-3 mr-1" />
              Keunggulan
            </Badge>
            <h2 className="text-3xl lg:text-4xl  mb-4">
              Mengapa <span className="text-highlight">Memilih Saya?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Beberapa keunggulan dan kualitas yang saya miliki sebagai
              developer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="hover-lift hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-primary font-normal">
                    {highlight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/80 leading-relaxed">
                    {highlight.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-card border rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Mari <span className="text-highlight">Berkolaborasi!</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Tertarik untuk bekerja sama atau memiliki projek menarik? Jangan
              ragu untuk menghubungi saya dan mari wujudkan ide-ide luar biasa
              bersama!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <Button size="lg" variant="outline" className="gap-2">
                  <Code className="h-4 w-4" />
                  Lihat Projek Saya
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
              <Link href="https://api.whatsapp.com/send/?phone=6285731101269&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 shadow-lg">
                  <Mail className="h-4 w-4" />
                  Mulai Diskusi
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

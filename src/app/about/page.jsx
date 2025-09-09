"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Code,
  Database,
  Smartphone,
  Globe,
  Heart,
  Coffee,
  Music,
  GamepadIcon,
  User,
  ArrowRight,
} from "lucide-react";

const AboutPage = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: Globe,
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript",
      ],
    },
    {
      category: "Backend Development",
      icon: Database,
      technologies: ["Node.js", "Express.js", "Python", "PHP", "RESTful API"],
    },
    {
      category: "Database & Tools",
      icon: Database,
      technologies: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Git"],
    },
    {
      category: "Mobile Development",
      icon: Smartphone,
      technologies: ["React Native", "Flutter", "App Store", "Play Store"],
    },
  ];

  const interests = [
    {
      icon: Code,
      label: "Coding",
      description: "Suka mengeksplorasi teknologi baru",
    },
    {
      icon: Coffee,
      label: "Coffee",
      description: "Tidak bisa hidup tanpa kopi",
    },
    {
      icon: Music,
      label: "Music",
      description: "Mendengarkan musik saat coding",
    },
    {
      icon: GamepadIcon,
      label: "Gaming",
      description: "Bermain game di waktu senggang",
    },
  ];

  const journey = [
    {
      year: "2022",
      title: "Memulai Kuliah",
      description:
        "Masuk ke Universitas Dr. Soetomo jurusan Teknik Informatika",
    },
    {
      year: "2023",
      title: "First Web Project",
      description:
        "Membuat website pertama menggunakan HTML, CSS, dan JavaScript",
    },
    {
      year: "2023",
      title: "Learning React",
      description: "Mulai belajar React dan framework modern lainnya",
    },
    {
      year: "2024",
      title: "Fullstack Journey",
      description:
        "Mendalami backend development dan database management",
    },
    {
      year: "2024",
      title: "Present",
      description:
        "Aktif mengerjakan projek dan terus belajar teknologi baru",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Mengenal{" "}
              <span className="text-highlight">
                Muhammad Fajar
              </span>
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              Saya adalah mahasiswa yang passionate dalam dunia teknologi,
              khususnya pengembangan web dan aplikasi mobile. Mari
              berkenalan lebih dekat!
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Perjalanan <span className="text-highlight">Saya</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sebagai mahasiswa Teknik Informatika di Universitas Dr.
                  Soetomo, saya telah mengembangkan passion yang mendalam
                  untuk pengembangan web. Saat ini sedang menempuh semester
                  5 dan aktif mengerjakan berbagai proyek untuk mengasah
                  kemampuan programming.
                </p>
                <p>
                  Saya memiliki pengalaman dalam mengembangkan aplikasi web
                  fullstack, mulai dari frontend yang menarik hingga backend
                  yang robust. Selalu bersemangat untuk mempelajari teknologi
                  baru dan menerapkannya dalam proyek nyata.
                </p>
                <p>
                  Ketika tidak sedang coding, saya suka mengeksplorasi
                  teknologi terbaru, berkontribusi pada open source projects,
                  dan berbagi pengetahuan dengan fellow developers.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                <Badge variant="outline">Problem Solving</Badge>
                <Badge variant="outline">Team Work</Badge>
                <Badge variant="outline">Fast Learning</Badge>
                <Badge variant="outline">Creative Thinking</Badge>
              </div>
            </div>

            <div className="space-y-4">
              {journey.map((item, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center border-2 border-border shadow-md hover-lift">
                      <span className="text-primary font-semibold text-sm">
                        {item.year}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary mb-1">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Keahlian <span className="text-highlight">Teknis</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Berikut adalah teknologi dan tools yang saya kuasai dalam
              pengembangan aplikasi
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card
                  key={index}
                  className="hover-lift hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-3 bg-muted rounded-xl">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-primary">{skill.category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Minat & <span className="text-highlight">Hobi</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Hal-hal yang saya sukai di luar dunia programming
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover-lift hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">
                      {interest.label}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {interest.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=" bg-muted/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-card border rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ingin Tahu <span className="text-highlight">Lebih Banyak?</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Lihat projek-projek yang telah saya kerjakan atau hubungi saya
              untuk diskusi lebih lanjut
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <Button size="lg" className="gap-2 shadow-lg">
                  <Code className="h-4 w-4" />
                  Lihat Projek
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="gap-2">
                  <Heart className="h-4 w-4" />
                  Mari Berkolaborasi
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

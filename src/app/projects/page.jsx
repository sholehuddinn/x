"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar, Users, Star } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "Absensi Training Next.js",
      description:
        "Platform absensi untuk training dengan sistem manajemen peserta dan jadwal",
      image: "/img/absen_training_nextjs.png",
      technologies: ["React", "Next.js", "PostgreSQL", "Tailwind CSS"],
      category: "frontend",
      status: "Completed",
      duration: "1 Day",
      team: "1 people",
      features: ["User Absen", "Waktu Real-time"],
      demoUrl: "https://github.com/sholehuddinn/absen-digital",
      githubUrl: "https://github.com/sholehuddinn/absen-digital",
    },
    {
      title: "Absensi Ospek Kampus",
      description:
        "Platform absensi untuk ospek kampus dengan sistem manajemen peserta, jadwal dan laporan",
      image: "/img/absensi_ospek.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "PostgreSQL",
        "DaisyUI",
      ],
      category: "fullstack",
      status: "Completed",
      duration: "2 Days",
      team: "3 people",
      features: [
        "Absen Berdasarkan Tim",
        "Login",
        "Real-time Updates",
        "Team Collaboration",
        "Time Tracking",
      ],
      demoUrl: "https://github.com/sholehuddinn/absen-osfak",
      githubUrl: "https://github.com/sholehuddinn/absen-osfak",
    },
    {
      title: "Admin Elearning",
      description:
        "Sistem admin untuk platform e-learning dengan manajemen kursus, pengguna, dan laporan kemajuan belajar.",
      image: "/img/admin_elearning.png",
      technologies: ["React", "Tailwind CSS", "DaisyUI", "Chart.js"],
      category: "Frontend",
      status: "Completed",
      duration: "1 Week",
      team: "3 people",
      features: [
        "Admin Dashboard",
        "User Management",
        "Course Management",
        "Progress Tracking",
      ],
      demoUrl:
        "https://www.linkedin.com/posts/muhammad-fajar-sholehuddin-maulana-putra-b901572a1_web-admin-e-learning-kelola-kelas-activity-7305195347977326592-b3Wt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjQptwBaHKHSlbmnnpnCMr0xeUbp5-HNMo",
      githubUrl:
        "https://www.linkedin.com/posts/muhammad-fajar-sholehuddin-maulana-putra-b901572a1_web-admin-e-learning-kelola-kelas-activity-7305195347977326592-b3Wt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjQptwBaHKHSlbmnnpnCMr0xeUbp5-HNMo",
    },
    {
      title: "Lecture Elearning",
      description:
        "Platform e-learning untuk perkuliahan dengan fitur video conference, materi kuliah, dan kuis interaktif.",
      image: "/img/lecture_elearning.png",
      technologies: ["React", "Tailwind CSS", "DaisyUI", "Chart.js"],
      category: "Frontend",
      status: "Completed",
      duration: "1 Week",
      team: "3 people",
      features: [
        "Video Conference",
        "Course Materials",
        "Interactive Quizzes",
        "Attendance Tracking",
      ],
      demoUrl:
        "https://www.linkedin.com/posts/muhammad-fajar-sholehuddin-maulana-putra-b901572a1_web-lecture-e-learning-dosen-lebih-fokus-activity-7305200775641632770-id4W?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjQptwBaHKHSlbmnnpnCMr0xeUbp5-HNMo",
      githubUrl:
        "https://www.linkedin.com/posts/muhammad-fajar-sholehuddin-maulana-putra-b901572a1_web-lecture-e-learning-dosen-lebih-fokus-activity-7305200775641632770-id4W?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjQptwBaHKHSlbmnnpnCMr0xeUbp5-HNMo",
    },
    {
      title: "Student Elearning",
      description:
        "Platform e-learning untuk mahasiswa dengan fitur manajemen Absen, materi, kuis, dan forum diskusi.",
      image: "/img/student_elearning.png",
      technologies: [
        "Next.js",
        "Prisma",
        "Shadcn ui",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      category: "fullstack",
      status: "In Progress",
      duration: "1 Week",
      team: "1 people",
      features: [
        "Absen",
        "Materi Kuliah",
        "Kuis Interaktif",
        "Forum Diskusi",
      ],
      demoUrl: "https://e-learn-sable.vercel.app/",
      githubUrl: "https://e-learn-sable.vercel.app/",
    },
    {
      title: "Admin Rental Mobil",
      description:
        "Sistem admin untuk platform rental mobil dengan manajemen kendaraan, pengguna, dan laporan penyewaan.",
      image:
        "/img/admin_rental_mobil.png",
      technologies: ["React", "DaisyUI", "Tailwind CSS", "Chart.js"],
      category: "frontend",
      status: "Completed",
      duration: "5 months",
      team: "3 people",
      features: [
        "Real-time Monitoring",
        "Data Visualization",
        "Alert System",
        "Analytics",
      ],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Sistem Informasi Rental Mobil",
      description:
        "Sistem informasi untuk platform rental mobil dengan fitur pencarian, pemesanan, dan ulasan kendaraan.",
      image:
        "/img/rental_mobil.png",
      technologies: ["React", "DaisyUI", "Tailwind CSS", "Chart.js"],
      category: "frontend",
      status: "Completed",
      duration: "3 Days",
      team: "3 people",
      features: [
        "Real-time Monitoring",
        "Data Visualization",
        "Alert System",
        "Analytics",
      ],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Sistem Informasi Rental Lapangan",
      description:
        "Sistem informasi untuk platform rental lapangan dengan fitur pencarian, pemesanan, dan ulasan lapangan.",
      image:
        "/img/lapangan.png",
      technologies: ["React", "DaisyUI", "Tailwind CSS", "Chart.js"],
      category: "frontend",
      status: "Completed",
      duration: "3 Days",
      team: "2 people",
      features: [
        "Daftar Lapangan",
        "Pemesanan Online",
        "Ulasan dan Rating",
        "Manajemen Jadwal",
      ],
      demoUrl: "https://llapangann.vercel.app/",
      githubUrl: "https://llapangann.vercel.app/",
    },
    {
      title: "Sistem Informasi Training Next.js",
      description:
        "Sistem informasi untuk platform training Next.js dengan fitur pengisian form, review projek,",
      image:
        "/img/notes_app.png",
      technologies: ["Next.js", "Shadcn UI", "prisma"],
      category: "fullstack",
      status: "Completed",
      duration: "1 Month",
      team: "2 people",
      features: [
        "rating projek",
        "review projek",
        "form pendaftaran",
        "buat postingan",
      ],
      demoUrl: "https://notes-app-rosy-phi.vercel.app",
      githubUrl: "https://notes-app-rosy-phi.vercel.app",
    },
    {
      title: "Sistem Informasi Management Aset Kampus",
      description:
        "Sistem informasi untuk platform manajemen aset dengan fitur pencarian, Data Pengelolaan, dan ulasan aset.",
      image:
        "/img/sistem_informasi_manajemen_aset.png",
      technologies: ["React", "Shadcn UI", "Chart Js"],
      category: "frontend",
      status: "In Progress",
      duration: "1 Month",
      team: "3 people",
      features: [
        "Data Aset",
        "Manajemen Aset",
        "Laporan Aset",
        "Pengelolaan Kategori",
      ],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Pemesanan Roti Azka Cake",
      description:
        "Sistem informasi untuk platform Untuk mengatasi padatnya pesanan. dan menggunakan midtrans untuk pembayaran",
      image:
        "/img/azkacake.png",
      technologies: ["Next.js", "Prisma", "Daisy UI"],
      category: "fullstack",
      status: "In Progress",
      duration: "1 Month",
      team: "1 people",
      features: [
        "Pemesanan",
        "katalog",
        "Pembayaran Midtrans",
        "Notifikasi Email"
      ],
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/10 text-green-600 border-green-200";
      case "In Progress":
        return "bg-yellow-500/10 text-yellow-600 border-yellow-200";
      default:
        return "bg-gray-500/10 text-gray-600 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6">
              <span className="text-highlight">Projek</span> yang Telah
              Dikerjakan
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Berikut adalah kumpulan projek yang telah saya kerjakan selama
              perjalanan belajar dan pengembangan skill programming. Setiap
              projek memiliki tantangan dan pembelajaran yang berbeda.
            </p>
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md overflow-hidden"
              >
                {/* Project Image */}
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="capitalize">
                      {project.category}
                    </Badge>
                    <Badge
                      className={`${getStatusColor(project.status)} border`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-primary group-hover:text-primary/80 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Project Stats */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {project.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {project.team}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features
                        .slice(0, 4)
                        .map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-1 text-xs text-muted-foreground"
                          >
                            <Star className="h-2 w-2 fill-current" />
                            {feature}
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button
                      rel="noopener noreferrer"
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Github className="h-3 w-3" />
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </Link>
                    </Button>
                    <Button
                      rel="noopener noreferrer"
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                      <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

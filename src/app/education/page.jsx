"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users, Trophy, Star } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

const Education = () => {
  const achievements = [
    { icon: Trophy, title: "IPK Sementara: 3.75/4.00", description: "Konsisten mempertahankan prestasi akademik yang baik" },
    { icon: Award, title: "Juara 2 Programming Contest 2023", description: "Kompetisi programming tingkat universitas" },
    { icon: Users, title: "Ketua Divisi IT Himpunan Mahasiswa", description: "Memimpin tim dalam pengembangan sistem informasi" },
    { icon: BookOpen, title: "Peserta Magang di Startup Tech", description: "3 bulan magang sebagai fullstack developer" },
    { icon: Star, title: "Sertifikat Web Development Bootcamp", description: "Menyelesaikan bootcamp intensive 6 bulan" }
  ];

  const subjects = [
    { name: "Pemrograman Web", grade: "A" },
    { name: "Basis Data", grade: "A-" },
    { name: "Algoritma & Struktur Data", grade: "A" },
    { name: "Pemrograman Mobile", grade: "A-" },
    { name: "Sistem Informasi", grade: "A" },
    { name: "Jaringan Komputer", grade: "B+" },
    { name: "Rekayasa Perangkat Lunak", grade: "A" },
    { name: "Artificial Intelligence", grade: "A-" }
  ];

  const activities = [
    {
      title: "Himpunan Mahasiswa Teknik Informatika",
      role: "Ketua Divisi IT",
      period: "2023 - 2024",
      description: "Memimpin pengembangan website himpunan dan sistem informasi internal"
    },
    {
      title: "Programming Study Group",
      role: "Co-Founder",
      period: "2022 - Present",
      description: "Mendirikan dan mengelola study group untuk belajar programming bersama"
    },
    {
      title: "Tech Startup Internship",
      role: "Fullstack Developer Intern",
      period: "Jun - Aug 2024",
      description: "Magang 3 bulan mengembangkan aplikasi web dan mobile untuk startup lokal"
    }
  ];

  const coursework = [
    {
      semester: "Semester 5 (Current)",
      courses: [
        "Pemrograman Web Framework",
        "Machine Learning",
        "Keamanan Sistem Informasi",
        "Mobile App Development",
        "Software Testing"
      ]
    },
    {
      semester: "Semester 4",
      courses: [
        "Basis Data Lanjutan", 
        "Pemrograman Berorientasi Objek",
        "Analisis dan Perancangan Sistem",
        "Jaringan Komputer",
        "Human Computer Interaction"
      ]
    },
    {
      semester: "Semester 3",
      courses: [
        "Struktur Data",
        "Sistem Operasi",
        "Pemrograman Web Dasar",
        "Matematika Diskrit",
        "Sistem Basis Data"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Perjalanan <span className="text-highlight">Akademik</span>
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              Dokumentasi lengkap perjalanan pendidikan, prestasi akademik, dan aktivitas 
              yang mendukung pengembangan kemampuan teknis dan soft skills
            </p>
          </div>
        </div>
      </section>

      {/* Current Education */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                <span className="text-highlight">Universitas Dr. Soetomo</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <GraduationCap className="h-4 w-4" />
                  <span>Sarjana Teknik Informatika (S1)</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>2022 - 2026 (Expected)</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Surabaya, Jawa Timur</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="font-medium">
                    Semester 5 - IPK: 3.75/4.00
                  </Badge>
                </div>
              </div>
              
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Saat ini sedang menempuh pendidikan Sarjana Teknik Informatika dengan fokus 
                pada pengembangan aplikasi web dan mobile. Aktif mengikuti berbagai kegiatan 
                akademik dan organisasi untuk mengembangkan soft skills dan networking.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden border shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1732115234692-3ee71d5363af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHh1bml2ZXJzaXR5JTIwY2FtcHVzJTIwaW5kb25lc2lhfGVufDF8fHx8MTc1NzI3MzY5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="University Campus"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Performance */}
      <section className="py-16 bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Prestasi <span className="text-highlight">Akademik</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Nilai dan pencapaian dalam mata kuliah yang telah ditempuh
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {subjects.map((subject, index) => (
              <Card key={index} className="hover-lift hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-sm leading-tight">{subject.name}</h4>
                    <Badge variant="outline" className="ml-2 font-bold">
                      {subject.grade}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {coursework.map((semester, index) => (
              <Card key={index} className="hover-lift hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-primary">{semester.semester}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {semester.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="text-sm text-muted-foreground">
                        • {course}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Pencapaian & <span className="text-highlight">Sertifikasi</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Prestasi dan pengakuan yang diperoleh selama masa studi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="text-center hover-lift hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">{achievement.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Aktivitas & <span className="text-highlight">Organisasi</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Keterlibatan dalam organisasi dan kegiatan pengembangan diri
            </p>
          </div>

          <div className="space-y-6">
            {activities.map((activity, index) => (
              <Card key={index} className="hover-lift hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-primary">{activity.title}</h4>
                      <p className="text-muted-foreground">{activity.role}</p>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0">
                      {activity.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
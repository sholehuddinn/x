"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar, Users, Star } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Platform e-commerce lengkap dengan sistem pembayaran, manajemen produk, dashboard admin, dan notifikasi real-time.",
      image: "https://images.unsplash.com/photo-1676731820390-a119efe23333?ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      category: "fullstack",
      status: "Completed",
      duration: "3 months",
      team: "4 people",
      features: ["User Authentication", "Payment Integration", "Real-time Chat", "Admin Dashboard"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Aplikasi manajemen tugas dengan fitur real-time collaboration, drag & drop, dan sistem notifikasi yang canggih.",
      image: "https://images.unsplash.com/photo-1676731820390-a119efe23333?ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
      category: "frontend",
      status: "In Progress",
      duration: "2 months",
      team: "2 people",
      features: ["Real-time Updates", "Drag & Drop", "Team Collaboration", "Time Tracking"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "University Portal",
      description: "Portal mahasiswa untuk sistem informasi akademik dengan fitur absensi, nilai, jadwal, dan komunikasi dosen-mahasiswa.",
      image: "https://images.unsplash.com/photo-1732115234692-3ee71d5363af?ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "jQuery"],
      category: "fullstack",
      status: "Completed",
      duration: "4 months",
      team: "3 people",
      features: ["Student Portal", "Grade Management", "Attendance System", "Messaging"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Mobile Weather App",
      description: "Aplikasi cuaca mobile dengan prediksi 7 hari, notifikasi perubahan cuaca, dan visualisasi data yang menarik.",
      image: "https://images.unsplash.com/photo-1676731820390-a119efe23333?ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["React Native", "API Integration", "Firebase", "Redux"],
      category: "mobile",
      status: "Completed",
      duration: "2 months",
      team: "1 person",
      features: ["7-day Forecast", "Push Notifications", "Location Services", "Dark Mode"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Blog CMS",
      description: "Content Management System untuk blog dengan editor rich text, SEO optimization, dan sistem komentar yang interaktif.",
      image: "https://images.unsplash.com/photo-1676731820390-a119efe23333?ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Vue.js", "Node.js", "MongoDB", "Express", "Quill.js"],
      category: "frontend",
      status: "In Progress",
      duration: "3 months",
      team: "2 people",
      features: ["Rich Text Editor", "SEO Tools", "Comment System", "Media Library"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "IoT Dashboard",
      description: "Dashboard monitoring untuk perangkat IoT dengan visualisasi data real-time, alert system, dan analytics yang mendalam.",
      image: "https://images.unsplash.com/photo-1676731820390-a119efe23333?ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["React", "Python", "MQTT", "Chart.js", "InfluxDB"],
      category: "fullstack",
      status: "Completed",
      duration: "5 months",
      team: "3 people",
      features: ["Real-time Monitoring", "Data Visualization", "Alert System", "Analytics"],
      demoUrl: "#",
      githubUrl: "#"
    }
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
              <span className="text-highlight">Projek</span> yang Telah Dikerjakan
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Berikut adalah kumpulan projek yang telah saya kerjakan selama perjalanan 
              belajar dan pengembangan skill programming. Setiap projek memiliki tantangan 
              dan pembelajaran yang berbeda.
            </p>
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md overflow-hidden">
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
                    <Badge className={`${getStatusColor(project.status)} border`}>
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
                      {project.features.slice(0, 4).map((feature, featureIndex) => (
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
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Github className="h-3 w-3" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Demo
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

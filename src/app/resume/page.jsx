"use client";

import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  Linkedin,
  User,
  GraduationCap,
  Briefcase,
  Award,
  Calendar,
  Download,
} from "lucide-react";

const Resume = () => {
  const personalInfo = {
    name: "Muhammad Fajar Sholehuddin Maulana Putra",
    title: "Fullstack Web Developer",
    email: "fajar.sholehuddin@example.com",
    phone: "+62 812-3456-7890",
    location: "Surabaya, Jawa Timur",
    website: "https://fajar-portfolio.com",
    github: "https://github.com/fajar-dev",
    linkedin: "https://linkedin.com/in/fajar-dev",
    photo: "https://via.placeholder.com/120", // bisa ganti foto profilmu
  };

  const education = [
    {
      degree: "Sarjana Teknik Informatika",
      school: "Universitas Dr. Soetomo",
      location: "Surabaya, Jawa Timur",
      period: "2022 - 2026 (Expected)",
      status: "Semester 5",
      gpa: "3.7/4.0",
    },
  ];

  const experience = [
    {
      title: "Freelance Web Developer",
      company: "Various Clients",
      location: "Remote",
      period: "2023 - Present",
      responsibilities: [
        "Mengembangkan aplikasi web responsif menggunakan React dan Next.js",
        "Membangun REST API dengan Node.js dan Express.js",
        "Implementasi database design dengan MySQL dan PostgreSQL",
        "Kolaborasi dengan tim design untuk implementasi UI/UX",
      ],
    },
    {
      title: "Web Development Intern",
      company: "Local Tech Startup",
      location: "Surabaya",
      period: "Jun 2023 - Aug 2023",
      responsibilities: [
        "Membantu pengembangan aplikasi web company profile",
        "Melakukan testing dan debugging aplikasi web",
        "Dokumentasi teknis untuk project development",
        "Belajar best practices dalam software development",
      ],
    },
  ];

  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "Python", "PHP", "RESTful API"],
    database: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
    tools: ["Git", "Docker", "Figma", "Postman"],
    mobile: ["React Native", "Flutter"],
  };

  const projects = [
    {
      name: "E-Commerce Platform",
      description:
        "Platform e-commerce lengkap dengan fitur pembayaran dan management inventory",
      technologies: ["React", "Node.js", "MySQL", "Stripe API"],
    },
    {
      name: "Task Management App",
      description: "Aplikasi manajemen tugas dengan real-time collaboration",
      technologies: ["Next.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    },
  ];

  const certifications = [
    { name: "React Developer Certification", issuer: "Meta", date: "2023" },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2023",
    },
  ];

  const languages = [
    { name: "Bahasa Indonesia", level: "Native" },
    { name: "English", level: "Intermediate" },
  ];

  return (
    <div className="min-h-screen bg-white pt-10 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <img
            src={"/img/aku_bg_blue.jpg"}
            alt="Profile"
            className="w-28 h-28 rounded-full mb-4"
          />
          <h1 className="text-3xl font-bold">{personalInfo.name}</h1>
          <p className="text-gray-600">{personalInfo.title}</p>
          <div className="flex gap-4 mt-3 text-gray-500">
            <a href={personalInfo.github} target="_blank">
              <Github className="w-5 h-5" />
            </a>
            <a href={personalInfo.linkedin} target="_blank">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={personalInfo.website} target="_blank">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Contact */}
            <div>
              <h2 className="font-semibold text-lg flex items-center gap-2 mb-3">
                <Mail className="w-4 h-4" /> Contact
              </h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> {personalInfo.email}
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> {personalInfo.phone}
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> {personalInfo.location}
                </li>
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h2 className="font-semibold text-lg mb-3">Skills</h2>
              {Object.entries(skills).map(([category, items], idx) => (
                <div key={idx} className="mb-3">
                  <p className="text-sm font-medium capitalize">{category}</p>
                  <p className="text-sm text-gray-600">
                    {items.join(", ")}
                  </p>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div>
              <h2 className="font-semibold text-lg mb-3">Languages</h2>
              {languages.map((lang, idx) => (
                <p key={idx} className="text-sm text-gray-600">
                  {lang.name} — {lang.level}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Summary */}
            <div>
              <h2 className="font-semibold text-lg mb-3">Professional Summary</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Mahasiswa Teknik Informatika semester 5 yang passionate dalam
                pengembangan web fullstack. Berpengalaman membangun aplikasi web
                modern dengan React, Node.js, dan teknologi terkini. Senang
                belajar hal baru dan berkolaborasi untuk menciptakan solusi
                digital inovatif.
              </p>
            </div>

            {/* Experience */}
            <div>
              <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> Experience
              </h2>
              {experience.map((exp, idx) => (
                <div key={idx} className="mb-6">
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="font-medium">{exp.title}</p>
                      <p className="text-gray-600">{exp.company}</p>
                    </div>
                    <span className="text-gray-500">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education */}
            <div>
              <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> Education
              </h2>
              {education.map((edu, idx) => (
                <div key={idx} className="text-sm">
                  <p className="font-medium">{edu.degree}</p>
                  <p className="text-gray-600">{edu.school}</p>
                  <p className="text-gray-500">
                    {edu.period} — {edu.status}, GPA: {edu.gpa}
                  </p>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div>
              <h2 className="font-semibold text-lg mb-4">Key Projects</h2>
              {projects.map((proj, idx) => (
                <div key={idx} className="mb-4">
                  <p className="font-medium text-sm">{proj.name}</p>
                  <p className="text-gray-600 text-sm">{proj.description}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Tech: {proj.technologies.join(", ")}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Award className="w-4 h-4" /> Certifications
              </h2>
              {certifications.map((cert, idx) => (
                <p key={idx} className="text-sm text-gray-600">
                  {cert.name} — {cert.issuer} ({cert.date})
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

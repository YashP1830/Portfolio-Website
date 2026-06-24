"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

// --- Types ---
interface Project {
  id: number;
  title: string;
  description: string;
  location: string;
  year: string;
  imageUrl: string;
}

// --- Data ---
const projects: Project[] = [
  {
    id: 1,
    title: "Skyline Tower Construction",
    description: "A 45-storey commercial tower...",
    location: "Mumbai, India",
    year: "2024",
    imageUrl: "/api/placeholder/400/250", // Replace with actual image path
  },
  {
    id: 2,
    title: "National Highway Expansion Project",
    description: "Construction of 6-lane highway...",
    location: "Delhi - Jaipur Corridor",
    year: "2023",
    imageUrl: "/api/placeholder/400/250",
  },
  {
    id: 3,
    title: "Metro Rail Line Phase-III",
    description: "Fully automated metro corridor...",
    location: "Bangalore, India",
    year: "2024",
    imageUrl: "/api/placeholder/400/250",
  },
  {
    id: 4,
    title: "Central Railway Station Renovation",
    description: "Upgraded platforms & facilities...",
    location: "Chennai, India",
    year: "2022",
    imageUrl: "/api/placeholder/400/250",
  },
  {
    id: 5,
    title: "International Airport Terminal-2",
    description: "World-class airport terminal...",
    location: "Hyderabad, India",
    year: "2024",
    imageUrl: "/api/placeholder/400/250",
  },
  {
    id: 6,
    title: "Water Treatment Facility - Sector 21",
    description: "150-MLD purification plant...",
    location: "Ahmedabad, India",
    year: "2023",
    imageUrl: "/api/placeholder/400/250",
  },
];

// --- Animated Counter Component ---
const AnimatedCounter = ({ from, to, suffix }: { from: number; to: number; suffix: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(from, to, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toString() + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, suffix, inView]);

  return <span ref={nodeRef} className="text-4xl md:text-5xl font-bold text-green-600">{from}{suffix}</span>;
};


// --- Main Page Component ---
export default function AboutGreenworld() {
  return (
    <div id="greenworld" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24 text-slate-800">
      
      
      {/* 2. Statistics Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { num: 12, suffix: "+", label: "YEARS OF EXPERIENCE" },
          { num: 1500, suffix: "+", label: "PROJECTS COMPLETED" },
          { num: 100, suffix: "+", label: "MAJOR CLIENTS" },
        ].map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="bg-white border border-green-100 shadow-sm rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4"
          >
            <AnimatedCounter from={0} to={stat.num} suffix={stat.suffix} />
            <p className="text-sm font-bold tracking-widest text-slate-700 uppercase">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </section>
      {/* 1. About Us Section */}
      <section className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            About GreenWorld
          </h1>
          <div className="flex flex-col">
            <h2 className="text-xl md:text-2xl italic text-green-700 font-medium">
              We are the group of companies under the umbrella of Grano.
            </h2>
            <div className="h-1 w-24 bg-green-500 mt-4 rounded-full"></div>
          </div>
        </div>

        <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-4xl">
          <p>
            We are serving the nation for more than half a decade (EST. 2013). Based in Noida, 
            we lead in civil works, electrical works, building construction, maintenance, 
            consultancy and engineering services.
          </p>
          <p>
            We maintain high-quality standards while exceeding client expectations and 
            delivering work within strict timelines.
          </p>
          <p>
            Greenworld stands out for innovation and collaboration with clients, designers, 
            subcontractors and suppliers.
          </p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg max-w-4xl">
          <p className="text-xl font-bold italic text-green-800">
            We are constantly evolving and understand the complexity of large-scale construction projects.
          </p>
        </div>
      </section>

      {/* 3. Recent Projects Section */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Recent Projects</h2>
          <p className="text-slate-500 mt-2">A glimpse into our latest infrastructural endeavors.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow group cursor-pointer relative"
            >
              {/* Image Container */}
              <div className="h-48 w-full bg-slate-200 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="font-bold text-lg text-slate-900 leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500 truncate">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-50 text-xs text-slate-400 font-medium">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-red-400" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Users } from "lucide-react";

// --- Types ---
interface Segment {
  id: number;
  title: string;
  description: string;
  clients: string;
  imageUrl: string;
}

// --- Data ---
const segments: Segment[] = [
  {
    id: 1,
    title: "Metro & Railways",
    description: "Casting Yards, Depot Development, Site Offices, Trackside Infrastructure",
    clients: "NCRTC, RVNL, Noida Metro",
    imageUrl: "/api/placeholder/400/250", // Replace with actual image
  },
  {
    id: 2,
    title: "Pre-Engineered Buildings",
    description: "PEB Structures, Prefab Offices, Labour Colonies, Industrial Buildings",
    clients: "Aditya Birla, IIFL, NBCC",
    imageUrl: "/api/placeholder/400/250",
  },
  {
    id: 3,
    title: "Commercial Projects",
    description: "Landscaping, Site Development, Interior & Exterior Works",
    clients: "Radisson Blu, DLF, Mahagun",
    imageUrl: "/api/placeholder/400/250",
  },
  {
    id: 4,
    title: "Infrastructure",
    description: "Casting Yards, Earth Work, Building Construction, Road Works",
    clients: "KEC International, Afcons Infra",
    imageUrl: "/api/placeholder/400/250",
  },
  {
    id: 5,
    title: "Highway Projects",
    description: "Ganga Expressway Earthwork, Grading, Road Formation",
    clients: "UPEIDA, CDS Highway",
    imageUrl: "/api/placeholder/400/250",
  },
  {
    id: 6,
    title: "Real Estate",
    description: "Farmhouses, PEB Homes, Site Offices, Residential Infra",
    clients: "Krest Infra, Astha Infra",
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

  return <span ref={nodeRef} className="text-4xl md:text-5xl font-bold text-emerald-700">{from}{suffix}</span>;
};


// --- Main Page Component ---
export default function AboutGrano() {
  return (
    <div id="granoinfra"className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24 text-slate-800">
      
      {/* 1. About Us Section (From Image 3) */}
      <section className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            About Grano
          </h1>
          <div className="flex flex-col">
            <h2 className="text-xl md:text-2xl text-slate-600 font-medium">
              From Foundations to Frameworks – Evolving with PEB Excellence
            </h2>
            <div className="h-1 w-24 bg-emerald-500 mt-4 rounded-full"></div>
          </div>
        </div>

        <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-4xl pt-4">
          <h3 className="text-2xl font-bold text-slate-900 pb-2">
            Engineering Strong Structures for a Smarter India
          </h3>
          <p>
            Founded in 2013 and based in Noida, Grano Infra Private Limited. (operating as Grano) is a fast-growing name in infrastructure, civil works, electrical services, and turnkey construction.
          </p>
          <p>
            With over 12 years of experience, we are now expanding into the Pre-Engineered Building (PEB) space, bringing our commitment to quality, timely delivery, and innovation into this high-growth segment.
          </p>
          <p>
            Our journey is built on trust and hard work, and to deliver a strong and futuristic infrastructure.
          </p>
        </div>
      </section>

      {/* 2. Statistics Section (From Image 1) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { num: 500, suffix: " +", label: "Projects Completed" },
          { num: 80, suffix: " +", label: "Major Clients" },
          { num: 12, suffix: " +", label: "Years Experience" },
        ].map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="bg-[#F4FCF7] border border-emerald-50 shadow-sm rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-3"
          >
            <AnimatedCounter from={0} to={stat.num} suffix={stat.suffix} />
            <p className="text-sm font-medium text-slate-600">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </section>

      {/* 3. Key Project Segments (From Image 2) */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Key Project Segments</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((segment, idx) => (
            <motion.div
              key={segment.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow group cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="h-48 w-full bg-slate-200 overflow-hidden shrink-0">
                <img 
                  src={segment.imageUrl} 
                  alt={segment.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow space-y-3">
                <h3 className="font-bold text-lg text-emerald-700 leading-tight">
                  {segment.title}
                </h3>
                <p className="text-sm text-slate-600 flex-grow">
                  {segment.description}
                </p>
                
                {/* Footer / Clients */}
                <div className="flex items-start gap-2 pt-4 border-t border-slate-100 text-xs text-slate-500 mt-auto">
                  <Users className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <p>
                    <span className="font-semibold text-slate-700">Clients: </span>
                    {segment.clients}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
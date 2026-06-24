"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Handshake, 
  Target, 
  Eye, 
  MapPin,
  Phone, 
  Rocket 
} from "lucide-react";

export default function AboutMoyo() {
  return (
    <section className="w-full bg-gradient-to-br from-orange-100 via-orange-50 to-[#FFFBF7] rounded-3xl p-6 md:p-12 lg:p-16 border border-orange-200 shadow-sm overflow-hidden">
      
      {/* Explicit Section Heading */}
      <div id="moyo" className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          About Moyo
        </h2>
        <div className="h-1 w-24 bg-orange-500 mt-4 mx-auto rounded-full"></div>
      </div>

      {/* Top Section: Centered Main Content */}
      <motion.div 
        className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Headline */}
        <h3 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
          <span className="block text-slate-900">Helping Homes.</span>
          <span className="block text-orange-400">Creating Jobs.</span>
          <span className="block text-orange-600">Changing Lives.</span>
        </h3>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
          Finding reliable service providers for the home can be a difficult task. That is the reason why we built Moyo. Moyo is a secure platform where you can get access to professionals who can help you with your daily needs.
        </p>

        

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 pt-6">
          <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-orange-100 text-sm font-semibold text-slate-700">
            <ShieldCheck className="text-blue-500" size={18} /> Verified Professionals
          </div>
          <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-orange-100 text-sm font-semibold text-slate-700">
            <Zap className="text-orange-500" size={18} /> 24/7 Support
          </div>
          <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-orange-100 text-sm font-semibold text-slate-700">
            <Handshake className="text-amber-500" size={18} /> Transparent Pricing
          </div>
        </div>
      </motion.div>

      {/* Bottom Section: Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Mission Card */}
        <motion.div 
          className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-orange-100 p-2.5 rounded-xl text-orange-600">
              <Target size={22} />
            </div>
            <h4 className="text-sm font-bold tracking-widest text-slate-400 uppercase">Our Mission</h4>
          </div>
          <p className="text-slate-800 font-medium leading-relaxed text-lg">
            Simplify everyday living by connecting households with trusted, vetted, and skilled professionals.
          </p>
        </motion.div>

        {/* Vision Card */}
        <motion.div 
          className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-orange-100 p-2.5 rounded-xl text-orange-600">
              <Eye size={22} />
            </div>
            <h4 className="text-sm font-bold tracking-widest text-slate-400 uppercase">Our Vision</h4>
          </div>
          <p className="text-slate-800 font-medium leading-relaxed text-lg">
            Every home with seamless access to top-tier services and every skilled professional with a thriving livelihood.
          </p>
        </motion.div>

        {/* Location Card */}
        <motion.div 
          className="lg:col-span-2 bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-3xl shadow-lg shadow-orange-500/20 text-white flex flex-col justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="text-xs font-bold tracking-widest text-orange-200 uppercase mb-3">Based In</h4>
          <p className="text-2xl font-bold mb-6 flex items-center gap-2">
            <MapPin className="text-orange-300" /> Rohini Sector 5, New Delhi
          </p>
          <div className="flex items-center gap-3 font-medium text-orange-50 bg-black/10 w-fit px-4 py-2 rounded-full">
            <Phone size={18} />
            <span>+91 22 62054761</span>
          </div>
        </motion.div>

        {/* Company Info Card */}
        <motion.div 
          className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-orange-100 flex items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-orange-50 p-5 rounded-full text-orange-500 shrink-0">
            <Rocket size={32} />
          </div>
          <div>
            <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-1">Company Details</p>
            <p className="text-2xl font-bold text-slate-900 mb-1">Est. 2025</p>
            <p className="text-sm font-medium text-slate-500">MOYO International Pvt Ltd</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
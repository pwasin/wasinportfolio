import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail, Copy, Check, Send, Sparkles, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);

    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#FF4A60', '#7928CA', '#00F0FF', '#FFB800']
    });

    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-brand-accent/15 via-brand-secondary/15 to-transparent rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Contact Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-accent uppercase tracking-wider mb-6">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight mb-6 leading-tight">
          มาร่วมสร้างสรรค์งานออกแบบ <br />
          <span className="text-gradient">ที่น่าจดจำไปด้วยกัน</span>
        </h2>

        <p className="max-w-2xl mx-auto text-sm sm:text-lg text-slate-300 leading-relaxed mb-12">
          ไม่ว่าจะเป็นการออกแบบบรรจุภัณฑ์ ฉลากสินค้า สื่อสิ่งพิมพ์ หรือแคมเปญการตลาดออนไลน์ ผมพร้อมร่วมงานและทุ่มเทเพื่อผลลัพธ์ที่ดีที่สุดเสมอ
        </p>

        {/* Contact Card Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel max-w-xl mx-auto rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden shadow-2xl"
        >
          <div className="flex flex-col items-center">
            
            {/* Avatar / Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-accent to-brand-secondary p-[2px] mb-6 shadow-lg shadow-brand-accent/20">
              <div className="w-full h-full bg-dark-900 rounded-[14px] flex items-center justify-center text-white">
                <Mail className="w-8 h-8 text-brand-accent" />
              </div>
            </div>

            <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">
              Direct Contact
            </span>
            <div className="text-xl sm:text-2xl font-bold text-white mb-6 select-all font-mono">
              {personalInfo.email}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <button
                onClick={handleCopy}
                className="flex-1 py-3 px-6 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 transition-all group"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">คัดลอกอีเมลแล้ว! 🎉</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>คัดลอกอีเมล (Copy Email)</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${personalInfo.email}?subject=Interested in Graphic Design Collaboration`}
                className="flex-1 py-3 px-6 rounded-2xl bg-gradient-to-r from-brand-accent to-brand-secondary text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-accent/25 hover:scale-105 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>ส่งอีเมลทันที</span>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 w-full flex items-center justify-center gap-2 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-brand-accent" />
              <span>ประจำอยู่ที่กรุงเทพฯ (Bangkok, Thailand) • ยินดีรับงานทั้งแบบ On-site & Remote</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

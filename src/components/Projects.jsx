import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ExternalLink, 
  Eye, 
  Calendar, 
  Tag, 
  CheckCircle, 
  ArrowRight,
  Layers,
  Image as ImageIcon,
  Grid
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import ImageModal from './ImageModal';

export default function Projects() {
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0,
    projectTitle: ''
  });

  // State for Calendar Month selector
  const [calendarActiveMonth, setCalendarActiveMonth] = useState(0);

  const openLightbox = (project, startIndex = 0) => {
    setModalConfig({
      isOpen: true,
      images: project.gallery,
      currentIndex: startIndex,
      projectTitle: project.title
    });
  };

  const closeLightbox = () => {
    setModalConfig(prev => ({ ...prev, isOpen: false }));
  };

  const handleIndexChange = (index) => {
    setModalConfig(prev => ({ ...prev, currentIndex: index }));
  };

  const nissuiProject = projects.find(p => p.id === 'nissui');
  const calendarProject = projects.find(p => p.id === 'calendar2027');

  return (
    <section id="projects" className="py-24 relative">
      {/* Decorative background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-accent uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            ผลงานออกแบบ <span className="text-gradient">บรรจุภัณฑ์ & สื่อโฆษณา</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            เจาะลึกกระบวนการออกแบบจริงที่ตอบโจทย์ความต้องการของลูกค้าและสะท้อนคุณค่าของแบรนด์
          </p>
        </div>

        {/* ================= PROJECT 1: NISSUI HAPISAPO GUMMY ================= */}
        {nissuiProject && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-28 glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Project Narrative */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-pink-500/10 text-pink-400 border border-pink-500/20">
                      {nissuiProject.category}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-slate-300">
                      {nissuiProject.year}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {nissuiProject.client}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-display font-bold text-white mb-3">
                    {nissuiProject.title}
                  </h3>
                  <p className="text-sm font-medium text-brand-accent mb-6">
                    {nissuiProject.subtitle}
                  </p>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 mb-6">
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      คอนเซปต์และการแก้ปัญหา (Design Concept)
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {nissuiProject.concept}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                      ขอบเขตงานที่รับผิดชอบ (Key Deliverables)
                    </h4>
                    <div className="space-y-2">
                      {nissuiProject.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {nissuiProject.tags.map(tag => (
                      <span key={tag} className="text-[11px] font-medium text-slate-400 bg-dark-800 px-2.5 py-1 rounded-lg border border-white/5">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Primary CTA */}
                <button
                  onClick={() => openLightbox(nissuiProject, 0)}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-pink-500/20 hover:scale-[1.02] transition-all"
                >
                  <Eye className="w-4 h-4" />
                  <span>เปิดดูแกลเลอรีภาพขนาดเต็ม (12 รูปภาพ)</span>
                </button>
              </div>

              {/* Right Column: Interactive Gallery Grid */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {nissuiProject.gallery.slice(0, 6).map((item, idx) => (
                    <motion.div
                      key={item.src}
                      whileHover={{ scale: 1.03 }}
                      onClick={() => openLightbox(nissuiProject, idx)}
                      className="group relative rounded-2xl overflow-hidden aspect-square bg-dark-800 border border-white/10 cursor-pointer shadow-md"
                    >
                      <img
                        src={item.src}
                        alt={item.caption}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-end">
                        <span className="text-[11px] font-medium text-white line-clamp-2">
                          {item.caption}
                        </span>
                        <span className="text-[10px] text-pink-300 mt-1 flex items-center gap-1 font-semibold">
                          <Eye className="w-3 h-3" /> คลิกเพื่อขยาย
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Additional thumbnail bar */}
                <div className="mt-4 p-3 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-pink-400" />
                    <span className="text-xs text-slate-300 font-medium">
                      มีภาพชิ้นงานแคมเปญทั้งหมด 12 รูปภาพ (Jan - Mar)
                    </span>
                  </div>
                  <button
                    onClick={() => openLightbox(nissuiProject, 0)}
                    className="text-xs font-bold text-pink-400 hover:text-pink-300 flex items-center gap-1"
                  >
                    <span>ดูทั้งหมด</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* ================= PROJECT 2: CALENDAR 2027 ================= */}
        {calendarProject && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Project Narrative */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {calendarProject.category}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-slate-300">
                      {calendarProject.year}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      {calendarProject.client}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-display font-bold text-white mb-3">
                    {calendarProject.title}
                  </h3>
                  <p className="text-sm font-medium text-amber-400 mb-6">
                    {calendarProject.subtitle}
                  </p>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 mb-6">
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      คอนเซปต์และการออกแบบ (Concept & Art Direction)
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {calendarProject.concept}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                      สิ่งที่ส่งมอบ (Deliverables)
                    </h4>
                    <div className="space-y-2">
                      {calendarProject.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {calendarProject.tags.map(tag => (
                      <span key={tag} className="text-[11px] font-medium text-slate-400 bg-dark-800 px-2.5 py-1 rounded-lg border border-white/5">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Primary CTA */}
                <button
                  onClick={() => openLightbox(calendarProject, calendarActiveMonth)}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-all"
                >
                  <Eye className="w-4 h-4" />
                  <span>เปิดดูปฏิทินขนาดเต็ม (Cover & 12 Months)</span>
                </button>
              </div>

              {/* Right Column: Interactive Month Selector & Preview */}
              <div className="lg:col-span-7">
                {/* Active Preview Showcase */}
                <div 
                  onClick={() => openLightbox(calendarProject, calendarActiveMonth)}
                  className="group relative rounded-2xl overflow-hidden aspect-[16/10] bg-dark-800 border border-white/10 cursor-pointer shadow-xl mb-4"
                >
                  <img
                    src={calendarProject.gallery[calendarActiveMonth]?.src || calendarProject.coverImage}
                    alt="Calendar Preview"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-transparent to-transparent flex flex-col justify-end p-5">
                    <span className="text-sm font-bold text-white">
                      {calendarProject.gallery[calendarActiveMonth]?.caption}
                    </span>
                    <span className="text-xs text-amber-300 font-semibold flex items-center gap-1 mt-1">
                      <Eye className="w-3.5 h-3.5" /> คลิกเพื่อดูภาพความละเอียดสูง
                    </span>
                  </div>
                </div>

                {/* Interactive Month Selector Bar */}
                <div className="p-3 rounded-2xl bg-dark-800/80 border border-white/10">
                  <div className="flex items-center justify-between mb-2 px-1">
                    <span className="text-xs font-bold text-slate-300">
                      เลือกดูหน้ารายเดือน (Select Month):
                    </span>
                    <span className="text-[11px] text-amber-400 font-mono">
                      หน้า {calendarActiveMonth + 1} / {calendarProject.gallery.length}
                    </span>
                  </div>

                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5">
                    {calendarProject.gallery.slice(0, 14).map((item, idx) => {
                      const labels = ['Cover', 'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.', 'Spec'];
                      return (
                        <button
                          key={idx}
                          onClick={() => setCalendarActiveMonth(idx)}
                          className={`py-2 px-1 rounded-xl text-xs font-semibold transition-all ${
                            calendarActiveMonth === idx
                              ? 'bg-amber-500 text-black shadow-md font-bold scale-105'
                              : 'bg-white/5 text-slate-300 hover:bg-white/10'
                          }`}
                        >
                          {labels[idx] || `${idx + 1}`}
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        )}

      </div>

      {/* Lightbox Modal */}
      <ImageModal
        isOpen={modalConfig.isOpen}
        onClose={closeLightbox}
        images={modalConfig.images}
        currentIndex={modalConfig.currentIndex}
        onIndexChange={handleIndexChange}
        projectTitle={modalConfig.projectTitle}
      />
    </section>
  );
}

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function ImageModal({ isOpen, onClose, images, currentIndex, onIndexChange, projectTitle }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onIndexChange((currentIndex - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') onIndexChange((currentIndex + 1) % images.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images, onClose, onIndexChange]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentItem = images[currentIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl">
        {/* Backdrop click to close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
          onClick={onClose}
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative max-w-6xl w-full max-h-[92vh] flex flex-col rounded-3xl bg-dark-900 border border-white/10 shadow-2xl overflow-hidden z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar */}
          <div className="px-6 py-4 flex items-center justify-between border-b border-white/10 bg-dark-800/80">
            <div>
              <h4 className="text-sm font-bold text-white tracking-wide">{projectTitle}</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                รูปที่ {currentIndex + 1} จากทั้งหมด {images.length}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-brand-accent hover:text-white text-slate-300 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Image Display Area */}
          <div className="relative flex-1 min-h-[300px] max-h-[70vh] bg-black/50 flex items-center justify-center p-4 overflow-hidden select-none">
            {/* Prev Button */}
            {images.length > 1 && (
              <button
                onClick={() => onIndexChange((currentIndex - 1 + images.length) % images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-dark-800/80 hover:bg-brand-accent text-white border border-white/10 transition-all backdrop-blur-md shadow-lg z-20 group"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
              </button>
            )}

            {/* Current Image */}
            <motion.img
              key={currentItem.src}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              src={currentItem.src}
              alt={currentItem.caption || projectTitle}
              className="max-h-[68vh] max-w-full object-contain rounded-xl shadow-2xl"
            />

            {/* Next Button */}
            {images.length > 1 && (
              <button
                onClick={() => onIndexChange((currentIndex + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-dark-800/80 hover:bg-brand-accent text-white border border-white/10 transition-all backdrop-blur-md shadow-lg z-20 group"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
              </button>
            )}
          </div>

          {/* Bottom Caption & Thumbnail Strip */}
          <div className="px-6 py-4 bg-dark-800/90 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left w-full sm:w-auto">
              <p className="text-sm font-medium text-slate-200">
                {currentItem.caption}
              </p>
            </div>

            {/* Mini Thumbnails */}
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => onIndexChange(idx)}
                  className={`w-10 h-10 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    idx === currentIndex 
                      ? 'border-brand-accent scale-105 shadow-md' 
                      : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={img.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, ArrowLeftRight, CheckCircle, HelpCircle } from 'lucide-react';
import { GALLERY } from '../data';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const galleryItem = GALLERY[0];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  return (
    <section className="py-20 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-semibold text-brand-orange uppercase tracking-widest bg-brand-orange-light/60 px-3 py-1 rounded">
            Craftsmanship in Action
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-blue tracking-tight">
            Our Before & After Transformation Gallery
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Drag the divider slider left or right to inspect the quality of our installations. We replace outdated, rusty units with quiet, level, ultra-efficient HVAC systems.
          </p>
        </div>

        {/* Dynamic Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Slider Controls Description Column */}
          <div className="lg:col-span-5 space-y-6 text-left" id="gallery-info">
            <div className="bg-brand-gray-light border border-brand-gray-med p-6 rounded-2xl">
              <div className="flex items-center gap-2 text-brand-orange font-bold text-sm mb-3">
                <Sparkles className="h-4 w-4" />
                <span>Featured Project</span>
              </div>
              <h3 className="text-xl font-display font-bold text-brand-blue leading-tight">
                {galleryItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-2">
                {galleryItem.description}
              </p>

              <hr className="border-brand-gray-med my-4" />

              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-brand-blue mb-3">
                Why Our Installs Look Different:
              </h4>
              <ul className="space-y-2 text-xs text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Custom laser-leveled anti-vibration pad bases</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Perfectly wrapped armaflex copper line insulation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Premium weather-tight electrical whip conduits</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Responsible evacuation of all environmental fluids</span>
                </li>
              </ul>
            </div>

            {/* Quick Helper Tips */}
            <div className="flex items-start gap-2 text-xs text-gray-400">
              <HelpCircle className="h-4 w-4 text-brand-orange shrink-0 mt-0.5" />
              <span>
                <strong>How to use:</strong> Tap and drag the circle handler on the image comparison box to reveal the dramatic improvement.
              </span>
            </div>
          </div>

          {/* Interactive Slide Container Column */}
          <div className="lg:col-span-7 flex justify-center" id="gallery-interactive-column">
            <div
              ref={containerRef}
              className="relative w-full max-w-2xl aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-brand-gray-med select-none group cursor-ew-resize"
              id="slider-container"
            >
              {/* After (Base Image - Full view) */}
              <img
                src={galleryItem.afterUrl}
                alt="After Huxley Premium HVAC Installation"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-brand-blue/90 backdrop-blur-sm text-white font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow z-10">
                After Installation
              </div>

              {/* Before (Overlay Image - Swiped view) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={galleryItem.beforeUrl}
                  alt="Before Rusty HVAC Unit"
                  className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                  style={{ width: containerRef.current?.getBoundingClientRect().width }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-brand-orange/90 backdrop-blur-sm text-white font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow z-10">
                  Before Service
                </div>
              </div>

              {/* Custom Divider line */}
              <div
                className="absolute inset-y-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              />

              {/* Central Drag Handle */}
              <div
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-white text-brand-blue flex items-center justify-center shadow-2xl border border-brand-gray-med z-20 active:scale-90 transition-transform ${
                  isDragging ? 'ring-4 ring-brand-orange/30 scale-105' : 'group-hover:scale-105'
                }`}
                style={{ left: `${sliderPosition}%` }}
                id="slider-drag-handle"
                role="slider"
                aria-valuenow={sliderPosition}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Before after slider divider position"
              >
                <ArrowLeftRight className="h-4 w-4 text-brand-orange font-bold animate-pulse" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

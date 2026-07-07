import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, CheckCircle, PenTool, User } from 'lucide-react';
import { TESTIMONIALS, COMPANY_INFO } from '../data';
import { Testimonial } from '../types';

export default function Testimonials() {
  const [reviews, setReviews] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWriteOpen, setIsWriteOpen] = useState(false);

  // Form states
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    text: '',
    location: '',
  });
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    // Load local storage reviews if any exist, merged with default list
    const stored = localStorage.getItem('huxley_reviews');
    if (stored) {
      setReviews([...TESTIMONIALS, ...JSON.parse(stored)]);
    } else {
      setReviews(TESTIMONIALS);
    }
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name.trim() || !newReview.text.trim()) return;

    const testimonial: Testimonial = {
      id: 'rev-' + Date.now(),
      name: newReview.name,
      rating: newReview.rating,
      text: newReview.text,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      location: newReview.location || 'Long Grove, IL',
      verified: true,
    };

    const updated = [...reviews, testimonial];
    setReviews(updated);

    // Save added reviews to local storage
    const currentLocal = localStorage.getItem('huxley_reviews');
    const localList = currentLocal ? JSON.parse(currentLocal) : [];
    localList.push(testimonial);
    localStorage.setItem('huxley_reviews', JSON.stringify(localList));

    setFormSuccess(true);
    setNewReview({ name: '', rating: 5, text: '', location: '' });
    setCurrentIndex(updated.length - 1); // jump to newly added review

    setTimeout(() => {
      setIsWriteOpen(false);
      setFormSuccess(false);
    }, 2000);
  };

  return (
    <section className="py-20 bg-brand-gray-light overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold text-brand-orange uppercase tracking-widest bg-brand-orange-light/60 px-3 py-1 rounded">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-blue tracking-tight">
            What Our Neighbors Say About Huxley
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Read real-time, verified customer feedback from home comfort owners in Long Grove, Lake Zurich, Barrington, and across the Chicago suburbs.
          </p>
        </div>

        {/* Testimonial Core Slider Box */}
        {reviews.length > 0 && (
          <div className="relative max-w-4xl mx-auto mb-12" id="testimonial-slider-container">
            
            {/* Background Quotes element */}
            <span className="absolute -top-16 -left-10 text-[14rem] font-serif font-bold text-gray-200/50 select-none leading-none pointer-events-none">
              “
            </span>

            {/* Carousel card */}
            <div className="relative bg-white border border-brand-gray-med rounded-3xl p-8 sm:p-12 shadow-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Rating Stars and Verified flag */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-1 text-yellow-400">
                      {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    {reviews[currentIndex].verified && (
                      <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        <CheckCircle className="h-3.5 w-3.5" />
                        <span>Verified Customer</span>
                      </span>
                    )}
                  </div>

                  {/* Testimonial body text */}
                  <blockquote className="text-lg sm:text-xl font-medium text-brand-blue/95 italic leading-relaxed text-left">
                    "{reviews[currentIndex].text}"
                  </blockquote>

                  {/* Customer author footer */}
                  <div className="flex justify-between items-center border-t border-brand-gray-light pt-6">
                    <div className="text-left">
                      <cite className="not-italic font-display font-bold text-brand-blue text-base">
                        {reviews[currentIndex].name}
                      </cite>
                      <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">
                        {reviews[currentIndex].location} • {reviews[currentIndex].date}
                      </p>
                    </div>

                    <span className="hidden sm:inline-block font-mono text-xs font-bold text-gray-300">
                      {currentIndex + 1} / {reviews.length}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Handles */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={() => setIsWriteOpen(true)}
                className="flex items-center gap-2 text-xs font-bold text-brand-orange hover:text-brand-blue transition-colors cursor-pointer"
                id="leave-review-btn"
              >
                <PenTool className="h-4 w-4" />
                <span>Leave a Review</span>
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="h-10 w-10 flex items-center justify-center rounded-xl border border-brand-gray-med bg-white text-brand-blue hover:bg-brand-orange hover:text-white hover:border-transparent transition"
                  id="testimonial-prev-btn"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="h-10 w-10 flex items-center justify-center rounded-xl border border-brand-gray-med bg-white text-brand-blue hover:bg-brand-orange hover:text-white hover:border-transparent transition"
                  id="testimonial-next-btn"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

          </div>
        )}

        {/* Modal: Write a review form */}
        <AnimatePresence>
          {isWriteOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsWriteOpen(false)}
                className="fixed inset-0 bg-brand-blue/80 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-white p-6 sm:p-8 rounded-2xl w-full max-w-md shadow-2xl z-10 text-left"
              >
                <h3 className="text-xl font-display font-bold text-brand-blue mb-4">
                  Write a Huxley Review
                </h3>

                {formSuccess ? (
                  <div className="text-center py-8">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-bold text-brand-blue mb-1">Review Shared!</h4>
                    <p className="text-xs text-gray-500">Thank you for helping us grow. Your feedback is precious to us.</p>
                  </div>
                ) : (
                  <form onSubmit={handleReviewSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mary S."
                        value={newReview.name}
                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                        className="w-full text-sm rounded-lg border border-brand-gray-med bg-brand-gray-light px-3 py-2 text-brand-blue focus:border-brand-orange focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Suburb Location</label>
                        <input
                          type="text"
                          placeholder="e.g. Long Grove, IL"
                          value={newReview.location}
                          onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                          className="w-full text-sm rounded-lg border border-brand-gray-med bg-brand-gray-light px-3 py-2 text-brand-blue focus:border-brand-orange focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Star Rating</label>
                        <select
                          value={newReview.rating}
                          onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                          className="w-full text-sm rounded-lg border border-brand-gray-med bg-brand-gray-light px-3 py-2 text-brand-blue focus:border-brand-orange focus:outline-none"
                        >
                          <option value="5">⭐⭐⭐⭐⭐ (5 Stars)</option>
                          <option value="4">⭐⭐⭐⭐ (4 Stars)</option>
                          <option value="3">⭐⭐⭐ (3 Stars)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Review Comments</label>
                      <textarea
                        required
                        rows={3}
                        placeholder="How was our service? (cleanliness, timeliness, etc.)"
                        value={newReview.text}
                        onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                        className="w-full text-sm rounded-lg border border-brand-gray-med bg-brand-gray-light px-3 py-2 text-brand-blue focus:border-brand-orange focus:outline-none"
                      />
                    </div>

                    <div className="flex gap-3 justify-end pt-2">
                      <button
                        type="button"
                        onClick={() => setIsWriteOpen(false)}
                        className="border border-brand-gray-med text-gray-500 hover:bg-gray-50 font-semibold px-4 py-2 text-xs rounded-lg transition"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-brand-orange text-white hover:bg-opacity-95 font-semibold px-4 py-2 text-xs rounded-lg shadow transition"
                      >
                        Publish Review
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

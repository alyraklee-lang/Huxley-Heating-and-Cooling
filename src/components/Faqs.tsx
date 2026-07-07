import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageCircle } from 'lucide-react';
import { FAQS, COMPANY_INFO } from '../data';

export default function Faqs() {
  const [openId, setOpenId] = useState<string | null>('faq-1'); // default open first FAQ
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-20 bg-white" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-semibold text-brand-orange uppercase tracking-widest bg-brand-orange-light/60 px-3 py-1 rounded">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-blue tracking-tight">
            HVAC Questions Answered by Experts
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Have a question about your residential air conditioning or heating system? Browse our answers below or connect with our customer service desk directly.
          </p>
        </div>

        {/* Live FAQ Search Input */}
        <div className="mb-8 max-w-md mx-auto relative" id="faq-search-box">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-sm rounded-xl border border-brand-gray-med pl-10 pr-4 py-2 focus:border-brand-orange focus:outline-none bg-brand-gray-light text-brand-blue transition"
            id="faq-search-input"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-3 text-gray-400 hover:text-gray-600 text-xs font-semibold"
            >
              Clear
            </button>
          )}
        </div>

        {/* Accordion List */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-4" id="faq-accordion-list">
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-brand-gray-med rounded-2xl overflow-hidden transition-colors"
                  id={`faq-item-${faq.id}`}
                >
                  {/* Accordion Trigger Header */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className={`w-full flex items-center justify-between p-5 text-left font-display font-bold text-sm sm:text-base cursor-pointer transition-colors ${
                      isOpen
                        ? 'bg-brand-orange-light/20 text-brand-blue border-b border-brand-gray-med'
                        : 'bg-brand-gray-light/50 text-brand-blue hover:bg-brand-gray-light'
                    }`}
                    id={`faq-trigger-${faq.id}`}
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4">{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-brand-orange shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />
                    )}
                  </button>

                  {/* Accordion Body Panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="p-5 text-xs sm:text-sm text-gray-600 leading-relaxed text-left bg-white">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center p-8 bg-brand-gray-light border border-brand-gray-med rounded-2xl max-w-md mx-auto">
            <HelpCircle className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-semibold text-brand-blue">No matching FAQs found</p>
            <p className="text-xs text-gray-500 mt-1">Try testing a different word or contact us directly.</p>
          </div>
        )}

        {/* Call help banner below FAQs */}
        <div className="mt-12 bg-brand-orange-light/10 border border-brand-orange/20 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-left">
          <div className="flex gap-3 items-center">
            <div className="h-10 w-10 rounded-full bg-brand-orange-light text-brand-orange flex items-center justify-center shrink-0">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-brand-blue">Still Have Unanswered HVAC Questions?</h4>
              <p className="text-xs text-gray-500 mt-0.5">Talk to our friendly Long Grove team for immediate answers.</p>
            </div>
          </div>
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="w-full sm:w-auto text-center bg-brand-blue hover:bg-brand-blue-light text-white font-bold text-xs py-3 px-5 rounded-xl transition shadow"
            id="faq-help-call-btn"
          >
            Call {COMPANY_INFO.phone}
          </a>
        </div>

      </div>
    </section>
  );
}

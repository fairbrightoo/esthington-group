import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ChevronRight } from 'lucide-react';
import { ACCENT_COLOR } from './constants';
import emailjs from '@emailjs/browser';

interface JoinModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// Configuration for our new questions
const QUALIFYING_QUESTIONS = [
    {
        id: 'location',
        label: 'Location',
        options: ['Nigeria', 'Diaspora']
    },
    {
        id: 'profile',
        label: 'Investor Profile',
        options: ['Individual', 'Business', 'Group / Club']
    },
    {
        id: 'budget',
        label: 'Typical Budget Range',
        options: ['₦5M - ₦10M', '₦10M - ₦25M', '₦25M+']
    },
    {
        id: 'timeline',
        label: 'Investment Timeline',
        options: ['Immediately', 'Within 3 Months', 'Browsing']
    },
    {
        id: 'goal',
        label: 'Primary Investment Goal',
        options: ['Capital Appreciation', 'Rental Income', 'Land Banking', 'Build to Live']
    },
    {
        id: 'engagement',
        label: 'How would you like to receive opportunities?',
        options: ['WhatsApp', 'Email', 'Both']
    }
];

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // State to track selected chips (visual only, data is passed via hidden inputs)
    const [selections, setSelections] = useState({
        location: '',
        profile: '',
        budget: '',
        timeline: '',
        goal: '',
        engagement: ''
    });

    const handleSelect = (field: string, value: string) => {
        setSelections(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation for the new fields
        if (!selections.location || !selections.profile || !selections.budget || !selections.timeline || !selections.goal || !selections.engagement) {
            alert("Please select an option for all fields.");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        // 1. Record to Google Sheet
        const recordToSheet = () => {
            if (!formRef.current) return;
            const formData = new FormData(formRef.current);
            fetch(import.meta.env.VITE_GOOGLE_SHEET_WEB_APP_URL, {
                method: "POST",
                body: formData
            }).catch(err => console.error("Google Sheet Error:", err));
        };

        if (!formRef.current) return;

        // 2. Send Admin Notification (EmailJS)
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                recordToSheet();
                setIsSubmitting(false);
                setIsSubmitted(true);
                setSubmitStatus('success');

                setTimeout(() => {
                    setIsSubmitted(false);
                    setSubmitStatus('idle');
                    setSubmitStatus('idle');
                    setSelections({ location: '', profile: '', budget: '', timeline: '', goal: '', engagement: '' }); // Reset selections
                    onClose();
                    if (formRef.current) formRef.current.reset();
                }, 3000);
            })
            .catch((error) => {
                console.error("Email Error:", error);
                setIsSubmitting(false);
                setSubmitStatus('error');
            });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
                    />

                    <div className="fixed inset-0 flex items-center justify-center z-[70] p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-[#2A1B6E] border border-white/20 w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden pointer-events-auto max-h-[90vh] flex flex-col"
                        >
                            <div className="p-6 md:p-8 relative overflow-y-auto custom-scrollbar">
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                {!isSubmitted ? (
                                    <>
                                        <div className="mb-6">
                                            <h2 className="text-3xl font-serif font-bold text-white mb-2">Apply to Join the Hub</h2>
                                            <p className="text-white/60 text-sm">
                                                Membership is curated to ensure quality opportunities and focused investor engagement.
                                            </p>
                                        </div>

                                        {submitStatus === 'error' && (
                                            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm text-center">
                                                Something went wrong. Please try again.
                                            </div>
                                        )}

                                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                            {/* Standard Inputs */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-1">
                                                    <label className="text-xs font-bold uppercase tracking-wider text-white/40">Full Name</label>
                                                    <input type="text" name="name" required placeholder="John Doe"
                                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#F47920] transition-colors" />
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="text-xs font-bold uppercase tracking-wider text-white/40">Phone (WhatsApp)</label>
                                                    <input type="tel" name="phone" required placeholder="+234..."
                                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#F47920] transition-colors" />
                                                </div>
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-xs font-bold uppercase tracking-wider text-white/40">Email Address</label>
                                                <input type="email" name="email" required placeholder="john@example.com"
                                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#F47920] transition-colors" />
                                            </div>

                                            {/* Hidden inputs to store the chip values for FormData */}
                                            <input type="hidden" name="location" value={selections.location} />
                                            <input type="hidden" name="profile" value={selections.profile} />
                                            <input type="hidden" name="budget" value={selections.budget} />
                                            <input type="hidden" name="timeline" value={selections.timeline} />
                                            <input type="hidden" name="goal" value={selections.goal} />
                                            <input type="hidden" name="engagement" value={selections.engagement} />

                                            {/* Sleek Selection Chips */}
                                            {QUALIFYING_QUESTIONS.map((q) => (
                                                <div key={q.id} className="space-y-2">
                                                    <label className="text-xs font-bold uppercase tracking-wider text-white/40">{q.label}</label>
                                                    <div className="flex flex-wrap gap-2">
                                                        {q.options.map((opt) => (
                                                            <button
                                                                key={opt}
                                                                type="button"
                                                                onClick={() => handleSelect(q.id, opt)}
                                                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                                                                    // @ts-ignore
                                                                    selections[q.id] === opt
                                                                        ? 'bg-[#F47920] border-[#F47920] text-white shadow-lg scale-105'
                                                                        : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
                                                                    }`}
                                                            >
                                                                {opt}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className={`w-full ${ACCENT_COLOR} hover:bg-[#d96a1a] text-white py-4 rounded-xl font-bold text-lg mt-4 transition-transform active:scale-95 shadow-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed`}
                                            >
                                                {isSubmitting ? (
                                                    <span className="flex items-center gap-2">
                                                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                                        Processing...
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center gap-2">
                                                        Submit Application <ChevronRight className="w-5 h-5" />
                                                    </span>
                                                )}
                                            </button>
                                        </form>
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-12 text-center h-full">
                                        <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6 animate-bounce">
                                            <CheckCircle2 className="w-12 h-12 text-green-500" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-2">You're In!</h3>
                                        <p className="text-white/60 max-w-xs mx-auto">
                                            Your application has been received. One of our investment advisors will contact you shortly.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};
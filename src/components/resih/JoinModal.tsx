import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { ACCENT_COLOR } from './constants';
import emailjs from '@emailjs/browser';

interface JoinModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        // 1. Record to Google Sheet
        const recordToSheet = () => {
            if (!formRef.current) return;
            const formData = new FormData(formRef.current);
            fetch(import.meta.env.VITE_GOOGLE_SHEET_WEB_APP_URL, {
                method: "POST",
                body: formData
            }).then(res => res.json()).then(data => {
                console.log("Google Sheet Response:", data);
            }).catch(err => {
                console.error("Google Sheet Error:", err);
            });
        };

        if (!formRef.current) return;

        // 2. Send Admin Notification (EmailJS)
        // Auto-reply is now triggered automatically by EmailJS when this template is sent
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                console.log("Admin email sent successfully!");
                recordToSheet(); // Log to sheet on success
                setIsSubmitting(false);
                setIsSubmitted(true);
                setSubmitStatus('success');

                // Reset and close after delay
                setTimeout(() => {
                    setIsSubmitted(false);
                    setSubmitStatus('idle');
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
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 flex items-center justify-center z-[70] p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-[#2A1B6E] border border-white/20 w-full max-w-md rounded-3xl shadow-2xl overflow-hidden pointer-events-auto"
                        >
                            <div className="p-6 md:p-8 relative">
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                {!isSubmitted ? (
                                    <>
                                        <h2 className="text-3xl font-serif font-bold text-white mb-2">Join the Hub</h2>
                                        <p className="text-white/60 mb-8">
                                            Get exclusive access to premium real estate opportunities.
                                        </p>

                                        {submitStatus === 'error' && (
                                            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm text-center">
                                                Something went wrong. Please try again.
                                            </div>
                                        )}

                                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-white/80 mb-1">Full Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#F47920] transition-colors"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-white/80 mb-1">Email Address</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#F47920] transition-colors"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-white/80 mb-1">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#F47920] transition-colors"
                                                    placeholder="+234..."
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className={`w-full ${ACCENT_COLOR} hover:bg-[#d96a1a] text-white py-4 rounded-xl font-bold text-lg mt-4 transition-transform active:scale-95 shadow-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed`}
                                            >
                                                {isSubmitting ? (
                                                    <span className="flex items-center gap-2">
                                                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                                        Sending...
                                                    </span>
                                                ) : 'Secure My Access'}
                                            </button>
                                        </form>
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-12 text-center">
                                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                                            <CheckCircle2 className="w-12 h-12 text-green-500" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
                                        <p className="text-white/60">
                                            We've sent a confirmation email to your inbox.
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

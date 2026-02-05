import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ClipboardCheck, Bell, Lock, TrendingUp } from 'lucide-react';
import { ACCENT_COLOR, TEXT_ACCENT } from './constants';

interface ProcessModalProps {
    isOpen: boolean;
    onClose: () => void;
    onStartJourney: () => void;
}

const STEPS = [
    {
        icon: <ClipboardCheck className="w-8 h-8" />,
        title: "Application",
        desc: "Join our vetted community of smart investors by securing your access."
    },
    {
        icon: <Bell className="w-8 h-8" />,
        title: "Notification",
        desc: "Get exclusive alerts on new estates before the general public knows."
    },
    {
        icon: <Lock className="w-8 h-8" />,
        title: "Allocation",
        desc: "Lock in prime units at entry-level prices."
    },
    {
        icon: <TrendingUp className="w-8 h-8" />,
        title: "Growth",
        desc: "Watch your portfolio appreciate as development progresses."
    }
];

export const ProcessModal: React.FC<ProcessModalProps> = ({ isOpen, onClose, onStartJourney }) => {
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
                        className="fixed inset-0 bg-black/90 backdrop-blur-md z-[80]"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 flex items-center justify-center z-[90] p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 30 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="bg-[#1a1145] border border-white/10 w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col md:flex-row max-h-[90vh]"
                        >
                            {/* Left Side: Visual/Context */}
                            <div className="relative md:w-1/3 bg-[#0f0a2a] p-8 flex flex-col justify-between overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#F47920]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                                <div>
                                    <h3 className={`text-3xl font-serif font-bold text-white mb-4`}>
                                        The <span className={TEXT_ACCENT}>Process</span>
                                    </h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        We have streamlined real estate investing into a simple, proven system designed for maximum security and returns.
                                    </p>
                                </div>

                                <div className="mt-8 md:mt-0">
                                    <div className="w-12 h-1 bg-[#F47920] rounded-full mb-4" />
                                    <p className="text-white/40 text-xs uppercase tracking-widest font-bold">
                                        Esthington RESIH
                                    </p>
                                </div>
                            </div>

                            {/* Right Side: Steps */}
                            <div className="flex-1 p-8 md:p-10 overflow-y-auto relative">
                                <button
                                    onClick={onClose}
                                    className="absolute top-6 right-6 text-white/30 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                                    {STEPS.map((step, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 * index }}
                                            className="group"
                                        >
                                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F47920] mb-4 group-hover:bg-[#F47920] group-hover:text-white transition-colors duration-300">
                                                {step.icon}
                                            </div>
                                            <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                                            <p className="text-white/50 text-sm group-hover:text-white/80 transition-colors">
                                                {step.desc}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                                    <div className="text-center sm:text-left">
                                        <p className="text-white font-bold text-lg">Ready to begin?</p>
                                        <p className="text-white/50 text-sm">Join the hub today.</p>
                                    </div>
                                    <button
                                        onClick={() => {
                                            onClose();
                                            onStartJourney();
                                        }}
                                        className={`${ACCENT_COLOR} hover:bg-[#d96a1a] text-white px-8 py-4 rounded-xl font-bold transition-transform active:scale-95 shadow-lg flex items-center gap-2 group w-full sm:w-auto justify-center`}
                                    >
                                        Start Your Journey
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

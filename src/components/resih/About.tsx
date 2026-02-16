import React from 'react';
import { motion } from 'framer-motion';
import { ACCENT_COLOR } from './constants';

export const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden text-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/10 group">
                            <div className={`absolute -inset-4 ${ACCENT_COLOR} opacity-20 blur-2xl rounded-full`} />
                            <motion.img
                                src="/site-inspection.jpg"
                                alt="Esthington Team Site Inspection"
                                className="relative w-full h-[500px] object-cover"
                                initial={{ scale: 1 }}
                                animate={{
                                    scale: [1, 1.15, 1],
                                    x: [0, -20, 0],
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                    repeatType: "reverse"
                                }}
                            />
                            {/* Overlay gradient for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">What This Hub Is About</h2>
                        <div className="mb-8">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F47920] text-sm font-bold uppercase tracking-wider mb-4">
                                Powered by Esthington Group
                            </span>
                            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                                Real estate wealth is built at the point of entry. The Real Estate Smart Investors Hub was created to give serious investors early access to verified estates, structured guidance, and a trusted community—before the general market hears about them.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-12 w-1 bg-[#F47920] rounded-full"></div>
                            <p className="text-white/80 font-medium italic">
                                "Years of experience in land banking & estate development."
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6 pt-6">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="text-3xl font-bold text-[#F47920] mb-1">10k+</div>
                                <div className="text-sm opacity-60 uppercase tracking-tighter">Acres Managed</div>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="text-3xl font-bold text-[#F47920] mb-1">2.5k</div>
                                <div className="text-sm opacity-60 uppercase tracking-tighter">Smart Investors</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

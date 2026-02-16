import React from 'react';
import { motion } from 'framer-motion';
import { ACCENT_COLOR } from './constants';
import { ManagementTree } from './ManagementTree';

export const About = () => {
    const [isVideoOpen, setIsVideoOpen] = React.useState(false);

    return (
        <section id="about" className="py-24 relative overflow-hidden text-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <div
                            className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/10 group cursor-pointer"
                            onClick={() => setIsVideoOpen(true)}
                        >
                            <div className={`absolute -inset-4 ${ACCENT_COLOR} opacity-20 blur-2xl rounded-full`} />

                            {/* Loop Video Preview */}
                            <div className="relative w-full h-[500px]">
                                <video
                                    src="/primelux_apo.mp4"
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                                    </div>
                                </div>
                            </div>
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

            {/* Management Tree Section */}
            <div className="mt-20">
                <ManagementTree />
            </div>
            {/* Video Modal */}
            {isVideoOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/90 backdrop-blur-md">
                    <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-[#F47920] transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 18 18" /></svg>
                        </button>
                        <video
                            src="/primelux_apo.mp4"
                            className="w-full h-full object-contain"
                            controls
                            autoPlay
                        />
                    </div>
                    {/* Close on click outside */}
                    <div className="absolute inset-0 -z-10" onClick={() => setIsVideoOpen(false)} />
                </div>
            )}
        </section>
    );
};

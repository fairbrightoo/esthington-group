import React from 'react';
import { motion } from 'framer-motion';
import { ACCENT_COLOR, GLASS_BG } from './constants';

interface UrgencyProps {
    onJoinClick: () => void;
    onLearnMoreClick: () => void;
}

export const Urgency: React.FC<UrgencyProps> = ({ onJoinClick, onLearnMoreClick }) => {
    return (
        <section id="urgency" className="py-32 relative text-white">
            <div className="absolute inset-0 bg-white/5" />
            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`max-w-4xl mx-auto p-12 md:p-20 rounded-[4rem] ${GLASS_BG} shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-t-white/30`}
                >
                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Don’t buy last. Buy early. Buy smart.</h2>
                    <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-10">
                        In real estate, timing is everything. Those who buy first enjoy the biggest gains. Don’t wait until prices rise. Position yourself ahead of the market.
                    </p>
                    {/* <div className={`inline-block mb-12 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-[#F47920] font-bold text-2xl`}>
                        Smart Investors Don’t Guess. They Position.
                    </div> <br /> */}

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={onJoinClick}
                            className={`${ACCENT_COLOR} hover:bg-[#d96a1a] px-12 py-6 rounded-full text-xl font-bold transition-all hover:scale-105 shadow-[0_15px_40px_rgba(244,121,32,0.4)] text-white`}
                        >
                            Apply Now
                        </button>
                        <button
                            onClick={onLearnMoreClick}
                            className="px-12 py-6 rounded-full text-xl font-bold border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm text-white"
                        >
                            Learn More
                        </button>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

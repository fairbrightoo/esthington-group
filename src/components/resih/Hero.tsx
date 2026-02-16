import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ACCENT_COLOR, TEXT_ACCENT } from './constants';
import { CorporateNetwork } from './CorporateNetwork';
import { MarketStats } from './MarketStats';

interface HeroProps {
    onJoinClick: () => void;
    onLearnMoreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick, onLearnMoreClick }) => {
    return (
        <section className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden text-white">
            {/* Background Visual Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2A1B6E] via-[#2A1B6E]/80 to-transparent z-10" />
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
                    alt="Modern Architecture"
                    className="w-full h-full object-cover opacity-40"
                />
            </div>

            <div className="w-full max-w-[90%] xl:max-w-[1600px] mx-auto px-6 relative z-10 flex flex-col xl:flex-row items-center justify-center min-h-[calc(100vh-80px)] xl:min-h-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl xl:w-1/2 relative z-[60] pointer-events-none"
                >
                    <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 pointer-events-auto">
                        Invest Early. <br />
                        <span className={TEXT_ACCENT}>Buy Smart.</span> <br />
                        Grow Wealth Together.
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed font-light pointer-events-auto">
                        A private investor community that gets first access to pre-sale land opportunities, strategic guidance, and high-ROI real estate projects.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
                        <button
                            onClick={onJoinClick}
                            className={`${ACCENT_COLOR} hover:bg-[#d96a1a] px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-[0_10px_30px_rgba(244,121,32,0.3)] flex items-center justify-center gap-2 group text-white`}
                        >
                            Start Your Journey
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={onLearnMoreClick}
                            className="px-10 py-5 rounded-full text-lg font-bold border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm text-white"
                        >
                            Learn More
                        </button>
                    </div>
                </motion.div>

                {/* Hero Animation (Right Side) */}
                <div className="absolute inset-0 top-20 xl:top-0 xl:relative flex flex-col w-full xl:w-1/2 h-full xl:h-[600px] items-center justify-center z-10 xl:z-auto opacity-40 xl:opacity-100 pointer-events-auto">
                    <CorporateNetwork />
                    <MarketStats />
                </div>
            </div>
        </section>
    );
};

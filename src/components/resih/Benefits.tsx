import React from 'react';
import { motion } from 'framer-motion';
import { BENEFITS, ACCENT_COLOR, GLASS_BG } from './constants';

interface BenefitsProps {
    onJoinClick: () => void;
}

export const Benefits: React.FC<BenefitsProps> = ({ onJoinClick }) => {
    return (
        <section id="benefits" className="py-24 bg-black/20 text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">What You Enjoy as a Member</h2>
                    <div className={`h-1.5 w-24 ${ACCENT_COLOR} mx-auto rounded-full`} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BENEFITS.map((benefit, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className={`p-8 rounded-3xl ${GLASS_BG} transition-all group`}
                        >
                            <div className={`w-16 h-16 ${ACCENT_COLOR} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform text-white`}>
                                {benefit.icon}
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4">{benefit.title}</h3>
                            <p className="text-white/60 leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}

                    {/* CTA Card */}
                    <div className={`p-8 rounded-3xl bg-[#F47920] flex flex-col justify-center items-center text-center`}>
                        <h3 className="text-2xl font-serif font-bold mb-4">Ready to Start?</h3>
                        <p className="text-white/90 mb-8">Join the elite circle of smart investors today.</p>
                        <button
                            onClick={onJoinClick}
                            className="bg-white text-[#2A1B6E] px-8 py-3 rounded-full font-bold hover:bg-white/90 transition-colors shadow-xl"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

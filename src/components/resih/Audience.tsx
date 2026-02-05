import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { AUDIENCE } from './constants';

export const Audience = () => {
    return (
        <section id="audience" className="py-24 text-white">
            <div className="container mx-auto px-6">
                <div className="bg-gradient-to-br from-[#2A1B6E] to-[#1a1145] rounded-[3rem] p-10 md:p-20 border border-white/10 shadow-3xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#F47920]/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

                    <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Who This Hub Is For</h2>
                            <div className="space-y-6">
                                {AUDIENCE.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="mt-1">
                                            <CheckCircle2 className="w-6 h-6 text-[#F47920]" />
                                        </div>
                                        <span className="text-xl text-white/80 font-medium">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="grid grid-cols-2 gap-4">
                                <img
                                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000"
                                    className="rounded-2xl h-48 w-full object-cover"
                                    alt="Luxury Home"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
                                    className="rounded-2xl h-64 w-full object-cover mt-8"
                                    alt="Real Estate"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1600607687940-47a0f925901e?auto=format&fit=crop&q=80&w=1000"
                                    className="rounded-2xl h-64 w-full object-cover -mt-16"
                                    alt="Interior"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1000"
                                    className="rounded-2xl h-48 w-full object-cover mt-0"
                                    alt="Architecture"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

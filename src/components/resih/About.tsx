import React from 'react';
import { ACCENT_COLOR } from './constants';

export const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden text-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <div className={`absolute -inset-4 ${ACCENT_COLOR} opacity-20 blur-2xl rounded-full`} />
                            <img
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1073"
                                alt="Modern Office Luxury"
                                className="relative rounded-3xl shadow-2xl border border-white/10"
                            />
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">What This Hub Is About</h2>
                        <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8">
                            We don’t just sell land. We educate, guide, and position investors to enter the right estates at the right time—before prices rise.
                        </p>
                        <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8">
                            Members of the Real Estate Smart Investors Hub enjoy first-hand access to carefully selected estate opportunities and expert guidance on how to invest wisely for maximum returns.
                        </p>
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

import React from 'react';
import { motion } from 'framer-motion';
import { ManagementCard } from './ManagementCard';
import { CHAIRMAN, EXECUTIVES_TOP, EXECUTIVES_BOTTOM, TEXT_ACCENT } from './constants';

export const ManagementTree = () => {
    return (
        <div className="w-full py-20 relative">
            <div className="text-center mb-16">
                <h3 className="text-3xl font-serif font-bold text-white mb-2">Our <span className={TEXT_ACCENT}>Leadership</span></h3>
                <p className="text-white/60">The visionaries steering the Esthington Group.</p>
            </div>

            {/* Tree Container */}
            <div className="relative max-w-6xl mx-auto px-4 min-h-[800px] flex flex-col items-center justify-center">

                {/* SVG Connections Layer (Absolute) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }}>
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#F47920" stopOpacity="0" />
                            <stop offset="50%" stopColor="#F47920" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#F47920" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* Lines connecting Top Row to Center */}
                    {/* We'll use CSS to position the cards, so lines are tricky without exact coordinates. 
                        Instead, let's use a Grid layout and draw lines relative to cells. 
                        Simplified approach: Use specific layout divs and draw distinct lines.
                    */}
                    {/* Central Vertical Line (Top to Bottom through Center) */}
                    <line x1="50%" y1="15%" x2="50%" y2="85%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="5,5" />

                    {/* Horizontal Crossbar for Top Row */}
                    <line x1="20%" y1="28%" x2="80%" y2="28%" stroke="#F47920" strokeWidth="1" strokeOpacity="0.3" />

                    {/* Connecting Vertical Lines for Top Row */}
                    <line x1="20%" y1="15%" x2="20%" y2="28%" stroke="#F47920" strokeWidth="1" strokeOpacity="0.3" /> {/* Left Top */}
                    <line x1="50%" y1="15%" x2="50%" y2="40%" stroke="#F47920" strokeWidth="1" strokeOpacity="0.3" /> {/* Middle Top to Center */}
                    <line x1="80%" y1="15%" x2="80%" y2="28%" stroke="#F47920" strokeWidth="1" strokeOpacity="0.3" /> {/* Right Top */}


                    {/* Horizontal Crossbar for Bottom Row */}
                    <line x1="20%" y1="72%" x2="80%" y2="72%" stroke="#F47920" strokeWidth="1" strokeOpacity="0.3" />

                    {/* Connecting Vertical Lines for Bottom Row */}
                    <line x1="20%" y1="72%" x2="20%" y2="85%" stroke="#F47920" strokeWidth="1" strokeOpacity="0.3" /> {/* Left Bottom */}
                    <line x1="50%" y1="60%" x2="50%" y2="85%" stroke="#F47920" strokeWidth="1" strokeOpacity="0.3" /> {/* Center Bottom */}
                    <line x1="80%" y1="72%" x2="80%" y2="85%" stroke="#F47920" strokeWidth="1" strokeOpacity="0.3" /> {/* Right Bottom */}

                </svg>

                {/* Top Row - GMDs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full relative z-10 mb-12 md:mb-0">
                    {EXECUTIVES_TOP.map((exec, idx) => (
                        <div key={exec.id} className="flex justify-center transform md:translate-y-0">
                            <ManagementCard executive={exec} />
                        </div>
                    ))}
                </div>

                {/* Center Row - Chairman */}
                <div className="relative z-20 my-12 flex justify-center w-full">
                    <div className="relative">
                        {/* Connecting Lines for Mobile (Vertical stack) */}
                        <div className="absolute -top-12 left-1/2 w-px h-12 bg-[#F47920]/40 md:hidden" />
                        <div className="absolute -bottom-12 left-1/2 w-px h-12 bg-[#F47920]/40 md:hidden" />

                        <ManagementCard executive={CHAIRMAN} isCenter />
                    </div>
                </div>

                {/* Bottom Row - GMDs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full relative z-10 mt-12 md:mt-0">
                    {EXECUTIVES_BOTTOM.map((exec, idx) => (
                        <div key={exec.id} className="flex justify-center">
                            <ManagementCard executive={exec} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

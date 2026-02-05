import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, BarChart3 } from 'lucide-react';

export const MarketStats = () => {
    return (
        <div className="flex flex-row gap-2 md:gap-4 lg:gap-6 mt-8 md:mt-0 md:absolute md:bottom-8 md:left-1/2 md:-translate-x-1/2 z-30 scale-90 md:scale-100 origin-center">
            {/* ROI Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-2xl flex items-center gap-2 md:gap-4 min-w-[140px] md:min-w-[180px]"
            >
                <div className="p-2 md:p-3 bg-[#F47920]/20 rounded-lg md:rounded-xl">
                    <TrendingUp className="w-4 h-4 md:w-6 md:h-6 text-[#F47920]" />
                </div>
                <div>
                    <div className="text-white/60 text-[10px] md:text-xs uppercase tracking-wider font-medium mb-0.5 md:mb-1">Projected ROI</div>
                    <div className="text-lg md:text-2xl font-bold text-white flex items-center gap-1 md:gap-2">
                        +145.2%
                        <span className="text-[10px] md:text-xs bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded-full font-medium">YTD</span>
                    </div>
                </div>
            </motion.div>

            {/* Status Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-2xl flex items-center gap-2 md:gap-4 min-w-[140px] md:min-w-[180px]"
            >
                <div className="p-2 md:p-3 bg-green-500/20 rounded-lg md:rounded-xl relative">
                    <ShieldCheck className="w-4 h-4 md:w-6 md:h-6 text-green-400 relative z-10" />
                    <div className="absolute inset-0 bg-green-500/20 blur-lg rounded-full animate-pulse" />
                </div>
                <div>
                    <div className="text-white/60 text-[10px] md:text-xs uppercase tracking-wider font-medium mb-0.5 md:mb-1">Status</div>
                    <div className="text-sm md:text-xl font-bold text-white">Verified</div>
                    <div className="text-[8px] md:text-[10px] text-white/50">Vetted Opportunity</div>
                </div>
            </motion.div>
        </div>
    );
};

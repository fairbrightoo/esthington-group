import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, BarChart3 } from 'lucide-react';

export const MarketStats = () => {
    return (
        <div className="flex flex-row gap-4 md:gap-6 mt-8 md:mt-0 md:absolute md:bottom-8 md:left-1/2 md:-translate-x-1/2 z-30">
            {/* ROI Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4 min-w-[180px]"
            >
                <div className="p-3 bg-[#F47920]/20 rounded-xl">
                    <TrendingUp className="w-6 h-6 text-[#F47920]" />
                </div>
                <div>
                    <div className="text-white/60 text-xs uppercase tracking-wider font-medium mb-1">Projected ROI</div>
                    <div className="text-2xl font-bold text-white flex items-center gap-2">
                        +145.2%
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full font-medium">YTD</span>
                    </div>
                </div>
            </motion.div>

            {/* Status Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4 min-w-[180px]"
            >
                <div className="p-3 bg-green-500/20 rounded-xl relative">
                    <ShieldCheck className="w-6 h-6 text-green-400 relative z-10" />
                    <div className="absolute inset-0 bg-green-500/20 blur-lg rounded-full animate-pulse" />
                </div>
                <div>
                    <div className="text-white/60 text-xs uppercase tracking-wider font-medium mb-1">Status</div>
                    <div className="text-xl font-bold text-white">Verified</div>
                    <div className="text-[10px] text-white/50">Vetted Opportunity</div>
                </div>
            </motion.div>
        </div>
    );
};

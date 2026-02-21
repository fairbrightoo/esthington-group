import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Linkedin, User } from 'lucide-react';
import { Executive } from './constants';
import { ACCENT_COLOR, GLASS_BG } from './constants';

interface ManagementCardProps {
    executive: Executive;
    isCenter?: boolean;
}

export const ManagementCard: React.FC<ManagementCardProps> = ({ executive, isCenter = false }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    // Format phone number for WhatsApp URL (remove leading 0 and add 234)
    const formatWhatsAppNumber = (phone: string | undefined) => {
        if (!phone) return '#';
        // Remove spaces, hyphens, plus signs
        const cleaned = phone.replace(/[\s\-+]/g, '');
        // If it starts with 0, replace with 234
        if (cleaned.startsWith('0')) {
            return `https://wa.me/234${cleaned.substring(1)}`;
        }
        return `https://wa.me/${cleaned}`;
    };

    return (
        <div
            className={`relative perspective-1000 cursor-pointer group ${isCenter ? 'w-64 h-80 z-20' : 'w-56 h-72 z-10'}`}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, animationDirection: "normal" }}
                className="w-full h-full relative preserve-3d shadow-xl rounded-2xl"
            >
                {/* FRONT */}
                <div className={`absolute inset-0 backface-hidden ${GLASS_BG} rounded-2xl overflow-hidden border border-white/10 flex flex-col`}>
                    <div className="flex-grow relative overflow-hidden bg-black/20">
                        {/* Placeholder or Actual Image */}
                        {executive.image ? (
                            <img src={executive.image} alt={executive.name} className="w-full h-full object-cover object-top" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/5 to-white/10">
                                <User className="w-20 h-20 text-white/20" />
                            </div>
                        )}

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a103f] via-transparent to-transparent opacity-80" />
                    </div>

                    <div className={`p-4 text-center relative bg-[#1a103f] ${isCenter ? 'pt-6' : 'pt-4'}`}>
                        {isCenter && (
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#F47920]/20 rounded-full blur-xl pointer-events-none" />
                        )}
                        <h3 className={`font-bold text-white mb-1 leading-tight ${isCenter ? 'text-xl' : 'text-lg'}`}>
                            {executive.name}
                        </h3>
                        <p className={`text-[#F47920] font-medium mb-1 ${isCenter ? 'text-sm' : 'text-xs'}`}>
                            {executive.role}
                        </p>
                        <p className="text-white/50 text-[10px] uppercase tracking-wider">
                            {executive.company}
                        </p>
                    </div>
                </div>

                {/* BACK */}
                <div
                    className={`absolute inset-0 backface-hidden bg-[#0f0a2a] rounded-2xl border border-[#F47920] p-6 flex flex-col items-center justify-center text-center rotate-y-180 shadow-[0_0_30px_rgba(244,121,32,0.15)]`}
                >
                    <h3 className="font-bold text-white text-lg mb-2">{executive.name}</h3>
                    <div className="w-8 h-1 bg-[#F47920] rounded-full mb-6" />

                    <div className="space-y-4 w-full">
                        <a href={formatWhatsAppNumber(executive.contact?.phone)} className="flex items-center gap-3 text-white/80 hover:text-[#F47920] transition-colors p-2 rounded-lg hover:bg-white/5">
                            <MessageCircle className="w-4 h-4 text-[#F47920]" />
                            <span className="text-sm">{executive.contact?.phone || '+234 ...'}</span>
                        </a>
                        <a href={`mailto:${executive.contact?.email || '#'}`} className="flex items-center gap-3 text-white/80 hover:text-[#F47920] transition-colors p-2 rounded-lg hover:bg-white/5">
                            <Mail className="w-4 h-4 text-[#F47920]" />
                            <span className="text-sm truncate">{executive.contact?.email || 'email@esthington.com'}</span>
                        </a>
                        {executive.contact?.linkedin && (
                            <a href={executive.contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/80 hover:text-[#F47920] transition-colors p-2 rounded-lg hover:bg-white/5">
                                <Linkedin className="w-4 h-4 text-[#F47920]" />
                                <span className="text-sm">LinkedIn Profile</span>
                            </a>
                        )}
                    </div>

                    <div className="mt-auto pt-4 text-[10px] text-white/40">
                        Click to flip back
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

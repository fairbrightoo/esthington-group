import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { NAV_LINKS, ACCENT_COLOR } from './constants';

export const Footer = () => {
    return (
        <footer className="bg-black/40 py-20 border-t border-white/10 text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="h-16 w-16 rounded-full overflow-hidden bg-white flex items-center justify-center">
                                <img src="/esthington-logo-svg.svg" alt="Esthington Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-2xl font-bold font-serif">Esthington Group</span>
                        </div>
                        <p className="text-white/50 max-w-sm mb-6 italic">
                            ...Integrity and excellence in every transaction. Positioning you for the future of real estate.
                        </p>
                        <div className="text-white/40 text-sm">RC: 7290746</div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Connect With Us</h4>
                        <div className="space-y-4">
                            <a href="tel:0701ESTHINGTONGROUP" className="flex items-center gap-3 text-white/60 hover:text-[#F47920] transition-colors">
                                <Phone className="w-5 h-5" />
                                <span>0701ESTHINGTONGROUP</span>
                            </a>
                            <a href="https://wa.me/0701ESTHINGTONGROUP" className="flex items-center gap-3 text-white/60 hover:text-[#F47920] transition-colors">
                                <MessageSquare className="w-5 h-5" />
                                <span>WhatsApp Chat</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <div className="space-y-4">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="block text-white/60 hover:text-[#F47920] transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-center text-white/30 text-sm">
                    © {new Date().getFullYear()} Powered by Esthington Group. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

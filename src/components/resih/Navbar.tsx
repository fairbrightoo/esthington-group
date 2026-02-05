import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, ACCENT_COLOR } from './constants';

interface NavbarProps {
    onJoinClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#2A1B6E]/90 backdrop-blur-lg py-4 shadow-2xl' : 'bg-transparent py-6'
                }`}
        >
            <div className="w-full max-w-[95%] xl:max-w-[1800px] mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                {/* Logo */}
                <a href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
                    <div className="h-14 w-14 md:h-20 md:w-20 rounded-full overflow-hidden bg-white flex items-center justify-center">
                        <img src="/esthington-logo-svg.svg" alt="Esthington Logo" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xl md:text-2xl font-bold tracking-tight font-serif italic text-white">
                        Real Estate Smart Investors Hub
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8 items-center">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-white hover:text-[#F47920] transition-colors uppercase tracking-widest"
                        >
                            {link.label}
                        </a>
                    ))}
                    <button
                        onClick={onJoinClick}
                        className={`${ACCENT_COLOR} hover:bg-[#d96a1a] text-white px-6 py-2 rounded-full font-bold transition-transform active:scale-95 shadow-lg`}
                    >
                        Join Now
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white hover:text-[#F47920] transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#2A1B6E] border-t border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-lg font-medium text-white"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <button
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    onJoinClick();
                                }}
                                className={`${ACCENT_COLOR} text-white w-full py-3 rounded-lg font-bold`}
                            >
                                Join the Hub Today
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

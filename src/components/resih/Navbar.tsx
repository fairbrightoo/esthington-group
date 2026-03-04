import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
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
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#2A1B6E]/95 backdrop-blur-lg shadow-2xl' : 'bg-gradient-to-b from-black/60 to-transparent'}`}>

            {/* Top Contact Bar */}
            <div className="w-full bg-black/20 border-b border-white/5 backdrop-blur-sm">
                <div className="w-full max-w-[90%] xl:max-w-[1600px] mx-auto px-6 py-2 flex justify-center md:justify-end items-center text-[10px] md:text-xs text-white/80">
                    <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#F47920]" />
                        <span className="uppercase tracking-wider font-bold">Customer Care:</span>
                        <a href="tel:09135637350" className="hover:text-[#F47920] transition-colors font-bold tracking-wider">09135637350</a>
                        <span className="text-[#F47920]/50">•</span>
                        <a href="tel:07045763306" className="hover:text-[#F47920] transition-colors font-bold tracking-wider">07045763306</a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className={`w-full max-w-[90%] xl:max-w-[1600px] mx-auto px-6 flex justify-between items-center transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
                    <div className="h-12 w-12 md:h-16 md:w-16 rounded-full overflow-hidden bg-white flex items-center justify-center shadow-lg">
                        <img src="/esthington-logo-svg.svg" alt="Esthington Logo" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-lg md:text-xl font-bold tracking-tight font-serif italic text-white drop-shadow-md">
                        Real Estate Smart Investors Hub
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8 items-center">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            to={link.href}
                            className="text-sm font-medium text-white hover:text-[#F47920] transition-colors uppercase tracking-widest text-shadow-sm"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <button
                        onClick={onJoinClick}
                        className={`${ACCENT_COLOR} hover:bg-[#d96a1a] text-white px-6 py-2 rounded-full font-bold transition-transform active:scale-95 shadow-lg flex items-center gap-2`}
                    >
                        Join Now
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white hover:text-[#F47920] transition-colors p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

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
                                <Link
                                    key={link.label}
                                    to={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-lg font-medium text-white"
                                >
                                    {link.label}
                                </Link>
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
        </header>
    );
};

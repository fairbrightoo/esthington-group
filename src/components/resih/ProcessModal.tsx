import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    X, ArrowRight, Building2, ChevronRight, Layout, Compass, HelpCircle, MessageCircle, CheckCircle2
} from 'lucide-react';
import { ACCENT_COLOR, TEXT_ACCENT } from './constants';

interface ProcessModalProps {
    isOpen: boolean;
    onClose: () => void;
    onStartJourney: () => void;
}

// --- Data Structures ---
const SECTIONS = [
    { id: 'hub', label: 'The Hub', icon: <Compass className="w-5 h-5" /> },
    { id: 'steps', label: 'How It Works', icon: <Layout className="w-5 h-5" /> },
    { id: 'projects', label: 'Our Projects', icon: <Building2 className="w-5 h-5" /> },
    { id: 'faq', label: 'FAQs', icon: <HelpCircle className="w-5 h-5" /> },
];

const ESTATES = [
    {
        id: 'primelux',
        name: "Primelux Estate",
        location: "Apo",
        images: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600596542815-2495db98dada?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop"
        ],
        desc: "Premium luxury living in the heart of Apo."
    },
    {
        id: 'sunview',
        name: "Sunview City",
        location: "Kuje",
        images: [
            "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1600&auto=format&fit=crop"
        ],
        desc: "Eco-friendly urban development."
    },
    {
        id: 'peaceland',
        name: "Peaceland Estate",
        location: "Kurudu",
        images: [
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1576941089067-2de3c901e126?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop"
        ],
        desc: "Serene environment for family growth."
    },
    {
        id: 'hillcrest',
        name: "Hillcrest City",
        location: "Jikwoyi",
        images: [
            "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop"
        ],
        desc: "Elevated living with panoramic views."
    },
    {
        id: 'more',
        name: "More Estates",
        location: "Newly Launched",
        images: [],
        desc: "Future-ready investment opportunities."
    }
];



const EstateCarousel = ({ activeEstate }: { activeEstate: typeof ESTATES[0] }) => {
    const [index, setIndex] = useState(0);

    // Reset index when estate changes
    React.useEffect(() => {
        setIndex(0);
    }, [activeEstate.id]);

    // Auto-slide logic (Optional: Remove this useEffect if you want manual only)
    React.useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % 4); // Assuming 4 images per estate
        }, 5000);
        return () => clearInterval(timer);
    }, [activeEstate.id]);

    // Mock images if your data doesn't have 4 real URLs yet
    const displayImages = activeEstate.images.length >= 4
        ? activeEstate.images.slice(0, 4)
        : [...activeEstate.images, ...Array(4 - activeEstate.images.length).fill("/api/placeholder/800/600")];

    return (
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/40 border border-white/5">
            <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                    key={`${activeEstate.id}-${index}`}
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "-20%", opacity: 0 }} // Parallax exit effect
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // IOS-like spring
                    className="absolute inset-0 w-full h-full"
                >
                    <img
                        src={displayImages[index]}
                        alt={`${activeEstate.name} view ${index + 1}`}
                        className="w-full h-full object-cover opacity-80"
                    />

                    {/* Dark Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a2a] via-black/20 to-transparent" />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <span className="px-3 py-1 rounded bg-[#F47920] text-white text-[10px] font-bold uppercase tracking-wider shadow-lg">
                                    Fast Selling
                                </span>
                                <span className="px-3 py-1 rounded bg-white/10 backdrop-blur-md text-white/80 text-[10px] font-bold uppercase tracking-wider border border-white/10">
                                    {index + 1} of 4
                                </span>
                            </div>

                            <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
                                {activeEstate.name}
                            </h3>

                            <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-lg backdrop-blur-sm">
                                {/* If you have specific descriptions per image, use them here. 
                                    Otherwise, using the main desc + a dynamic label */}
                                {activeEstate.desc}
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Progress Bar Indicators */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex gap-2 z-20">
                {displayImages.map((_, i) => (
                    <div key={i} className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                        {i === index && (
                            <motion.div
                                layoutId="progress"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 5, ease: "linear" }}
                                className="h-full bg-[#F47920]"
                            />
                        )}
                        {i < index && <div className="h-full w-full bg-[#F47920]/50" />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export const ProcessModal: React.FC<ProcessModalProps> = ({ isOpen, onClose, onStartJourney }) => {
    const [activeSection, setActiveSection] = useState('hub');
    const [activeEstate, setActiveEstate] = useState(ESTATES[0]);

    const CTA_BUTTON = (
        <button
            onClick={() => { onClose(); onStartJourney(); }}
            className={`${ACCENT_COLOR} hover:bg-[#d96a1a] text-white px-8 py-4 rounded-xl font-bold transition-all active:scale-95 shadow-lg flex items-center gap-2 group mt-8`}
        >
            Start Your Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/90 backdrop-blur-md z-[80]"
                    />

                    <div className="fixed inset-0 flex items-center justify-center z-[90] p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 30 }}
                            className="bg-[#1a1145] border border-white/10 w-full max-w-6xl h-[90vh] md:h-[85vh] rounded-3xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col md:flex-row relative"
                        >
                            {/* --- Left Sidebar Navigation (Mobile Bottom Bar / Desktop Sidebar) --- */}
                            <div className="order-2 md:order-1 w-full md:w-64 bg-[#0f0a2a] md:border-r border-t md:border-t-0 border-white/5 p-4 md:p-6 flex flex-row md:flex-col justify-between md:justify-start gap-2 shrink-0 z-20">
                                <div className="mb-12 hidden md:block">
                                    <h3 className="text-white font-bold text-xl tracking-tight">Esthington <span className={TEXT_ACCENT}>RESIH</span></h3>
                                </div>

                                <nav className="flex flex-row md:flex-col gap-2 w-full justify-around md:justify-start">
                                    {SECTIONS.map((s) => (
                                        <button
                                            key={s.id}
                                            onClick={() => setActiveSection(s.id)}
                                            className={`flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-4 px-2 md:px-4 py-2 md:py-3 rounded-xl transition-all ${activeSection === s.id ? 'bg-[#F47920] text-white shadow-lg' : 'text-white/40 hover:bg-white/5 hover:text-white'
                                                }`}
                                        >
                                            {s.icon}
                                            <span className="font-bold text-[10px] md:text-base">{s.label}</span>
                                        </button>
                                    ))}
                                </nav>

                                <button onClick={onClose} className="hidden md:flex items-center gap-4 px-4 py-3 text-white/30 hover:text-red-400 transition-colors mt-auto">
                                    <X className="w-5 h-5" />
                                    <span className="font-bold hidden md:block">Close</span>
                                </button>
                            </div>

                            {/* --- Main Content Area --- */}
                            <div className="order-1 md:order-2 flex-1 overflow-y-auto bg-gradient-to-br from-[#1a1145] to-[#0f0a2a] relative p-6 md:p-12 pb-20 md:pb-12">
                                {/* Mobile Header with Close Button */}
                                <div className="md:hidden flex justify-between items-center mb-6">
                                    <h3 className="text-white font-bold text-xl tracking-tight">Esthington <span className={TEXT_ACCENT}>RESIH</span></h3>
                                    <button onClick={onClose} className="p-2 bg-white/10 rounded-full text-white/70 hover:bg-white/20">
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                                <AnimatePresence mode="wait">
                                    {/* SECTION: THE PLAN */}
                                    {/* SECTION: THE HUB (Formerly The Plan) */}
                                    {activeSection === 'hub' && (
                                        <motion.div
                                            key="hub"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-8"
                                        >
                                            <div>
                                                <span className="text-[#F47920] font-bold tracking-widest uppercase text-xs">
                                                    Overview
                                                </span>
                                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-2 mb-4">
                                                    What is the <span className={TEXT_ACCENT}>Hub?</span>
                                                </h2>
                                                <p className="text-white/60 text-lg leading-relaxed max-w-3xl">
                                                    The Real Estate Smart Investors Hub is a private ecosystem designed for individuals who want to build wealth through real estate without the usual hassle, uncertainty, or noise.
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {[
                                                    { title: "Private Investor Network", desc: "Join a community of like-minded professionals focusing on wealth creation." },
                                                    { title: "Early Access to Estates", desc: "Get in before the general public. Secure the best plots at the lowest prices." },
                                                    { title: "Structured Information", desc: "No more guesswork. We provide clear, data-backed analysis for every project." },
                                                    { title: "No Pressure Selling", desc: "We are advisors, not aggressive salespeople. You invest when it makes sense for you." }
                                                ].map((item, i) => (
                                                    <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                                                        <div className="w-10 h-10 rounded-full bg-[#F47920]/20 flex items-center justify-center mb-4 text-[#F47920]">
                                                            <CheckCircle2 className="w-6 h-6" />
                                                        </div>
                                                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                                        <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="pt-4">
                                                <button
                                                    onClick={() => { onClose(); onStartJourney(); }}
                                                    className={`${ACCENT_COLOR} hover:bg-[#d96a1a] text-white px-8 py-4 rounded-xl font-bold transition-all active:scale-95 shadow-lg flex items-center gap-2 group`}
                                                >
                                                    Apply to Join
                                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* SECTION: HOW IT WORKS (Formerly The Process) */}
                                    {activeSection === 'steps' && (
                                        <motion.div
                                            key="steps"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-10"
                                        >
                                            <div>
                                                <span className="text-[#F47920] font-bold tracking-widest uppercase text-xs">
                                                    Simple Steps
                                                </span>
                                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-2 mb-4">
                                                    How It <span className={TEXT_ACCENT}>Works</span>
                                                </h2>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                                {[
                                                    { step: "01", title: "Join the Hub", desc: "Apply and get verified to access the circle." },
                                                    { step: "02", title: "Get Early Alerts", desc: "Receive pre-sale pricing & priority offers before the public." },
                                                    { step: "03", title: "Invest & Grow", desc: "Secure your land, get guided support, and watch your wealth compound." }
                                                ].map((item, i) => (
                                                    <div key={i} className="relative p-8 rounded-3xl bg-white/5 border border-white/10 overflow-hidden group hover:bg-white/10 transition-colors">
                                                        <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-black font-serif text-white group-hover:opacity-20 transition-opacity">
                                                            {item.step}
                                                        </div>
                                                        <div className="w-12 h-12 rounded-full bg-[#F47920] flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg">
                                                            {item.step}
                                                        </div>
                                                        <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                                                        <p className="text-white/60 leading-relaxed">
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* SECTION: FAQS */}
                                    {activeSection === 'faq' && (
                                        <motion.div
                                            key="faq"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-8"
                                        >
                                            <div>
                                                <span className="text-[#F47920] font-bold tracking-widest uppercase text-xs">
                                                    Common Questions
                                                </span>
                                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-2 mb-4">
                                                    Frequently <span className={TEXT_ACCENT}>Asked</span>
                                                </h2>
                                            </div>

                                            <div className="space-y-4">
                                                {[
                                                    { q: "Is this free to join?", a: "Yes, joining the Hub is currently free for qualified investors." },
                                                    { q: "Is there any obligation to invest?", a: "None at all. You invest only when you see an opportunity that fits your goals." },
                                                    { q: "How early do members get information?", a: "Members typically get access 2-4 weeks before the general public, ensuring the best entry price." },
                                                    { q: "Are the estates verified?", a: "Absolutely. Every project undergoes rigorous legal due diligence before it is presented to the Hub." },
                                                    { q: "Can diaspora investors participate?", a: "Yes. A significant portion of our members are investing from the diaspora. We provide full digital documentation and virtual inspections." }
                                                ].map((faq, i) => (
                                                    <details key={i} className="group bg-white/5 rounded-xl border border-white/5 open:bg-white/10 transition-colors">
                                                        <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                                            <h4 className="text-lg font-bold text-white pr-4">{faq.q}</h4>
                                                            <span className="text-white/50 group-open:rotate-180 transition-transform">
                                                                <ChevronRight className="w-5 h-5" />
                                                            </span>
                                                        </summary>
                                                        <div className="px-6 pb-6 pt-0 text-white/70 leading-relaxed border-t border-white/5 mt-2">
                                                            <div className="pt-4">{faq.a}</div>
                                                        </div>
                                                    </details>
                                                ))}
                                            </div>

                                            {/* MINI FORM: NOTIFY ME */}
                                            <div className="mt-12 p-8 rounded-3xl bg-[#F47920]/10 border border-[#F47920]/30 text-center">
                                                <h3 className="text-xl font-bold text-white mb-2">Not Ready to Apply Yet?</h3>
                                                <p className="text-white/60 text-sm mb-6">Get notified when new opportunities come up.</p>

                                                <form className="max-w-md mx-auto flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); alert("You have been added to the notification list."); }}>
                                                    <input
                                                        type="text"
                                                        placeholder="Your Name"
                                                        className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#F47920]"
                                                    />
                                                    <input
                                                        type="tel"
                                                        placeholder="WhatsApp Number"
                                                        className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#F47920]"
                                                    />
                                                    <button type="submit" className="bg-[#F47920] hover:bg-[#d96a1a] text-white px-6 py-3 rounded-xl font-bold transition-colors">
                                                        Get Updates
                                                    </button>
                                                </form>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* SECTION: THE PROJECTS */}
                                    {activeSection === 'projects' && (
                                        <motion.div
                                            key="projects"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="min-h-full flex flex-col"
                                        >
                                            {/* HEADER: Trust You Can Touch */}
                                            <div className="mb-6 shrink-0">
                                                <span className="text-[#F47920] font-bold tracking-widest uppercase text-xs">
                                                    Our Track Record
                                                </span>
                                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-2 mb-3">
                                                    Trust You Can <span className={TEXT_ACCENT}>Touch</span>
                                                </h2>
                                                <p className="text-white/60 text-sm md:text-base max-w-2xl leading-relaxed">
                                                    We believe credibility isn't claimed; it's constructed. Our delivered and developing
                                                    estates stand as concrete proof of our integrity.
                                                </p>
                                            </div>

                                            <div className="flex-1 flex flex-col md:flex-row gap-6 md:gap-8">
                                                {/* LEFT COLUMN: Tabs + CTA */}
                                                <div className="w-full md:w-64 flex flex-col gap-4 shrink-0">
                                                    {/* Scrollable Tabs List - height limited on mobile to prevent taking full screen */}
                                                    <div className="max-h-48 md:max-h-none md:flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-2">
                                                        {ESTATES.map((estate) => (
                                                            <button
                                                                key={estate.id}
                                                                onClick={() => {
                                                                    setActiveEstate(estate);
                                                                    // Reset carousel index would go here if you extract state
                                                                }}
                                                                className={`w-full text-left p-4 rounded-xl border transition-all group relative overflow-hidden ${activeEstate.id === estate.id
                                                                    ? 'bg-white/10 border-[#F47920] shadow-[0_0_20px_-5px_rgba(244,121,32,0.3)]'
                                                                    : 'border-white/5 bg-transparent hover:bg-white/5 hover:border-white/20'
                                                                    }`}
                                                            >
                                                                <div className="relative z-10 flex justify-between items-start">
                                                                    <div>
                                                                        <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${activeEstate.id === estate.id ? 'text-[#F47920]' : 'text-white/40'
                                                                            }`}>
                                                                            {estate.location}
                                                                        </p>
                                                                        <p className={`font-bold ${activeEstate.id === estate.id ? 'text-white' : 'text-white/70 group-hover:text-white'
                                                                            }`}>
                                                                            {estate.name}
                                                                        </p>
                                                                    </div>
                                                                    {activeEstate.id === estate.id && (
                                                                        <motion.div layoutId="activeTabIndicator" className="text-[#F47920]">
                                                                            <ChevronRight className="w-5 h-5" />
                                                                        </motion.div>
                                                                    )}
                                                                </div>
                                                            </button>
                                                        ))}
                                                    </div>

                                                    {/* NEW LOCATION: Start Journey CTA - Desktop Only (repositioned for mobile below) */}
                                                    <div className="pt-2 hidden md:block">
                                                        <button
                                                            onClick={() => { onClose(); onStartJourney(); }}
                                                            className={`${ACCENT_COLOR} hover:bg-[#d96a1a] text-white px-6 py-4 rounded-xl font-bold transition-all active:scale-95 shadow-lg flex items-center justify-center gap-2 group w-full`}
                                                        >
                                                            Start Your Journey
                                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* RIGHT COLUMN: Carousel Slider */}
                                                <div className="w-full h-64 md:h-auto md:flex-1 bg-[#130d35] rounded-3xl p-1 border border-white/10 relative overflow-hidden group shrink-0">
                                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

                                                    <div className="h-full w-full p-2 md:p-4 flex flex-col relative z-10">
                                                        {activeEstate.id === 'more' ? (
                                                            /* "More Estates" Grid View (Unchanged) */
                                                            <div className="grid grid-cols-2 gap-4 h-full overflow-y-auto pr-2">
                                                                {[
                                                                    { name: "Royalux Estate", desc: "Apo", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" },
                                                                    { name: "Champions City", desc: "Kuje", img: "https://images.unsplash.com/photo-1480074568708-e7b720bb6fce?q=80&w=800&auto=format&fit=crop" },
                                                                    { name: "Meridian City", desc: "Pyakasa", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" },
                                                                    { name: "Leisure View", desc: "Lugbe", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop" }
                                                                ].map((item, i) => (
                                                                    <div key={i} className="bg-white/5 rounded-xl border border-white/5 overflow-hidden hover:border-[#F47920]/50 transition-colors cursor-pointer flex flex-col group relative h-48">
                                                                        <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                                                            <h5 className="text-white font-bold text-sm mb-1">{item.name}</h5>
                                                                            <p className="text-white/60 text-[10px] uppercase tracking-wider">{item.desc}</p>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            /* SLIDER CAROUSEL */
                                                            <EstateCarousel activeEstate={activeEstate} />
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Mobile Only CTA */}
                                                <div className="pt-2 md:hidden">
                                                    <button
                                                        onClick={() => { onClose(); onStartJourney(); }}
                                                        className={`${ACCENT_COLOR} hover:bg-[#d96a1a] text-white px-6 py-4 rounded-xl font-bold transition-all active:scale-95 shadow-lg flex items-center justify-center gap-2 group w-full`}
                                                    >
                                                        Start Your Journey
                                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}


                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};
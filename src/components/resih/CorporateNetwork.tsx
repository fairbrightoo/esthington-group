import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Phone, MapPin } from 'lucide-react';

gsap.registerPlugin(useGSAP);

interface Company {
    id: string;
    name: string;
    logo: string;
    address: string;
    phone: string;
    description: string;
    logoScale?: number;
}

const COMPANIES: Company[] = [
    {
        id: 'dk',
        name: 'Double King',
        logo: '/double-king.webp',
        address: 'Wuse 2, Abuja',
        phone: '+234 800 222 3333',
        description: 'Real Estate Development'
    },
    {
        id: 'neft',
        name: 'NEFT',
        logo: '/neft.svg',
        address: 'Maitama, Abuja',
        phone: '+234 800 444 5555',
        description: 'Energy & Power'
    },
    {
        id: 'champs',
        name: 'Champions',
        logo: '/champions-logo.svg',
        address: 'Gwarinpa, Abuja',
        phone: '+234 800 666 7777',
        description: 'Sports & Recreation',
        logoScale: 1.4
    },
    {
        id: 'top',
        name: 'Top Rank',
        logo: '/top-rank.webp',
        address: 'Central Business District',
        phone: '+234 800 888 9999',
        description: 'Hospitality',
        logoScale: 1.3
    },
    {
        id: 'links',
        name: 'Esthington Links',
        logo: '/esthington-links.webp',
        address: 'Asokoro, Abuja',
        phone: '+234 800 000 1111',
        description: 'Logistics & Supply'
    },
    {
        id: 'grace',
        name: 'Double Grace',
        logo: '/Double-Grace.webp',
        address: 'Jahi, Abuja',
        phone: '+234 800 555 0000',
        description: 'Foundation & Charity'
    }
];

const MAIN_COMPANY: Company = {
    id: 'main',
    name: 'Esthington Group',
    logo: '/Esthington-Group.webp',
    address: 'Suit B4, HCR Plaza, Jabi, Abuja',
    phone: '+234 800 123 4567',
    description: 'The Parent Company'
};

const FlipCard = ({ company, className }: { company: Company; className?: string }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className={`relative w-24 h-24 md:w-32 md:h-32 perspective-1000 group cursor-pointer ${className}`}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className={`w-full h-full relative preserve-3d transition-transform duration-700 shadow-2xl ${isFlipped ? 'rotate-y-180' : ''}`}>
                {/* FRONT */}
                <div className="absolute inset-0 backface-hidden bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex flex-col items-center justify-center p-4 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:border-[#F47920] transition-colors">
                    <img
                        src={company.logo}
                        alt={company.name}
                        className="w-full h-full object-contain drop-shadow-md"
                        style={{ transform: `scale(${company.logoScale || 1})` }}
                    />
                </div>

                {/* BACK */}
                <div
                    className="absolute inset-0 backface-hidden bg-[#0f0a2a] rounded-full border border-[#F47920] flex flex-col items-center justify-center p-3 text-center shadow-xl rotate-y-180 overflow-hidden"
                >
                    <h4 className="text-[#F47920] font-bold text-[9px] md:text-[10px] mb-1 leading-tight">{company.name}</h4>
                    <div className="space-y-1">
                        <p className="text-[7px] md:text-[8px] text-white/70 flex items-center justify-center gap-1 leading-tight">
                            <MapPin className="w-2 h-2 flex-shrink-0" /> <span className="truncate max-w-[80px]">{company.address}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const CorporateNetwork = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const orbitRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [resizeKey, setResizeKey] = useState(0);

    // Re-run animation on resize
    React.useEffect(() => {
        const handleResize = () => {
            setResizeKey(prev => prev + 1);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useGSAP(() => {
        if (!containerRef.current) return;

        // Responsive Radii matching SVG (rx="40%", ry="20%")
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;

        const radiusX = width * 0.4;
        const radiusY = height * 0.2;

        const centerX = containerRef.current.clientWidth / 2;
        const centerY = containerRef.current.clientHeight / 2;

        COMPANIES.forEach((_, index) => {
            const el = orbitRefs.current[index];
            if (!el) return;

            // 1. Orbital Motion
            // Create a custom object to hold the angle value so we can tween it using GSAP
            const startAngle = (index / COMPANIES.length) * 360; // Spread them evenly
            const val = { angle: startAngle };

            gsap.to(val, {
                angle: startAngle + 360,
                duration: 40, // Seconds for one full revolution (Slow & Majestic)
                repeat: -1,
                ease: "none",
                onUpdate: () => {
                    const rad = (val.angle * Math.PI) / 180;
                    const x = centerX + Math.cos(rad) * radiusX;
                    const y = centerY + Math.sin(rad) * radiusY;

                    // Simple z-index sorting based on Y position (closer implies lower Y in 3D, but here lower Y is "back" visually on screen for top-down?
                    // Let's assume sine wave: y > centerY means "front" (higher z-index).
                    const zScale = (Math.sin(rad) + 1) / 2; // 0 (back) to 1 (front)
                    const scale = 0.7 + (zScale * 0.3); // Scale between 0.7 and 1.0 (Perspective effect)
                    const opacity = 0.5 + (zScale * 0.5); // Fades out at the back

                    gsap.set(el, {
                        x: x - el.clientWidth / 2, // Center the element
                        y: y - el.clientHeight / 2,
                        scale: scale,
                        opacity: opacity, // Base opacity based on depth
                        zIndex: Math.round(zScale * 100)
                    });
                }
            });

            // 2. Random Blinking/Fading
            // We animate the *internal* opacity or filter brightness to create a blinking star effect without conflicting with the orbital opacity
            gsap.to(el, {
                filter: "brightness(1.5)",
                duration: 0.5 + Math.random(), // Random duration
                repeat: -1,
                yoyo: true,
                repeatDelay: Math.random() * 3, // Random delay between blinks
                ease: "sine.inOut"
            });
        });

    }, { scope: containerRef, dependencies: [resizeKey] });

    return (
        <div ref={containerRef} className="relative w-full h-[600px] flex items-center justify-center overflow-visible">

            {/* Orbital Path (Visual Guide) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.2 }}>
                <ellipse
                    cx="50%"
                    cy="50%"
                    rx="40%"
                    ry="20%"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                />
            </svg>

            {/* Center Star: Esthington Group */}
            <div className="z-50">
                <div className="relative w-36 h-36 md:w-44 md:h-44 z-50">
                    {/* Glowing Aura */}
                    <div className="absolute inset-0 bg-[#F47920] rounded-full blur-[60px] opacity-20 animate-pulse"></div>
                    <FlipCard company={MAIN_COMPANY} className="w-full h-full" />
                </div>
            </div>

            {/* Satellites */}
            {COMPANIES.map((company, index) => (
                <div
                    key={company.id}
                    ref={(el) => (orbitRefs.current[index] = el)}
                    className="absolute top-0 left-0 will-change-transform"
                >
                    <FlipCard company={company} />
                </div>
            ))}
        </div>
    );
};

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TrendingUp, ShieldCheck, MapPin } from 'lucide-react';

export const HeroAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);
    const card3Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const card1 = card1Ref.current;
        const card2 = card2Ref.current;
        const card3 = card3Ref.current;

        if (!container || !card1 || !card2 || !card3) return;

        // Initial Entrance Animation
        const tl = gsap.timeline();

        tl.fromTo(card3,
            { y: 100, opacity: 0, rotationX: -20 },
            { y: 0, opacity: 1, rotationX: 0, duration: 1, ease: "back.out(1.2)" }
        )
            .fromTo(card2,
                { y: 100, opacity: 0, rotationX: -20 },
                { y: 0, opacity: 1, rotationX: 0, duration: 1, ease: "back.out(1.2)" },
                "-=0.8"
            )
            .fromTo(card1,
                { y: 100, opacity: 0, rotationX: -20 },
                { y: 0, opacity: 1, rotationX: 0, duration: 1, ease: "back.out(1.2)" },
                "-=0.8"
            );

        // Idle Floating Animation
        gsap.to(card1, { y: '-=15', duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" });
        gsap.to(card2, { y: '-=10', duration: 2.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.5 });
        gsap.to(card3, { y: '-=12', duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.2 });

        // Mouse Parallax Effect
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const xPos = (clientX / innerWidth - 0.5) * 2; // -1 to 1
            const yPos = (clientY / innerHeight - 0.5) * 2; // -1 to 1

            gsap.to(card1, {
                rotationY: xPos * 10,
                rotationX: -yPos * 10,
                x: xPos * 20,
                y: yPos * 20,
                duration: 1,
                ease: "power2.out"
            });

            gsap.to(card2, {
                rotationY: xPos * 8,
                rotationX: -yPos * 8,
                x: xPos * 15,
                y: yPos * 15,
                duration: 1,
                ease: "power2.out"
            });

            gsap.to(card3, {
                rotationY: xPos * 5,
                rotationX: -yPos * 5,
                x: xPos * 10,
                y: yPos * 10,
                duration: 1,
                ease: "power2.out"
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            tl.kill();
        };
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-[600px] flex items-center justify-center perspective-1000 hidden xl:flex">
            {/* Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-[#F47920]/20 rounded-full blur-[120px] z-0 animate-pulse" />

            {/* Card 1: Asset (Top Right - Back) */}
            <div
                ref={card1Ref}
                className="absolute top-12 right-12 z-10 w-96 p-4 rounded-3xl bg-white/5 backdrop-blur-md border border-white/20 shadow-2xl transform-style-3d origin-center"
            >
                <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                    <img
                        src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1000"
                        alt="Prime Estate"
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs text-white font-medium flex items-center gap-2">
                        <MapPin className="w-3 h-3" /> Primelux, Apo
                    </div>
                </div>
                <div className="flex justify-between items-center px-2">
                    <div>
                        <div className="text-xl text-white font-bold mb-1">Ocean View Estate</div>
                        <div className="text-sm text-white/60">Starting @ ₦45M</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white text-[#2A1B6E] flex items-center justify-center font-bold text-lg">
                        →
                    </div>
                </div>
            </div>

            {/* Card 2: Growth (Middle Left - Mid) */}
            <div
                ref={card2Ref}
                className="absolute top-32 left-8 z-20 w-[28rem] p-8 rounded-3xl bg-gradient-to-br from-[#2A1B6E]/95 to-[#1a1145]/95 backdrop-blur-xl border border-white/20 shadow-2xl transform-style-3d origin-center"
            >
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <div className="text-sm text-white/60 mb-1">Projected ROI</div>
                        <div className="text-4xl font-bold text-[#F47920]">+45.2%</div>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-green-500/20 text-green-400 text-sm font-bold flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4" /> YTD
                    </div>
                </div>
                {/* Simulated Graph Lines */}
                <div className="h-32 flex items-end justify-between gap-3">
                    {[30, 45, 35, 60, 50, 75, 65, 90, 80, 100].map((h, i) => (
                        <div
                            key={i}
                            className="w-full bg-gradient-to-t from-[#F47920]/20 to-[#F47920]"
                            style={{
                                height: `${h}%`,
                                borderRadius: '4px',
                                opacity: 0.6 + (i * 0.04)
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Card 3: Status (Bottom Right - Front) */}
            <div
                ref={card3Ref}
                className="absolute bottom-32 right-24 z-30 w-80 p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl transform-style-3d origin-center"
            >
                <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center">
                        <ShieldCheck className="w-7 h-7 text-green-400" />
                    </div>
                    <div>
                        <div className="text-sm text-white/50 uppercase tracking-wider mb-1">Status</div>
                        <div className="text-xl font-bold text-white">Verified Opportunity</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

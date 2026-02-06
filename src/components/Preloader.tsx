import React, { useEffect, useState } from 'react';
import { motion, useAnimate } from 'framer-motion';

interface PreloaderProps {
    onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        const sequence = async () => {
            // Animate the conical gradient mask from 0% to 100%
            await animate(scope.current, {
                maskImage: `conic-gradient(from 0deg, black 360deg, transparent 360deg)`,
                WebkitMaskImage: `conic-gradient(from 0deg, black 360deg, transparent 360deg)`
            }, {
                duration: 2.5,
                ease: "easeInOut"
            });

            // Wait a bit
            await new Promise(resolve => setTimeout(resolve, 500));

            // Signal completion to parent
            onComplete();
        };

        sequence();
    }, [animate, onComplete, scope]);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#070515]">
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center p-8">
                {/* 
                    We use a container for the image and apply the mask animation to the CONTAINER or IMAGE directly.
                    Using CSS variables with framer motion is the cleanest way for conic-gradient interpolation.
                */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    className="absolute inset-0 flex items-center justify-center filter blur-xl scale-110"
                >
                    <img
                        src="/esthingtonlogoloader.svg"
                        alt="Esthington Glow"
                        className="w-full h-full object-contain"
                    />
                </motion.div>

                <MaskedLogo onAnimationComplete={onComplete} />
            </div>
        </div>
    );
};

// Helper component to handle the CSS variable animation cleanly
const MaskedLogo = ({ onAnimationComplete }: { onAnimationComplete: () => void }) => {
    return (
        <div className="relative w-full h-full">
            <motion.img
                src="/esthingtonlogoloader.svg"
                alt="Loading..."
                className="w-full h-full object-contain"
                initial={{
                    // @ts-ignore
                    "--mask-deg": "0deg"
                }}
                animate={{
                    // @ts-ignore
                    "--mask-deg": "360deg"
                }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                style={{
                    // @ts-ignore
                    maskImage: "conic-gradient(from 0deg, black var(--mask-deg), transparent var(--mask-deg))",
                    WebkitMaskImage: "conic-gradient(from 0deg, black var(--mask-deg), transparent var(--mask-deg))",
                }}
                onAnimationComplete={() => setTimeout(onAnimationComplete, 500)}
            />
        </div>
    );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin } from 'lucide-react';
import { AUDIENCE, HOT_SELLING_ESTATES, Project } from './constants';
import { ProjectModal } from './ProjectModal';

export const Audience = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="audience" className="py-24 text-white">
            <div className="container mx-auto px-6">
                <div className="bg-gradient-to-br from-[#2A1B6E] to-[#1a1145] rounded-[3rem] p-10 md:p-20 border border-white/10 shadow-3xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#F47920]/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

                    <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
                        {/* Left Side: Who This Hub Is For */}
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Who This Hub Is For</h2>
                            <div className="space-y-6">
                                {AUDIENCE.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="mt-1">
                                            <CheckCircle2 className="w-6 h-6 text-[#F47920]" />
                                        </div>
                                        <span className="text-xl text-white/80 font-medium">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: New and Hot Selling Estates */}
                        <div className="lg:w-1/2 w-full mt-12 lg:mt-0">
                            <h3 className="text-2xl font-serif font-bold mb-8 text-center lg:text-left text-[#F47920]">
                                New and Hot Selling
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {HOT_SELLING_ESTATES.map((project, index) => {
                                    // Stagger the heights to create a masonry-like effect similar to the original images
                                    const isTall = index === 1 || index === 2;
                                    const heightClass = isTall ? 'h-64' : 'h-48';
                                    const marginClass = index === 1 ? 'mt-8' : (index === 2 ? '-mt-16' : 'mt-0');

                                    return (
                                        <motion.div
                                            key={project.id}
                                            onClick={() => setSelectedProject(project)}
                                            className={`relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group ${heightClass} ${marginClass}`}
                                            animate={{ y: [0, index % 2 === 0 ? -8 : -12, 0] }}
                                            transition={{ duration: 4 + index * 0.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                                            whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.2 } }}
                                        >
                                            {project.media[0].type === 'video' ? (
                                                <>
                                                    <video
                                                        src={project.media[0].url}
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                        muted
                                                        playsInline
                                                        autoPlay
                                                        loop
                                                    />
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white/80 group-hover:text-white transition-colors">
                                                            <div className="w-4 h-4 ml-1 border-y-8 border-y-transparent border-l-[12px] border-l-current" />
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <img
                                                    src={project.media[0].url}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                            )}
                                            {/* Gradient overlay for text readability */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4">
                                                <h4 className="text-white font-bold text-sm md:text-base leading-tight mb-1">
                                                    {project.title}
                                                </h4>
                                                <div className="flex items-center text-[#F47920] text-xs font-medium">
                                                    <MapPin className="w-3 h-3 mr-1" />
                                                    {project.location}
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Hot Selling Estates */}
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

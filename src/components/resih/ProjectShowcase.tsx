import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, MapPin } from 'lucide-react';
import { PROJECTS, Project, TEXT_ACCENT, ACCENT_COLOR } from './constants';
import { ProjectModal } from './ProjectModal';

export const ProjectShowcase = () => {
    const [activeTab, setActiveTab] = useState<'All' | 'Completed' | 'Ongoing'>('All');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = activeTab === 'All'
        ? PROJECTS
        : PROJECTS.filter(p => p.status === activeTab);

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F47920]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                            Our <span className={TEXT_ACCENT}>Portfolio</span>
                        </h2>
                        <p className="text-white/60 max-w-lg text-lg">
                            Explore our track record of delivering premium value and our vision for the future of African real estate.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex p-1 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
                        {['All', 'Completed', 'Ongoing'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab as any)}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === tab
                                    ? `${ACCENT_COLOR} text-white shadow-lg`
                                    : 'text-white/60 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid/Carousel */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer border border-white/10 bg-[#1a103f]"
                        >
                            {/* Image/Video Background */}
                            <div className="absolute inset-0">
                                {project.media[0].type === 'video' && !project.media[0].thumbnail ? (
                                    <video
                                        src={project.media[0].url}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        muted
                                        loop
                                        autoPlay
                                        playsInline
                                    />
                                ) : (
                                    <img
                                        src={project.media[0].thumbnail || project.media[0].url}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a2a] via-[#0f0a2a]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity z-10" />
                            </div>

                            {/* Status Badge */}
                            <div className="absolute top-4 left-4 z-20">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md border border-white/10 ${project.status === 'Completed'
                                    ? 'bg-green-500/20 text-green-400'
                                    : 'bg-[#F47920]/20 text-[#F47920]'
                                    }`}>
                                    {project.status}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex items-center text-white/70 text-xs mb-2">
                                    <MapPin className="w-3 h-3 mr-1 text-[#F47920]" />
                                    {project.location}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#F47920] transition-colors">{project.title}</h3>

                                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
                                    <p className="text-white/60 text-sm line-clamp-2 mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex items-center text-[#F47920] text-sm font-bold">
                                        View Details <ArrowUpRight className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                            </div>

                            {/* Play Icon if video */}
                            {project.media.some(m => m.type === 'video') && (
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100">
                                    <Play className="w-5 h-5 fill-white" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

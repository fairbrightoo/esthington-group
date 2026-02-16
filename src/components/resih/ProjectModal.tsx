import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Project, ProjectMedia } from './constants';
import { GLASS_BG, ACCENT_COLOR } from './constants';

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

    if (!project) return null;

    const nextMedia = () => {
        setCurrentMediaIndex((prev) => (prev + 1) % project.media.length);
    };

    const prevMedia = () => {
        setCurrentMediaIndex((prev) => (prev - 1 + project.media.length) % project.media.length);
    };

    const currentMedia = project.media[currentMediaIndex];

    return (
        <AnimatePresence>
            {project && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto ${GLASS_BG} rounded-3xl border border-white/20 shadow-2xl flex flex-col md:flex-row overflow-hidden`}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Media Section (Left/Top) */}
                        <div className="w-full md:w-2/3 bg-black relative aspect-video md:aspect-auto md:h-full min-h-[300px] flex items-center justify-center group">
                            {currentMedia.type === 'video' ? (
                                <video
                                    src={currentMedia.url}
                                    controls
                                    className="w-full h-full object-contain"
                                    poster={currentMedia.thumbnail}
                                />
                            ) : (
                                <img
                                    src={currentMedia.url}
                                    alt={project.title}
                                    className="w-full h-full object-contain"
                                />
                            )}

                            {/* Media Navigation */}
                            {project.media.length > 1 && (
                                <>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); prevMedia(); }}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-[#F47920] transition-colors md:opacity-0 md:group-hover:opacity-100"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); nextMedia(); }}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-[#F47920] transition-colors md:opacity-0 md:group-hover:opacity-100"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>

                                    {/* Dots Indicator */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                        {project.media.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentMediaIndex(idx)}
                                                className={`w-2 h-2 rounded-full transition-all ${idx === currentMediaIndex ? 'bg-[#F47920] w-6' : 'bg-white/50'}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Info Section (Right/Bottom) */}
                        <div className="w-full md:w-1/3 p-8 flex flex-col text-white bg-[#1a103f]/90">
                            <div className="mb-6">
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${project.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-[#F47920]/20 text-[#F47920]'
                                    }`}>
                                    {project.status}
                                </span>
                                <h2 className="text-3xl font-serif font-bold mb-2">{project.title}</h2>
                                <div className="flex items-center text-white/60 text-sm mb-4">
                                    <MapPin className="w-4 h-4 mr-1 text-[#F47920]" />
                                    {project.location}
                                </div>
                            </div>

                            <p className="text-white/80 leading-relaxed mb-8 flex-grow">
                                {project.description}
                            </p>

                            {/* Stats */}
                            {project.stats && (
                                <div className="grid grid-cols-2 gap-4 mt-auto">
                                    {project.stats.map((stat, idx) => (
                                        <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                                            <div className="text-[#F47920] text-2xl font-bold mb-1">{stat.value}</div>
                                            <div className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

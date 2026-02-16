import React from 'react';
import { Gem, TrendingUp, ShieldCheck, Award, Clock, UserCheck } from 'lucide-react';

export const PRIMARY_BG = 'bg-[#2A1B6E]';
export const ACCENT_COLOR = 'bg-[#F47920]';
export const TEXT_ACCENT = 'text-[#F47920]';
export const GLASS_BG = 'bg-white/10 backdrop-blur-md border border-white/20';

export const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Portfolio', href: '#projects' },
    { label: "Who It's For", href: '#audience' },
    { label: 'Why Early?', href: '#urgency' }
];

export const BENEFITS = [
    {
        title: 'Pre-Sale Access',
        description: 'Buy before public launch.',
        icon: <Gem className="w-8 h-8" />
    },
    {
        title: 'Higher ROI Potential',
        description: 'Early pricing advantage.',
        icon: <TrendingUp className="w-8 h-8" />
    },
    {
        title: 'Verified Projects',
        description: 'Due-diligence done for you.',
        icon: <ShieldCheck className="w-8 h-8" />
    },
    {
        title: 'Investment Guidance',
        description: 'Smart decision support.',
        icon: <Award className="w-8 h-8" />
    },
    {
        title: 'Investor Community',
        description: 'Network & co-invest.',
        icon: <UserCheck className="w-8 h-8" />
    },
    {
        title: 'Priority Notifications',
        description: 'First to know, first to act.',
        icon: <Clock className="w-8 h-8" />
    }
];

export const AUDIENCE = [
    "Busy professionals who want secure land banking",
    "Diaspora & local investors seeking early-bird advantage",
    "Business owners & executives looking for long-term wealth",
    "Investors who want guided, verified opportunities"
];

// --- Project Showcase Data ---

export interface ProjectMedia {
    type: 'image' | 'video';
    url: string;
    thumbnail?: string; // For videos
}

export interface Project {
    id: string;
    title: string;
    location: string;
    status: 'Completed' | 'Ongoing';
    description: string;
    media: ProjectMedia[];
    stats?: { label: string; value: string }[];
}

export const PROJECTS: Project[] = [
    {
        id: 'p1',
        title: 'Primelux Estate',
        location: 'Apo, Abuja',
        status: 'Completed',
        description: 'A premium residential complex featuring 20 luxury apartments with state-of-the-art amenities. Delivered on time with 140% ROI for early investors.',
        media: [
            { type: 'image', url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000' },
            { type: 'image', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000' }
        ],
        stats: [
            { label: 'ROI', value: '140%' },
            { label: 'Units', value: '20' }
        ]
    },
    {
        id: 'p2',
        title: 'Sunview City',
        location: 'Kuje, Abuja',
        status: 'Ongoing',
        description: 'Our flagship commercial development. A 35-storey masterpiece redefining the skyline. Currently in the foundation phase, offering pre-sale equity opportunities.',
        media: [
            { type: 'video', url: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4', thumbnail: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1000' },
            { type: 'image', url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1000' }
        ],
        stats: [
            { label: 'Completion', value: '2027' },
            { label: 'Floors', value: '35' }
        ]
    },
    {
        id: 'p3',
        title: 'Peaceland Estate',
        location: 'Kurudu, Abuja',
        status: 'Ongoing',
        description: 'Sustainable living meets modern luxury. A solar-powered gated community designed for the eco-conscious family.',
        media: [
            { type: 'image', url: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80&w=1000' }
        ],
        stats: [
            { label: 'Green Area', value: '40%' },
            { label: 'Units', value: '50+' }
        ]
    },
    {
        id: 'p4',
        title: 'Sapphire Mall',
        location: 'Gwarinpa, Abuja',
        status: 'Completed',
        description: 'A bustling retail hub hosting over 100 international and local brands. A cornerstone of commercial success in the district.',
        media: [
            { type: 'image', url: 'https://images.unsplash.com/photo-1519567241046-7f570eee3d9f?auto=format&fit=crop&q=80&w=1000' }
        ],
        stats: [
            { label: 'Occupancy', value: '100%' },
            { label: 'Daily Footfall', value: '5k+' }
        ]
    }
];

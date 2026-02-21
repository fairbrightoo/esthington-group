import React from 'react';
import { Gem, TrendingUp, ShieldCheck, Award, Clock, UserCheck } from 'lucide-react';

export const PRIMARY_BG = 'bg-[#2A1B6E]';
export const ACCENT_COLOR = 'bg-[#F47920]';
export const TEXT_ACCENT = 'text-[#F47920]';
export const GLASS_BG = 'bg-white/10 backdrop-blur-md border border-white/20';

// Replace this with the specific Google Script URL for the "Notify Me" form
export const GOOGLE_SCRIPT_URL_NOTIFY = 'https://script.google.com/macros/s/AKfycbxGxi3s6-lZ8dONxkRVbRzrmxC_E7bZBTrZYCb8ha1-1X50g_3V1BgwvcRVdZoZlCjl/exec';

export const NAV_LINKS = [
    { label: 'About', href: '/about' },
    { label: 'Benefits', href: '/benefits' },
    { label: 'Portfolio', href: '/projects' },
    { label: "Who It's For", href: '/audience' },
    { label: 'Why Early?', href: '/urgency' }
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
            { type: 'video', url: '/primelux_apo.mp4', thumbnail: '/primelux_1.jpeg' },
            { type: 'image', url: '/primelux_1.jpeg' },
            { type: 'image', url: '/primelux_2.jpeg' }
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
            { type: 'video', url: '/sunviewkuje.mp4' },
            { type: 'video', url: '/sunviewp1.mp4' }
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
            { type: 'video', url: '/peaceland.mp4' }
        ],
        stats: [
            { label: 'Green Area', value: '40%' },
            { label: 'Units', value: '50+' }
        ]
    },
    {
        id: 'p4',
        title: 'Treasure Gate Estate',
        location: 'Dei Dei, Abuja',
        status: 'Ongoing',
        description: 'A bustling retail hub hosting over 100 international and local brands. A cornerstone of commercial success in the district.',
        media: [
            { type: 'video', url: '/treasuregate.mp4' }
        ],
        stats: [
            { label: 'Occupancy', value: '100%' },
            { label: 'Daily Footfall', value: '5k+' }
        ]
    }
];

// --- Hot Selling Estates ---
export const HOT_SELLING_ESTATES: Project[] = [
    {
        id: 'hs1',
        title: 'Access Gate Estate',
        location: 'Apo Wassa',
        status: 'Ongoing',
        description: 'A thriving community designed for modern living with state-of-the-art facilities.',
        media: [{ type: 'video', url: '/accessgateestate.mp4' }]
    },
    {
        id: 'hs2',
        title: 'Primelux Exclusive',
        location: 'Apo Waru',
        status: 'Ongoing',
        description: 'Experience luxury and tranquility in our premium exclusive residential plots.',
        media: [{ type: 'video', url: '/primeluxexclusive.mp4' }]
    },
    {
        id: 'hs3',
        title: 'Estora Residence',
        location: 'Maitama 2',
        status: 'Ongoing',
        description: 'Premium housing units set in the heart of Maitama 2, combining elegance and accessibility.',
        media: [{ type: 'video', url: '/maitama2.mp4' }]
    },
    {
        id: 'hs4',
        title: 'Treasure Gate',
        location: 'Dei Dei',
        status: 'Ongoing',
        description: 'Strategic commercial and residential spaces with high ROI potential.',
        media: [{ type: 'video', url: '/treasure.mp4' }]
    }
];

// --- Management Team Data ---

export interface Executive {
    id: string;
    name: string;
    role: string;
    company: string;
    image?: string;
    contact?: {
        phone?: string;
        email?: string;
        linkedin?: string;
    };
}

export const CHAIRMAN: Executive = {
    id: 'chairman',
    name: 'Engr. Dr. Darlington Ugota',
    role: 'Chairman',
    company: 'Esthington Group',
    image: '/chairman_img.png',
    contact: {
        phone: '07034795677',
        email: 'chairman@esthington.com'
    }
};

export const EXECUTIVES_TOP: Executive[] = [
    {
        id: 'gmd1',
        name: 'Dr. Emmanuel Osii',
        role: 'GMD',
        company: 'Double King Estate Ltd',
        image: '/emmanuel_osii.png',
        contact: { phone: '07039795420', email: 'e.osii@esthington.com' }
    },
    {
        id: 'gmd2',
        name: 'Dr. Benard Uwa',
        role: 'GMD',
        company: 'NEFT Properties Ltd',
        image: '/benard_uwa.png',
        contact: { phone: '07045466777', email: 'b.uwa@esthington.com' }
    },
    {
        id: 'gmd3',
        name: 'Dr. Samuel Ucha',
        role: 'GMD',
        company: 'Champions Properties Ltd',
        image: '/dr_sam.png',
        contact: { phone: '08066376362', email: 's.ucha@esthington.com' }
    }
];

export const EXECUTIVES_BOTTOM: Executive[] = [
    {
        id: 'gmd4',
        name: 'Engr. David Oche',
        role: 'MD',
        company: 'Double Grace Estate Ltd',
        image: '/oche.png',
        contact: { phone: '07061923254', email: 'oche@esthington.com' }
    },
    {
        id: 'gmd5',
        name: 'Dr. Oscar Nwali',
        role: 'MD',
        company: 'Top Rank Global Projects',
        image: '/oscar.png',
        contact: { phone: '07011620063', email: 'o.nwali@esthington.com' }
    },
    {
        id: 'gmd6',
        name: 'Dr. Uchenna Eze',
        role: 'MD',
        company: 'Esthington Links Ltd',
        image: '/uchenna.png',
        contact: { phone: '09054090266', email: 'uchenna@esthington.com' }
    }
];

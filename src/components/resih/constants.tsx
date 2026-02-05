import React from 'react';
import { Gem, TrendingUp, ShieldCheck, Award, Clock } from 'lucide-react';

export const PRIMARY_BG = 'bg-[#2A1B6E]';
export const ACCENT_COLOR = 'bg-[#F47920]';
export const TEXT_ACCENT = 'text-[#F47920]';
export const GLASS_BG = 'bg-white/10 backdrop-blur-md border border-white/20';

export const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Benefits', href: '#benefits' },
    { label: "Who It's For", href: '#audience' },
    { label: 'Why Early?', href: '#urgency' }
];

export const BENEFITS = [
    {
        title: 'First Access to New Estates',
        description: 'Be among the first to know when new land and estate projects are launched—before public sales begin.',
        icon: <Gem className="w-8 h-8" />
    },
    {
        title: 'Early-Bird Pricing Advantage',
        description: 'Buy at the lowest possible entry price and benefit from rapid appreciation as development progresses.',
        icon: <TrendingUp className="w-8 h-8" />
    },
    {
        title: 'Smart Investment Guidance',
        description: 'We guide you on where to invest, when to invest, how long to hold, and how to maximize ROI.',
        icon: <ShieldCheck className="w-8 h-8" />
    },
    {
        title: 'Long-Term Wealth Growth',
        description: 'Real estate rewards patience. Our investors are positioned for sustainable and compounding returns over time.',
        icon: <Award className="w-8 h-8" />
    },
    {
        title: 'Priority Allocation',
        description: 'During high-demand sales, members receive priority access and allocation.',
        icon: <Clock className="w-8 h-8" />
    }
];

export const AUDIENCE = [
    "Smart individuals who want their money to work for them",
    "Professionals, entrepreneurs, and business owners",
    "Diaspora investors seeking trusted local opportunities",
    "Real estate developers",
    "Anyone serious about long-term wealth through real estate"
];

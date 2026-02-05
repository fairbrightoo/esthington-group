import React, { useState } from 'react';
import { Navbar } from '../resih/Navbar';
import { Hero } from '../resih/Hero';
import { About } from '../resih/About';
import { Benefits } from '../resih/Benefits';
import { Audience } from '../resih/Audience';
import { Urgency } from '../resih/Urgency';
import { Footer } from '../resih/Footer';
import { JoinModal } from '../resih/JoinModal';
import { PRIMARY_BG } from '../resih/constants';

// @component: RESIHLandingPage
export const RESIHLandingPage = () => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  const openJoinModal = () => setIsJoinModalOpen(true);
  const closeJoinModal = () => setIsJoinModalOpen(false);

  // @return
  return (
    <div className={`min-h-screen ${PRIMARY_BG} text-white font-sans selection:bg-[#F47920]/30`}>
      <Navbar onJoinClick={openJoinModal} />
      <Hero onJoinClick={openJoinModal} />
      <About />
      <Benefits onJoinClick={openJoinModal} />
      <Audience />
      <Urgency onJoinClick={openJoinModal} />
      <Footer />

      <JoinModal isOpen={isJoinModalOpen} onClose={closeJoinModal} />
    </div>
  );
};
export default RESIHLandingPage;
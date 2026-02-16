import React, { useState } from 'react';
import { Navbar } from '../resih/Navbar';
import { Hero } from '../resih/Hero';
import { About } from '../resih/About';
import { Benefits } from '../resih/Benefits';
import { ProjectShowcase } from '../resih/ProjectShowcase';
import { Audience } from '../resih/Audience';
import { Urgency } from '../resih/Urgency';
import { Footer } from '../resih/Footer';
import { JoinModal } from '../resih/JoinModal';
import { ProcessModal } from '../resih/ProcessModal';
import { PRIMARY_BG } from '../resih/constants';

// @component: RESIHLandingPage
export const RESIHLandingPage = () => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isProcessModalOpen, setIsProcessModalOpen] = useState(false);

  const openJoinModal = () => setIsJoinModalOpen(true);
  const closeJoinModal = () => setIsJoinModalOpen(false);

  const openProcessModal = () => setIsProcessModalOpen(true);
  const closeProcessModal = () => setIsProcessModalOpen(false);

  // @return
  return (
    <div className={`min-h-screen ${PRIMARY_BG} text-white font-sans selection:bg-[#F47920]/30`}>
      <Navbar onJoinClick={openJoinModal} />
      <Hero onJoinClick={openJoinModal} onLearnMoreClick={openProcessModal} />
      <About />
      <Benefits onJoinClick={openJoinModal} />
      <div id="projects">
        <ProjectShowcase />
      </div>
      <Audience />
      <Urgency onJoinClick={openJoinModal} />
      <Footer />

      <JoinModal isOpen={isJoinModalOpen} onClose={closeJoinModal} />
      <ProcessModal
        isOpen={isProcessModalOpen}
        onClose={closeProcessModal}
        onStartJourney={() => {
          closeProcessModal();
          openJoinModal();
        }}
      />
    </div>
  );
};
export default RESIHLandingPage;
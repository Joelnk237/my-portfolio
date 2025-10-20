'use client';

import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import CompetencesSection from './components/CompetencesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import NavSection from './components/NavSection';

export default function SimplePortfolio() {
	return (
		<main className="min-h-screen bg-[#1A1A1A] pt-12 overflow-x-hidden text-white"> {/* <bg-gray-900> */}
			<NavSection />
			<HeroSection />
			<SkillsSection />
			<CompetencesSection />
			<ProjectsSection />
			<ContactSection />
		</main>
	);
}

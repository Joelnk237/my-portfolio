'use client';

import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import CompetencesSection from './components/CompetencesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function SimplePortfolio() {
	return (
		<main className="min-h-screen bg-[#1A1A1A] pt-12 overflow-x-hidden text-white"> {/* <bg-gray-900> */}
			<HeroSection />
			<SkillsSection />
			<CompetencesSection />
			<ProjectsSection />
			<ContactSection />
		</main>
	);
}

'use client';
import Image from 'next/image';

import { useEffect, useState } from 'react'
import { useTranslation } from "@/app/hooks/useTranslation";  // for Traduction


export default function HeroSection() {
  const t = useTranslation(); // for  Traduction
  const slogan = t.hero.text; //


const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
	
	return (
		<section id="home" className="relative min-h-screen items-center justify-center overflow-hidden h-[95vh]"> {/* relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 */}
      {/* --- Background with bubbles --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0  opacity-30" />
        {isClient && [...Array(50)].map((_, i) => {
          const size = 4 + Math.random() * 12;
          const left = 10 + Math.random() * 90;
          const top = 10 + Math.random() * 65;
          //const delay = 3;
          const delay = (i * 0.6) % 3;
          //const duration = 3 + Math.random() * 4;
          const speeds = ['animate-float-slow', 'animate-float-medium', 'animate-float-fast'];
          const animation = speeds[i % speeds.length]

          // Komponente erstellen
          return (
            <div
              key={i}
              className={`absolute rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-70 blur-sm ${animation}`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${delay}s`,
                //animationDuration: `${duration}s`,
              }}
            />
          );
        })}
      </div>


      <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-10"></div>
			<div className='absolute inset-0'>
				<div className="absolute inset-0 bg-[url('/grid3.jpg')] bg-center bg-cover bg-no-repeat [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]">
				</div>
			</div>

			
			<div className="relative top-[5vh] z-10 flex-col items-center justify-center px-4">
			<div className="text-center">
				<div className="mb-6 sm:mb-8">
					<Image src="/portrait.jpg" alt="Profile Picture" width={120} height={120} className="rounded-full mx-auto border-4 border-gray-700 shadow-lg" />
				</div>
				<p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
					{slogan}
				</p>
			</div>
			<div className="relative z-10 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-8">
				<div className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-6" >
					<div className="flex items-center gap-2 mb-4">
					<div className='w-3 h-3 rounded-full bg-green-500'></div>
					<div className='w-3 h-3 rounded-full bg-red-500'></div>
					<div className='w-3 h-3 rounded-full bg-yellow-500'></div>
					</div>
					<div className="font-mono">
					<p className="text-green-500">$ whoami</p>
					<h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white">Joel Gaetan Ngounouo Kamga</h1>
					<p className="text-gray-400 mb-2">Junior Full Stack Developer {/*Senior Backend Engineer*/}</p>
					<p className="text-green-500">$ skills</p>
					<div className="flex flex-wrap gap-2 mt-2">
						<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Node.js</span>
						<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Python</span>
						<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Go</span>
						<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Docker</span>
						<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">React.js</span>
						<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Java</span>
						<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Next.js</span>
						<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Typescript</span>
            <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">PHP</span>
            <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Git</span>
            <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">SQL</span>
					</div>
					</div>
				</div>
			</div>
			</div>
			<div className="absolute bottom-8 inset-x-0 flex flex-col items-center animate-bounce">
				<span className="text-gray-400 text-sm mb-2 text-center">{/*Scroll to explore*/}{t.hero.instruction}</span>
				<svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
				</svg>
			</div>


		</section>
	);
}

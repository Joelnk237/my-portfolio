'use client';
import Image from 'next/image';

import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLightbulb,
  faCode,
  faCloud,
  faCogs,
  faGlobe,
  faDatabase,
  faLock,
  faToolbox,
  faScrewdriverWrench,
  faRocket,
  faBrain,
} from '@fortawesome/free-solid-svg-icons'

const icons = [
  faLightbulb,
  faCode,
  faCloud,
  faCogs,
  faGlobe,
  faDatabase,
  faLock,
  faToolbox,
  faScrewdriverWrench,
  faRocket,
  faBrain,
]

export default function HeroSection() {


const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
	
	return (
		<section className="relative min-h-screen items-center justify-center overflow-hidden h-[95vh]"> {/* relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 */}
			{/* --- Arrière-plan avec bulles --- */}
      {/*<div
        ref={bubbleContainerRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute inset-0  opacity-30" />
      </div>*/}
      {/* --- Fond de bulles animées --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0  opacity-30" />
        {isClient && [...Array(100)].map((_, i) => {
          const size = 4 + Math.random() * 12;
          const left = 10 + Math.random() * 90;
          const top = 10 + Math.random() * 60;
          const delay = 3;
          const duration = 3 + Math.random() * 4;

          return (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-70 blur-sm animate-bounce"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
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

			{/*<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-20 left-1/4 animate-spin opacity-50" style={{animationDelay: '2s'}}>
					<span className="text-4xl">❄️</span>
				</div>
				<div className="absolute bottom-32 left-1/3 animate-float opacity-50" style={{animationDelay: '1s'}}>
					<span className="text-4xl">💻</span>
				</div>
				<div className="absolute bottom-20 right-1/4 animate-float opacity-50" style={{animationDelay: '3s'}}>
					<FontAwesomeIcon icon={faCode} className="text-green-400 w-5 h-5" />
				</div>
				<div className="absolute top-20 right-1/4 animate-float opacity-50" style={{animationDelay: '1s'}}>
					<FontAwesomeIcon icon={faCloud} className="w-5 h-5" />
				</div>
			</div>*/}
			<div className="relative top-15 z-10 flex-col items-center justify-center px-4">
			<div className="text-center">
				<div className="mb-6 sm:mb-8">
					<Image src="/portrait.jpg" alt="Profile Picture" width={120} height={120} className="rounded-full mx-auto border-4 border-gray-700 shadow-lg" />
				</div>
				{/*<h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Ngounouo Kamga, Joel Gaetan</h1>
				<p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">Full Stack Developer</p>*/}
				<p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
					I build exceptional and accessible digital experiences for the web. Focused on creating elegant solutions to complex problems.
				</p>
			</div>
			<div className="relative z-10 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-8">
				<div className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-6" >
					<div className="flex items-center gap-2 mb-4">
					<div className='w-3 h-3 rounded-full bg-red-500'></div>
					<div className='w-3 h-3 rounded-full bg-yellow-500'></div>
					<div className='w-3 h-3 rounded-full bg-green-500'></div>
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
						<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Kubernetes</span>
						<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Java</span>
						<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Next.js</span>
						<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Typescript</span>
					</div>
					</div>
				</div>
			</div>
			</div>
			<div className="absolute bottom-8 inset-x-0 flex flex-col items-center animate-bounce">
				<span className="text-gray-400 text-sm mb-2 text-center">Scroll to explore</span>
				<svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
				</svg>
			</div>


		</section>
	);
}

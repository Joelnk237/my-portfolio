'use client';

import Image from 'next/image';

export default function HeroSection() {
	return (
		<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
			<div className="text-center">
				<div className="mb-6 sm:mb-8">
					<Image src="/portrait.jpg" alt="Profile Picture" width={120} height={120} className="rounded-full mx-auto border-4 border-gray-700 shadow-lg" />
				</div>
				<h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Ngounouo Kamga, Joel Gaetan</h1>
				<p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">Full Stack Developer</p>
				<p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
					I build exceptional and accessible digital experiences for the web. Focused on creating elegant solutions to complex problems.
				</p>
			</div>
			<div className="relative z-10 max-w-4xl w-full mx-4">
  <div className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-6" >
    <div className="flex items-center gap-2 mb-4">
      <div className='w-3 h-3 rounded-full bg-red-500'></div>
	  <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
	  <div className='w-3 h-3 rounded-full bg-green-500'></div>
    </div>
    <div className="font-mono">
      <p className="text-green-500">$ whoami</p>
      <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white">Joel Gaetan Ngounouo Kamga</h1>
      <p className="text-gray-400 mb-2">Senior Backend Engineer</p>
      <p className="text-green-500">$ skills</p>
      <div className="flex flex-wrap gap-2 mt-2">
        <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Node.js</span>
        <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Python</span>
        <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Go</span>
        <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">AWS</span>
        <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Docker</span>
        <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Kubernetes</span>
      </div>
    </div>
  </div>
</div>

		</section>
	);
}

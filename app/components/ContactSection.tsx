'use client';

import { motion } from 'framer-motion';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLocationDot,
	faFile
} from "@fortawesome/free-solid-svg-icons";

export default function ContactSection() {
	return (
		<section id="contact" className="py-16 px-4 border-t border-gray-800">
			

			<div className="max-w-4xl mx-auto">
			<div className="relative p-8 rounded-2xl overflow-hidden backdrop-blur-lg border border-gray-800 bg-black/50" /*style="opacity: 1;"*/>
				<div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5"></div>
				<div className="relative z-10">
				<div className="flex items-center gap-2 mb-6">
					<div className='w-3 h-3 rounded-full bg-red-500'></div>
					<div className='w-3 h-3 rounded-full bg-yellow-500'></div>
					<div className='w-3 h-3 rounded-full bg-green-500'></div>
				</div>
				<div className="font-mono">
					<p className="text-green-500 mb-2">$ contact --info</p>
					<h2 className="text-3xl font-bold mt-8 text-gray-200">Let's Connect</h2>
					<p className="text-green-500 mb-2">$ location --current</p>
					<div className="flex items-center gap-2 text-gray-300">
						<svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><FontAwesomeIcon icon={faLocationDot} /></svg>
						<span>Gießen, DE</span>
					</div>
					<p className="text-green-500 mt-8 mb-2">$ contact --email</p>
					<a href="mailto:joelgaetan44@gmail.com" className="inline-block px-6 py-3 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors" >joelgaetan44@gmail.com</a>
					<p className="text-green-500 mt-8 mb-2">$ cat resume.pdf</p>
					<a href="/path-to-resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors" >
						<svg className='w-5 h-5' fill='currentColor'><FontAwesomeIcon icon={faFile} /></svg>
						<span>Download Resume</span>
					</a>
					<p className="text-green-500 mt-8 mb-4">$ ./social-links</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					<a href="https://github.com/Joelnk237" className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group" >
						<div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
							<svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></div>
						<div>
						<p className="font-semibold text-gray-200">GitHub</p>
						<p className="text-sm text-gray-400">@joelnk237</p>
						</div>
					</a>
					<a href="https://www.linkedin.com/in/joel-gaetan-ngounouo-kamga-195b7735b/" className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors">
						<div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
							<svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24"></svg>
						</div>
						<div>
							<p className="font-semibold text-gray-200">LinkedIn</p>
							<p className="text-sm text-gray-400">Joel Gaetan Ngounouo Kamga</p>
						</div>
					</a>
					<a href="#" className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors" >
						<div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
							<svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
						</div>
						<div>
							<p className="font-semibold text-gray-200">X</p>
							<p className="text-sm text-gray-400">@joelnk</p>
						</div>
					</a>
					</div>
				</div>
				<p className="text-green-500 mt-8 mb-4">$ send-message</p>

				<form className="space-y-4">
					<div>
						<label htmlFor="name" className="block text-sm font-mono text-green-500 mb-2">$ name:</label>
						<input type="text" id="name" required className="w-full px-3 py-2 font-mono bg-black/20 border border-green-500/20 rounded-md text-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors" />
					</div>
					<div>
						<label htmlFor="email" className="block text-sm font-mono text-green-500 mb-2">$ email:</label>
						<input type="email" id="email" required className="w-full px-3 py-2 font-mono bg-black/20 border border-green-500/20 rounded-md text-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors" />
					</div>
					<div>
						<label htmlFor="message" className="block text-sm font-mono text-green-500 mb-2">$ message:</label>
						<textarea id="message" required rows={4} className="w-full px-3 py-2 font-mono bg-black/20 border border-green-500/20 rounded-md text-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors resize-none"></textarea>
					</div>
					<button type="submit" className="w-full px-6 py-3 font-mono text-white font-medium bg-green-500 hover:bg-green-600 rounded-lg transition-colors">SendMessage()</button>
				</form>


				</div>
			</div>
			<div className="flex justify-center mt-16" style={{opacity: 1, transform: 'none'}}> 
				<a href="/#home">
					<div className="p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-full shadow-lg cursor-pointer border border-white/20 dark:border-gray-700/50" tabIndex={0} style={{transform: 'none'}}>
					<svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" className="text-primary text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11l7-7 7 7M5 19l7-7 7 7"></path>
					</svg>
					</div>
				</a>
			</div>

			</div>

		</section>
		
	);
}

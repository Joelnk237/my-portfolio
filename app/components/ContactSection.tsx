'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
	return (
		<section id="contact" className="py-16 px-4 border-t border-gray-800">
			<div className="max-w-2xl mx-auto">
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-6">
					<h2 className="text-2xl font-semibold text-white">Contact</h2>
					<p className="text-gray-300">Interested in working together? Let&apos;s have a conversation.</p>

					{/* Location */}
					<div className="flex items-center justify-center gap-2 text-gray-300">
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
						<span>San Francisco, CA</span>
					</div>

					{/* Contact Buttons */}
					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<a
							href="mailto:david@example.com"
							className="px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
								<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
							</svg>
							Get in Touch
						</a>
						<a
							href="/resume.pdf"
							target="_blank"
							className="px-6 py-2 border border-gray-600 text-gray-300 font-medium rounded hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									fillRule="evenodd"
									d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
									clipRule="evenodd"
								/>
								<path fillRule="evenodd" d="M8 11a1 1 0 100 2h4a1 1 0 100-2H8zm0-4a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
							</svg>
							View Resume
						</a>
					</div>

					{/* Social Links */}
					<div className="flex justify-center gap-6">
						<a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
						</a>
						<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
							</svg>
						</a>
						<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
							</svg>
						</a>
					</div>
				</motion.div>
			</div>

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
					<h2 className="text-3xl font-bold mt-8 text-gray-200">Lets Connect</h2>
					<p className="text-green-500 mb-2">$ location --current</p>
					<div className="flex items-center gap-2 text-gray-300">
						<svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>
						<span>Gießen, DE</span>
					</div>
					<p className="text-green-500 mt-8 mb-2">$ contact --email</p>
					<a href="mailto:joelgaetan44@gmail.com" className="inline-block px-6 py-3 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors" >joelgaetan44@gmail.com</a>
					<p className="text-green-500 mt-8 mb-2">$ cat resume.pdf</p>
					<a href="/path-to-resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors" ></a>
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
				</div>
			</div>
			</div>

		</section>
		
	);
}

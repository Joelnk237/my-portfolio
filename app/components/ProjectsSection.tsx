import Image from 'next/image';
import { useTranslation } from "@/app/hooks/useTranslation";  // for Translation
export default function ProjectsSection() {
	const t = useTranslation(); // für Traduction
	return (
		<section id="projects" className="py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">{/*Featured Projects*/}{t.projects.title}</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
					{/*{[1, 2, 3, 4].map((project) => (
						<div key={project} className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
							<div className="aspect-video bg-gray-700 relative">
								<Image src={`/code.jpg`} alt={`Project ${project}`} fill className="object-cover" />
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-white mb-2">Project Title {project}</h3>
								<p className="text-sm sm:text-base text-gray-300 mb-4">A brief description of the project and the technologies used in its development.</p>
								<div className="flex gap-2">
									<a href="#" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
										View Project →
									</a>
								</div>
							</div>
						</div>
					))} */}
					<div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
							<div className="aspect-video bg-gray-700 relative">
								<Image src={`/code.jpg`} alt={`Project 1`} fill className="object-cover" />
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-white mb-2">WetterApp - Cloud-Native Microservice Architektur</h3>
								<p className="text-sm sm:text-base text-gray-300 mb-4">This project is a modern, cloud-native weather application based on a microservice architecture. The application allows registered users to collect, view, and manage weather data for various locations in real time.</p>
								<div className='flex flex-wrap gap-2'>
									<span className='text-sm px-3 py-1 bg-gray-900/50 rounded-full border border-blue-500/20'>Node.js</span>
									<span className='text-sm px-3 py-1 bg-gray-900/50 rounded-full border border-blue-500/20'>Express.js</span>
									<span className='text-sm px-3 py-1 bg-gray-900/50 rounded-full border border-blue-500/20'>Docker</span>
								</div>
								<div className="flex gap-2">
									<a href="https://git.thm.de/jgnk06/wettercheck" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
										View Project →
									</a>
								</div>
							</div>
					</div>
					<div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
							<div className="aspect-video bg-gray-700 relative">
								<Image src={`/code.jpg`} alt={`Project 1`} fill className="object-cover" />
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-white mb-2">Graph Detection</h3>
								<p className="text-sm sm:text-base text-gray-300 mb-4">Recognizing hand-drawn graphs, drawing graphs in a “nice” way</p>
								<div className='flex flex-wrap gap-2'>
									<span className='text-sm px-3 py-1 bg-gray-900/50 rounded-full border border-blue-500/20'>Python</span>
									<span className='text-sm px-3 py-1 bg-gray-900/50 rounded-full border border-blue-500/20'>Shell</span>
									{/*<span className='text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20'>Docker</span>*/}
								</div>
								<div className="flex gap-2">
									<a href="https://github.com/Joelnk237/graphDetection" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
										View Project →
									</a>
								</div>
							</div>
					</div>
					<div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
							<div className="aspect-video bg-gray-700 relative">
								<Image src={`/code.jpg`} alt={`Project 1`} fill className="object-cover" />
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-white mb-2">Recipe management web application</h3>
								<p className="text-sm sm:text-base text-gray-300 mb-4">This is a modern web application for managing and sharing recipes. It offers a user-friendly interface and a powerful REST API</p>
								<div className='flex flex-wrap gap-2'>
									<span className='text-sm px-3 py-1 bg-gray-900/50 rounded-full border border-blue-500/20'>Java</span>
									<span className='text-sm px-3 py-1 bg-gray-900/50 rounded-full border border-blue-500/20'>Vertx</span>
									<span className='text-sm px-3 py-1 bg-gray-900/50 rounded-full border border-blue-500/20'>Bootstrap</span>
								</div>
								<div className="flex gap-2">
									<a href="https://github.com/Joelnk237/RecipeShop" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
										View Project →
									</a>
								</div>
							</div>
					</div>
					<div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
							<div className="aspect-video bg-gray-700 relative">
								<Image src={`/code.jpg`} alt={`Project 1`} fill className="object-cover" />
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-white mb-2">Chat App</h3>
								<p className="text-sm sm:text-base text-gray-300 mb-4">A simple real-time chat app for user-to-user messaging</p>
								<div className='flex flex-wrap gap-2'>
									<span className='text-sm px-3 py-1 bg-gray-900/50 rounded-full border border-blue-500/20'>Svelte</span>
									<span className='text-sm px-3 py-1 bg-gray-900/50 rounded-full border border-blue-500/20'>Pocketbase</span>
								</div>
								<div className="flex gap-2">
									<a href="https://github.com/Joelnk237/chatApp" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
										View Project →
									</a>
								</div>
							</div>
					</div>

					<div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
							<div className="aspect-video bg-gray-700 relative">
								<Image src={`/code.jpg`} alt={`Project 1`} fill className="object-cover" />
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-white mb-2">My Portfolio</h3>
								<p className="text-sm sm:text-base text-gray-300 mb-4">Show all about Me </p>
								<div className='flex flex-wrap gap-2'>
									<span className='text-sm px-3 py-1 bg-gray-900/50 rounded-full border border-blue-500/20'>Next.js</span>
									<span className='text-sm px-3 py-1 bg-gray-900/50 rounded-full border border-blue-500/20'>React</span>
									<span className='text-sm px-3 py-1 bg-gray-900/50 rounded-full border border-blue-500/20'>Tailwind CSS</span>
									{/*<span className='text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20'>Docker</span>*/}
								</div>
								<div className="flex gap-2">
									<a href="https://github.com/Joelnk237/my-portfolio" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
										View Project →
									</a>
								</div>
							</div>
					</div>

					<div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
							<div className="aspect-video bg-gray-700 relative">
								<Image src={`/code.jpg`} alt={`Pokerally`} fill className="object-cover" />
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-white mb-2">PokeRally</h3>
								<p className="text-sm sm:text-base text-gray-300 mb-4">Interactive game, where the player must dodge opponents and the bullets they throw at him. </p>
								<div className='flex flex-wrap gap-2'>
									<span className='text-sm px-3 py-1 bg-gray-900/50 rounded-full border border-blue-500/20'>Java</span>
									<span className='text-sm px-3 py-1 bg-gray-900/50 rounded-full border border-blue-500/20'>Processing</span>
									{/*<span className='text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20'>Docker</span>*/}
								</div>
								<div className="flex gap-2">
									<a href="https://github.com/Joelnk237/PokeRally" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
										View Project →
									</a>
								</div>
							</div>
					</div>
				</div>
			</div>
		</section>
	);
}

'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
	return (
        <section className="py-20 px-4 bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center" style={{opacity: 1}}>Impact & Achievements</h2>
                <div className="grid grid-cols-1 gap-12">
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-green-400">API & Architecture</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700" style={{opacity: 1, transform: 'none' }}>
                                <h4 className="text-lg font-semibold text-gray-300">API Gateway</h4>
                                <ul className="mt-2 space-y-2 text-gray-400">
                                <li>- RESTful API Design</li>
                                <li>- CRUD Operations</li>
                                <li>- API Versioning</li>
                                </ul>
                            </div>
                            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700" style={{opacity: 1, transform: 'none'}}>
                                <h4 className="text-lg font-semibold text-gray-300">Architecture</h4>
                                <ul className="mt-2 space-y-2 text-gray-400">
                                <li>- MVC Architecture</li>
                                <li>- Layered Architecture</li>
                                <li>- API Versioning</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-green-400">Data & Databases</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700" style={{opacity: 1, transform: 'none' }}>
                                <h4 className="text-lg font-semibold text-gray-300">API Gateway</h4>
                                <ul className="mt-2 space-y-2 text-gray-400">
                                <li>- Database Modeling</li>
                                <li>- Database Normalization</li>
                                <li>- ORM (Object-Relational Mapping)</li>
                                </ul>
                            </div>
                            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700" style={{opacity: 1, transform: 'none'}}>
                                <h4 className="text-lg font-semibold text-gray-300">Architecture</h4>
                                <ul className="mt-2 space-y-2 text-gray-400">
                                <li>- SQL Query Optimization</li>
                                <li>- Data Validation</li>
                                <li>- Transactions Management</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-green-400">Deployment & DevOps</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700" style={{opacity: 1, transform: 'none' }}>
                                <h4 className="text-lg font-semibold text-gray-300">API Gateway</h4>
                                <ul className="mt-2 space-y-2 text-gray-400">
                                <li>- Containerization (Docker)</li>
                                <li>- Continuous Deployment</li>
                                {/*<li>- ORM (Object-Relational Mapping)</li>*/}
                                </ul>
                            </div>
                            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700" style={{opacity: 1, transform: 'none'}}>
                                <h4 className="text-lg font-semibold text-gray-300">Architecture</h4>
                                <ul className="mt-2 space-y-2 text-gray-400">
                                <li>- Unit Testing & Integration Testing</li>
                                <li>- Continuous Integration (CI/CD)</li>
                                {/*<li>- Transactions Management</li>*/}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    	);
}
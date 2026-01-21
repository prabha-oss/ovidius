import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center pt-24 pb-16 px-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <span className="inline-block px-4 py-2 rounded-full border-2 border-black bg-white font-medium text-sm shadow-brutal-sm">
                        AI Strategy → Execution → Adoption
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold font-space leading-tight mb-6 max-w-5xl"
                >
                    Stop Experimenting. <br className="hidden md:block" />
                    <span className="relative">
                        Start Winning with AI.
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-400 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                        </svg>
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg text-gray-800 max-w-2xl mb-8 leading-relaxed font-medium"
                >
                    We audit your operations, build your AI systems, and train your team to run them.
                    <br className="hidden md:block" /> From roadmap to ROI in months, not years.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col items-center gap-4 mb-12"
                >
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Button size="lg" className="w-full sm:w-auto gap-2">
                            Book Your Free Audit Call <ArrowRight className="w-5 h-5" />
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                            See How It Works ↓
                        </Button>
                    </div>
                    <p className="text-sm text-gray-500 font-medium">30-minute call. No pitch deck. Just answers.</p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-16 border-y-2 border-black/10 py-6"
                >
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold font-space mb-1">20+</span>
                        <span className="text-gray-600 text-sm font-medium uppercase tracking-wide">AI Transformations</span>
                    </div>
                    <div className="flex flex-col items-center md:border-l-2 md:border-r-2 border-black/10">
                        <span className="text-3xl font-bold font-space mb-1">2 Weeks</span>
                        <span className="text-gray-600 text-sm font-medium uppercase tracking-wide">From Kickoff to Roadmap</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold font-space mb-1">6 Months</span>
                        <span className="text-gray-600 text-sm font-medium uppercase tracking-wide">Avg Time to ROI</span>
                    </div>
                </motion.div>

                {/* Social Proof */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="w-full"
                >
                    <p className="text-gray-500 font-medium mb-6 uppercase tracking-wider text-sm">Trusted by operators at:</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders for logos */}
                        <div className="h-8 font-bold text-2xl font-space">AURA</div>
                        <div className="h-8 font-bold text-2xl font-space">NEXUS</div>
                        <div className="h-8 font-bold text-2xl font-space">OPTIMA</div>
                        <div className="h-8 font-bold text-2xl font-space">VERTEX</div>
                        <div className="h-8 font-bold text-2xl font-space">SCALE</div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

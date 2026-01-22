import { Card } from './ui/Card';
import { motion } from 'framer-motion';
import { AlertTriangle, Database, FileText, Users } from 'lucide-react';
import { Button } from './ui/Button';

const problems = [
    {
        icon: AlertTriangle,
        title: "Pilots that never reach production."
    },
    {
        icon: Database,
        title: "Paying for tools nobody uses."
    },
    {
        icon: FileText,
        title: "Strategy decks, not systems."
    },
    {
        icon: Users,
        title: "Great tech, zero user adoption."
    }
];

export function Problem() {
    return (
        <section className="min-h-screen flex flex-col justify-center py-16 px-6 bg-cream" id="problem">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold font-space mb-4"
                    >
                        AI is everywhere. Results are rare.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Every company wants to be "AI-first." Most don't know what that means.
                        Here's what we see over and over:
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {problems.map((problem, index) => (
                        <Card key={index} className="flex gap-6 items-start hover:-translate-y-1 transition-transform bg-white">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white shrink-0">
                                <problem.icon className="w-6 h-6" />
                            </div>
                            <div className="flex items-center h-12">
                                <h3 className="text-xl font-bold font-space leading-tight">{problem.title}</h3>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-xl font-bold font-space mb-8">
                        Sound familiar? <br />
                        We built Ovidius AI to fix this. Not with more slides. <br />
                        With systems that actually run — and teams that actually use them.
                    </p>
                    <Button variant="outline" className="gap-2">
                        See how we do it differently &rarr;
                    </Button>
                </div>
            </div>
        </section>
    );
}

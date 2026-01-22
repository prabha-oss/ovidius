import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Map, Zap, Users } from 'lucide-react';

const solutions = [
    {
        icon: Map,
        title: "1. Strategy",
        headline: "Clarity in 2 weeks.",
        problem: "Analysis Paralysis. Where do we start?",
        approach: "We audit your workflow and find high-ROI targets.",
        deliverable: "2-Week Roadmap",
        timeline: "2 Weeks"
    },
    {
        icon: Zap,
        title: "2. Transformation",
        headline: "Production, not prototypes.",
        problem: "Dev shops build software, not solutions.",
        approach: "We build custom agents and automations that work.",
        deliverable: "Production AI System",
        timeline: "4-8 Weeks"
    },
    {
        icon: Users,
        title: "3. Adoption",
        headline: "Tech unused is tech wasted.",
        problem: "Great tool. Zero users.",
        approach: "We train your team until workflows actually change.",
        deliverable: "Workshops & Playbooks",
        timeline: "Ongoing"
    }
];

export function Solutions() {
    return (
        <section className="min-h-screen flex flex-col justify-center py-16 px-6 bg-white" id="solutions">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">Strategy. Build. Adoption.</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We don't just advise. We don't just build. We ensure it works.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {solutions.map((solution, index) => (
                        <Card key={index} className="flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4 text-white shadow-brutal-sm shrink-0">
                                <solution.icon className="w-6 h-6" />
                            </div>

                            <div className="mb-4">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-1">{solution.title}</h3>
                                <h4 className="text-xl font-bold font-space leading-tight">{solution.headline}</h4>
                            </div>

                            <div className="space-y-3 mb-6 flex-grow">
                                <div>
                                    <span className="font-bold border-b border-black/20">The Problem:</span>
                                    <p className="text-gray-600 text-sm mt-1">{solution.problem}</p>
                                </div>
                                    <p className="text-gray-600 text-sm mt-1">{solution.approach}</p>
                                </div>
                                <div className="mt-2 text-xs font-bold text-gray-500 bg-gray-100 p-2 rounded">
                                    Deliverable: {solution.deliverable}
                                </div>
                            </div>

                            <div className="mt-auto pt-6 border-t-2 border-black/10">
                                <div className="mb-4">
                                    <span className="text-xs font-bold uppercase text-gray-400">Timeline</span>
                                    <p className="font-medium">{solution.timeline}</p>
                                </div>
                                <Button variant="outline" className="w-full justify-between group">
                                    Learn More
                                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                                </Button>
                            </div>
                        </Card>
                    ))}
            </div>
        </div>
        </section >
    );
}

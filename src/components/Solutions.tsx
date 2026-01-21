import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Map, Zap, Users } from 'lucide-react';

const solutions = [
    {
        icon: Map,
        title: "Solution 1: AI Strategy",
        headline: "Clarity in 2 weeks. Not 2 quarters.",
        problem: "Most AI strategies are wishlists disguised as roadmaps. They list everything AI could do without answering what it should do first.",
        approach: "We spend two weeks inside your business. We map your workflows, find the friction, and rank every AI opportunity by ROI and Effort.",
        deliverables: ["Process audit across 4 departments", "AI opportunity matrix", "Prioritized roadmap", "Executive summary"],
        timeline: "2 weeks",
        cta: "Learn more about AI Strategy"
    },
    {
        icon: Zap,
        title: "Solution 2: AI Transformation",
        headline: "From roadmap to running systems.",
        problem: "Strategies don't save time. Systems do. But most companies stall between 'we have a plan' and 'we have a working automation'.",
        approach: "Our AI-native engineers turn your roadmap into production systems. We front-load quick wins so your team sees value fast.",
        deliverables: ["Custom-built AI systems", "Full documentation", "QA in your environment", "Post-launch support"],
        timeline: "4-8 weeks for first system",
        cta: "Learn more about AI Transformation"
    },
    {
        icon: Users,
        title: "Solution 3: AI Adoption",
        headline: "This is where most AI projects die. We don't let it.",
        problem: "The system works. The team doesn't use it. They're 'too busy' to learn something new. They go back to the old way.",
        approach: "We train your team until AI systems become part of how they work. It's not a one-time webinar. It's ongoing support and office hours.",
        deliverables: ["Role-based training", "Weekly Q&A sessions", "Adoption dashboard", "Optimization recommendations"],
        timeline: "Ongoing (Min 90 days)",
        cta: "Learn more about AI Adoption"
    }
];

export function Solutions() {
    return (
        <section className="min-h-screen flex flex-col justify-center py-16 px-6 bg-white" id="solutions">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">One partner. Three phases. Zero gaps.</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Most AI projects fail because companies jump to tools before strategy, or strategy without adoption. <br className="hidden md:block" />
                        We do all three — and we don't leave until it works.
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
                                <div>
                                    <span className="font-bold border-b border-black/20">Our Approach:</span>
                                    <p className="text-gray-600 text-sm mt-1">{solution.approach}</p>
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
        </section>
    );
}

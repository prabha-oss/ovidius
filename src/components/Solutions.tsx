import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Map, Zap, Users } from 'lucide-react';

const solutions = [
    {
        icon: Map,
        title: "1. Strategy",
        headline: "We audit workflows & find high-ROI targets.",
        deliverables: ["Process Audit", "Opportunity Matrix", "Roadmap", "Exec Summary"],
        timeline: "2 Weeks"
    },
    {
        icon: Zap,
        title: "2. Build",
        headline: "We build custom agents that actually work.",
        deliverables: ["Custom AI Systems", "Documentation", "QA & Testing", "Post-launch Support"],
        timeline: "4-8 Weeks"
    },
    {
        icon: Users,
        title: "3. Adoption",
        headline: "We train your team until habits change.",
        deliverables: ["Role-based Training", "Weekly Q&A", "Adoption Dashboard", "Optimization"],
        timeline: "Ongoing"
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
                                <div className="bg-gray-50 p-4 rounded-lg border border-black/5">
                                    <span className="text-xs font-bold uppercase text-gray-400 block mb-2">Deliverables</span>
                                    <ul className="text-sm font-medium text-gray-700 space-y-1">
                                        {solution.deliverables.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <span className="w-1 h-1 bg-black rounded-full" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
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

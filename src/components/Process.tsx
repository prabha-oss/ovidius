import { Card } from './ui/Card';
import { Phone, Search, Hammer, GraduationCap, BarChart } from 'lucide-react';

const phases = [
    {
        icon: Phone,
        title: "Discovery",
        subtitle: "30 mins",
        description: "We talk. You share goals. No pitch deck."
    },
    {
        icon: Search,
        title: "Audit",
        subtitle: "Weeks 1-2",
        description: "Map workflows. Find friction. Build roadmap."
    },
    {
        icon: Hammer,
        title: "Build",
        subtitle: "Weeks 3-12",
        description: "We build systems. Tested & documented."
    },
    {
        icon: GraduationCap,
        title: "Adopt",
        subtitle: "Weeks 8-20",
        description: "Training until it sticks. Role-specific."
    },
    {
        icon: BarChart,
        title: "Optimize",
        subtitle: "Ongoing",
        description: "Track metrics. Optimize. Scale."
    }
];

export function Process() {
    return (
        <section className="min-h-screen flex flex-col justify-center py-16 px-6 bg-white" id="how-it-works">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">First call to full adoption.</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        No black boxes. No surprises.
                    </p>
                </div>

                <div className="space-y-6 relative">
                    {/* Vertical Line for timeline effect */}
                    <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-black/10 hidden md:block" />

                    {phases.map((phase, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start relative">
                            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white shrink-0 z-10 shadow-brutal-sm">
                                <phase.icon className="w-5 h-5" />
                            </div>

                            <Card className="flex-grow p-6 hover:bg-cream transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                                    <h3 className="text-xl font-bold font-space">{phase.title}</h3>
                                    <span className="inline-block px-3 py-1 rounded bg-black/5 text-sm font-bold border border-black/10">
                                        {phase.subtitle}
                                    </span>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {phase.description}
                                </p>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

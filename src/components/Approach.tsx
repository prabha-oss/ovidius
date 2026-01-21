import { Card } from './ui/Card';
import { Layers, Zap, Briefcase, Anchor, ShieldAlert } from 'lucide-react';
import { Button } from './ui/Button';

const differentiators = [
    {
        icon: Layers,
        title: "1. We're end-to-end",
        description: "Strategy, build, and adoption. One team, one relationship, one outcome: AI systems that actually work."
    },
    {
        icon: Zap,
        title: "2. We're AI-native",
        description: "We grew up building AI. We move fast, know what works, and don't waste time on theories that fail in practice."
    },
    {
        icon: Briefcase,
        title: "3. We're business-first",
        description: "We build AI that saves time or grows revenue. If the ROI doesn't make sense, we don't build it."
    },
    {
        icon: Anchor,
        title: "4. We stay until it sticks",
        description: "We don't leave until adoption sticks. If your team isn't using the system, we haven't finished the job."
    },
    {
        icon: ShieldAlert,
        title: "5. We're honest about what AI can't do",
        description: "We'll tell you when AI isn't the right solution. Our job is to get you results, not to sell you AI."
    }
];

export function Approach() {
    return (
        <section className="min-h-screen flex flex-col justify-center py-16 px-6 bg-cream" id="approach">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">What makes Ovidius different</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We're not the only AI consultancy. But we do things differently. Here's how.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {differentiators.map((item, index) => (
                        <Card key={index} className="bg-white hover:-rotate-1 transition-transform duration-300">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white mb-6">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold font-space mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </Card>
                    ))}

                    {/* CTA Card */}
                    <div className="bg-yellow-300 border-2 border-black rounded-2xl p-8 shadow-brutal flex flex-col justify-center items-center text-center">
                        <h3 className="text-2xl font-bold font-space mb-4">Ready to see the difference?</h3>
                        <Button className="w-full">Book a Call &rarr;</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

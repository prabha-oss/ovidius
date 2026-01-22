import { Card } from './ui/Card';
import { Linkedin } from 'lucide-react';

const team = [
    {
        name: "Owen Boesveld",
        role: "CEO",
        bio: "Led AI transformations in 20+ companies. Obsessed with adoption.",
        linkedin: "#"
    },
    {
        name: "Jason Reynolds",
        role: "COO",
        bio: "20+ years digital transformation. Ensures engagements deliver.",
        linkedin: "#"
    },
    {
        name: "Ben van Sprundel",
        role: "CMO",
        bio: "3x founder. Explains AI to business leaders in plain English.",
        linkedin: "#"
    },
    {
        name: "Oskar Johnston",
        role: "CRO",
        bio: "10+ years founder. Honest about what's actually possible.",
        linkedin: "#"
    },
    {
        name: "Sjaak Kuijl",
        role: "Sol. Engineer",
        bio: "Builds systems that stick. Redesigns until they are simple.",
        linkedin: "#"
    },
    {
        name: "Joao Bosco",
        role: "Sol. Engineer",
        bio: "Complex architecture expert. Focus on real-world reliability.",
        linkedin: "#"
    }
];

export function Team() {
    return (
        <section className="min-h-screen flex flex-col justify-center py-16 px-6 bg-white" id="team">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">AI-native. Business-first.</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We've shipped systems that get used. Now we do it for you.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {team.map((member, index) => (
                        <Card key={index} className="bg-cream-dark hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-full aspect-square bg-black/5 rounded-xl mb-4 flex items-center justify-center text-gray-400 font-bold text-xl uppercase tracking-widest relative overflow-hidden group">
                                {/* Placeholder for Headshot */}
                                <span className="z-10">Headshot</span>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                            </div>

                            <div className="flex items-start justify-between mb-2">
                                <div>
                                    <h3 className="text-xl font-bold font-space">{member.name}</h3>
                                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{member.role}</span>
                                </div>
                                <a href={member.linkedin} className="text-gray-400 hover:text-[#0077b5] transition-colors">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                            </div>

                            <p className="text-gray-600 leading-relaxed text-sm mt-4">
                                {member.bio}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

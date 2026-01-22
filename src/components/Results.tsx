import { Card } from './ui/Card';
import { Button } from './ui/Button';

const caseStudies = [
    {
        client: "[B2B SaaS]",
        challenge: "Support drowning. 4h replies.",
        built: ["AI triage", "Auto-drafts", "Escalus rules"],
        results: ["62% faster", "3.5h saved/rep", "+18 NPS"],
        quote: "\"We needed smarter systems, not more hires.\""
    },
    {
        client: "[Prof. Services]",
        challenge: "10h/week on proposals.",
        built: ["AI writer", "Auto-research"],
        results: ["70% faster", "31% win rate", "$2.4M rev"],
        quote: "\"Better proposals in a fraction of the time.\""
    },
    {
        client: "[E-commerce]",
        challenge: "Manual text for 5k SKUs.",
        built: ["Content engine", "Bulk gen"],
        results: ["5k SKUs in 6w", "40h freed", "+12% conv."],
        quote: "\"Cleared a 2-year backlog in 6 weeks.\""
    }
];

export function Results() {
    return (
        <section className="min-h-screen flex flex-col justify-center py-16 px-6 bg-cream-dark" id="results">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">Results, not promises.</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Actual ROI from actual deployments.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {caseStudies.map((study, index) => (
                        <Card key={index} className="flex flex-col h-full bg-white">
                            <div className="mb-6">
                                <h3 className="font-bold text-gray-500 uppercase tracking-wide text-sm mb-2">{study.client}</h3>
                                <div className="border-l-4 border-black pl-4 py-1 bg-gray-50 mb-4">
                                    <p className="text-sm font-medium italic text-gray-800">{study.quote}</p>
                                </div>
                            </div>

                            <div className="space-y-6 flex-grow">
                                <div>
                                    <h4 className="font-bold font-space mb-2">Challenge</h4>
                                    <p className="text-sm text-gray-600">{study.challenge}</p>
                                </div>

                                <div>
                                    <h4 className="font-bold font-space mb-2">What We Built</h4>
                                    <ul className="text-sm text-gray-600 list-disc list-inside">
                                        {study.built.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold font-space mb-2 bg-yellow-200 inline-block px-1">Results</h4>
                                    <ul className="text-sm font-bold text-black space-y-1">
                                        {study.results.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-black rounded-full" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <Button size="lg" className="px-8">
                        Want results like these? Book a call &rarr;
                    </Button>
                </div>
            </div>
        </section>
    );
}

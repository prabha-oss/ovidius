import { Card } from './ui/Card';
import { Button } from './ui/Button';

const caseStudies = [
    {
        client: "[B2B SaaS]", // Placeholder name or generic title if specific name not provided
        challenge: "Support team drowning in tickets. 4-hour average response time. Customer satisfaction dropping.",
        built: ["AI triage system", "AI draft responses", "Escalation rules"],
        results: ["62% reduction in response time", "3.5 hours/day saved per rep", "18-point NPS increase"],
        quote: "\"We thought we needed to hire 3 more people. Turns out we needed smarter systems.\""
    },
    {
        client: "[Professional Services]",
        challenge: "Partners spending 10+ hours/week on proposal writing. Win rate stagnant at 22%.",
        built: ["AI proposal generator", "Automated research", "Review workflow"],
        results: ["70% reduction in writing time", "31% win rate (up from 22%)", "$2.4M additional revenue"],
        quote: "\"The proposals are better than what we were writing manually. And they take a fraction of the time.\""
    },
    {
        client: "[E-commerce]",
        challenge: "Marketing team manually writing product descriptions for 5,000+ SKUs. Backlog growing faster than they could write.",
        built: ["AI content engine", "Bulk generation workflow", "Human review queue"],
        results: ["5,000 descriptions in 6 weeks", "40 hours/week freed up", "12% conversion increase"],
        quote: "\"We cleared a backlog that had been haunting us for two years. In six weeks.\""
    }
];

export function Results() {
    return (
        <section className="min-h-screen flex flex-col justify-center py-16 px-6 bg-cream-dark" id="results">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">Results, not promises.</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Here's what happens when AI gets adopted — not just installed.
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

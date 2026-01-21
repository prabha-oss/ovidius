import { Card } from './ui/Card';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Button } from './ui/Button';

const ideal = [
    "You're a mid-sized or enterprise company (50+ employees)",
    "You've tried AI before and want to do it right this time",
    "You have leadership buy-in for AI transformation",
    "You're willing to invest time in the process, not just money",
    "You want systems that your team actually uses",
    "You're thinking in terms of quarters and years"
];

const notIdeal = [
    "You're looking for a single chatbot or one-off tool",
    "You want to 'test the waters' without committing resources",
    "You need results in 2 weeks (the audit takes that long)",
    "Your team isn't willing to change how they work",
    "You're hoping AI will fix a broken process",
    "You're a startup under 50 people"
];

export function TargetAudience() {
    return (
        <section className="min-h-screen flex flex-col justify-center py-16 px-6 bg-cream" id="who-this-is-for">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">We're selective. Here's why.</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We work with companies serious about AI adoption — not companies looking for a quick fix or a checkbox.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <Card className="bg-white hover:-translate-y-1 transition-transform border-t-8 border-t-green-500">
                        <h3 className="text-xl font-bold font-space mb-4 flex items-center gap-3">
                            <CheckCircle2 className="w-6 h-6 text-green-500" />
                            This is for you if:
                        </h3>
                        <ul className="space-y-4">
                            {ideal.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-lg text-gray-700">
                                    <span className="font-bold text-green-500 mt-1">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </Card>

                    <Card className="bg-white hover:-translate-y-1 transition-transform border-t-8 border-t-red-500">
                        <h3 className="text-xl font-bold font-space mb-4 flex items-center gap-3">
                            <XCircle className="w-6 h-6 text-red-500" />
                            This probably isn't for you if:
                        </h3>
                        <ul className="space-y-4">
                            {notIdeal.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-lg text-gray-700">
                                    <span className="font-bold text-red-500 mt-1">✗</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>

                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-xl font-bold font-space mb-4">Why we're picky:</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        AI transformation is hard. teams resist new tools. If we take on a client who isn't ready, we both lose.
                        When we say yes to an engagement, we're committing our best people for months.
                    </p>
                    <Button size="lg" className="px-8">
                        Think you're a fit? Let's talk &rarr;
                    </Button>
                </div>
            </div>
        </section>
    );
}

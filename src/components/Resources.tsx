import { Card } from './ui/Card';
import { ArrowRight, FileText, Download } from 'lucide-react';

const articles = [
    {
        title: "Why 90% of AI Pilots Fail (And How to Be the 10%)",
        description: "The hidden reasons AI projects die between pilot and production.",
        link: "#"
    },
    {
        title: "The AI Audit Framework We Use With Every Client",
        description: "A step-by-step breakdown of how we identify and prioritize AI opportunities.",
        link: "#"
    },
    {
        title: "AI Adoption: The Phase Everyone Skips",
        description: "Your AI system works perfectly. Nobody uses it. Here's why adoption fails.",
        link: "#"
    }
];

const downloads = [
    {
        title: "The AI Opportunity Scorecard",
        type: "PDF Guide"
    },
    {
        title: "50 AI Use Cases by Department",
        type: "PDF Checklist"
    }
];

export function Resources() {
    return (
        <section className="min-h-screen flex flex-col justify-center py-16 px-6 bg-cream" id="resources">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">Learn how AI transformation actually works.</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        No hype. No jargon. Just practical insights from teams who've done it.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-bold font-space mb-4 flex items-center gap-2">
                            <FileText className="w-5 h-5" /> Featured Articles
                        </h3>
                        <div className="space-y-4">
                            {articles.map((article, index) => (
                                <Card key={index} className="bg-white hover:bg-gray-50 transition-colors group cursor-pointer">
                                    <h4 className="font-bold font-space text-lg mb-2 group-hover:underline">{article.title}</h4>
                                    <p className="text-gray-600 text-sm mb-4">{article.description}</p>
                                    <span className="text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Read article <ArrowRight className="w-4 h-4" />
                                    </span>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold font-space mb-4 flex items-center gap-2">
                            <Download className="w-5 h-5" /> Free Resources
                        </h3>
                        <div className="space-y-4">
                            {downloads.map((item, index) => (
                                <Card key={index} className="bg-black text-white hover:bg-gray-900 transition-colors cursor-pointer flex items-center justify-between">
                                    <div>
                                        <h4 className="font-bold font-space text-lg">{item.title}</h4>
                                        <span className="text-xs text-gray-400 uppercase tracking-widest">{item.type}</span>
                                    </div>
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                        <Download className="w-5 h-5" />
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

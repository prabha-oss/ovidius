import { Card } from './ui/Card';
import { Lock, Eye, Server, ShieldCheck, FileText } from 'lucide-react';

const commitments = [
    {
        icon: FileText,
        title: "NDAs from day one",
        description: "Your information is protected before we see a single document."
    },
    {
        icon: Eye,
        title: "Scoped access",
        description: "We only request access to what we need. When the engagement ends, access ends."
    },
    {
        icon: Server,
        title: "Your infrastructure",
        description: "We build in your environment, not ours. Your data never leaves your systems."
    },
    {
        icon: ShieldCheck,
        title: "Compliance-ready",
        description: "We adapt to GDPR, HIPAA, SOC 2, and other industry requirements."
    }
];

export function Security() {
    return (
        <section className="min-h-screen flex flex-col justify-center py-16 px-6 bg-white" id="security">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">Your data stays yours. Always.</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Security isn't a feature. It's the foundation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {commitments.map((item, index) => (
                        <Card key={index} className="bg-cream hover:bg-white transition-colors">
                            <item.icon className="w-8 h-8 mb-4 text-gray-800" />
                            <h3 className="font-bold font-space mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.description}</p>
                        </Card>
                    ))}
                </div>

                <div className="bg-black text-white p-8 rounded-2xl border-2 border-gray-800">
                    <h3 className="text-2xl font-bold font-space mb-6 border-b border-gray-700 pb-4">Common Questions</h3>
                    <div className="grid md:grid-cols-3 gap-8 text-gray-300">
                        <div>
                            <h4 className="font-bold text-white mb-2">Do you upgrade models with our data?</h4>
                            <p className="text-sm">No. Your data is used only for your systems. Period.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-2">Can we use on-premise AI?</h4>
                            <p className="text-sm">Yes. We support local LLM deployments for strict requirements.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-2">What happens after?</h4>
                            <p className="text-sm">We delete everything. All access revoked. All local copies destroyed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

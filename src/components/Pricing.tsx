import { Card } from './ui/Card';
import { Button } from './ui/Button';

export function Pricing() {
    return (
        <section className="min-h-screen flex flex-col justify-center py-16 px-6 bg-white" id="pricing">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">What does this cost?</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We don't publish fixed prices because every engagement is different. But we can tell you how we think about pricing.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div>
                        <h3 className="text-xl font-bold font-space mb-4">Our Pricing Principles</h3>
                        <div className="space-y-4">
                            <Card className="bg-cream">
                                <h4 className="font-bold font-space text-lg mb-2">1. ROI-aligned</h4>
                                <p className="text-gray-600">Our fees should be a fraction of the value we create. If we can't identify at least 3-5x ROI, we won't take the project.</p>
                            </Card>
                            <Card className="bg-cream">
                                <h4 className="font-bold font-space text-lg mb-2">2. Transparent</h4>
                                <p className="text-gray-600">Fixed fees for each phase. No hourly billing spirals. No surprise invoices.</p>
                            </Card>
                            <Card className="bg-cream">
                                <h4 className="font-bold font-space text-lg mb-2">3. Flexible</h4>
                                <p className="text-gray-600">Start with just the audit. Move to build if it makes sense. We adapt to your needs.</p>
                            </Card>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold font-space mb-4">Typical Investment Ranges</h3>
                        <div className="border-2 border-black rounded-xl overflow-hidden shadow-brutal-sm">
                            <table className="w-full text-left bg-white">
                                <thead className="bg-black text-white">
                                    <tr>
                                        <th className="p-4 font-space">Phase</th>
                                        <th className="p-4 font-space">Timeline</th>
                                        <th className="p-4 font-space">Investment</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y-2 divide-black/10">
                                    <tr>
                                        <td className="p-4 font-medium">AI Audit & Strategy</td>
                                        <td className="p-4 text-gray-600">2 weeks</td>
                                        <td className="p-4 font-bold">€15k – €30k</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium">AI Transformation</td>
                                        <td className="p-4 text-gray-600">2-4 months</td>
                                        <td className="p-4 font-bold">€50k – €150k</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium">Adoption & Training</td>
                                        <td className="p-4 text-gray-600">Ongoing</td>
                                        <td className="p-4 font-bold">€5k – €15k /mo</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="p-4 bg-gray-50 text-xs text-gray-500 italic border-t-2 border-black/10">
                                * Ranges depend on company size, complexity, and scope.
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <h4 className="font-bold font-space mb-2">How to get a real number:</h4>
                            <p className="text-gray-600 mb-4 text-sm">Book a discovery call. We'll give you an honest range before you commit.</p>
                            <Button className="w-full">Get a custom estimate &rarr;</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

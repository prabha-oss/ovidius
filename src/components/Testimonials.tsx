import { Card } from './ui/Card';
import { Star } from 'lucide-react';

const testimonials = [
    {
        quote: "BenAI completely transformed our SEO strategy. We saw a 300% increase in organic traffic within just two months.",
        author: "Sarah Chen",
        role: "CMO at TechFlow",
        avatar: "SC"
    },
    {
        quote: "The recruiting agents are a game changer. We've cut our hiring time in half and the candidate quality has never been better.",
        author: "Marcus Rodriguez",
        role: "Founder, ScaleUp",
        avatar: "MR"
    },
    {
        quote: "Implementation was seamless. The custom agents integrated with our existing Slack workflows perfectly.",
        author: "Emily Watson",
        role: "CTO, DataSystems",
        avatar: "EW"
    }
];

export function Testimonials() {
    return (
        <section className="min-h-screen flex flex-col justify-center py-20 px-6 bg-cream border-b-2 border-black" id="testimonials">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold font-space mb-12 text-center">Trusted by Industry Leaders</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-white hover:-rotate-1 transition-transform cursor-default">
                            <div className="flex gap-1 mb-6 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>

                            <p className="text-lg text-gray-700 mb-8 font-medium italic">
                                "{testimonial.quote}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold font-space">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-bold font-space">{testimonial.author}</div>
                                    <div className="text-sm text-gray-600 uppercase tracking-wide">{testimonial.role}</div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

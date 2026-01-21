import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "How long does this take?",
        answer: "The Audit takes 2 weeks. The first Build phase typically takes 4-8 weeks. Adoption support is ongoing, usually for at least 90 days after launch to ensure the systems stick."
    },
    {
        question: "Do we need a data science team?",
        answer: "No. We build the systems, and we train your existing team (operations, sales, marketing) to run them. If you do have a data team, we collaborate with them to accelerate their roadmap."
    },
    {
        question: "Is our data safe?",
        answer: "Yes. We sign NDAs before our first call. We build everything in your environment (your cloud, your servers). Your data never leaves your control and is never used to train our models."
    },
    {
        question: "What if it doesn't work?",
        answer: "We structure our engagements with clear KPIs. For the Build phase, if we don't hit the agreed success metrics (e.g., 'reduce processing time by 50%'), we don't charge the final performance fee. Seriously."
    },
    {
        question: "Can you work with our legacy software?",
        answer: "Almost always. If it has an API, a database, or even just a user interface, we can build an AI layer on top of it. We specialize in connecting modern AI to boring old enterprise software."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="min-h-screen flex flex-col justify-center py-16 px-6 bg-white" id="faq">
            <div className="max-w-4xl mx-auto w-full">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">Questions we get asked.</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-2 border-black rounded-xl overflow-hidden bg-white shadow-brutal-sm">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-cream transition-colors"
                            >
                                <span className="font-bold font-space text-lg md:text-xl pr-8">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="w-6 h-6 shrink-0" />
                                ) : (
                                    <Plus className="w-6 h-6 shrink-0" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden bg-gray-50 border-t-2 border-black/10"
                                    >
                                        <p className="p-6 text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

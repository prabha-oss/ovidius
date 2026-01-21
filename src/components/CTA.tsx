import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function CTA() {
    return (
        <section className="min-h-screen flex flex-col justify-center py-16 px-6 bg-black text-white relative overflow-hidden" id="cta">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold font-space mb-6 leading-tight"
                >
                    Stop experimenting. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                        Start winning.
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto font-light"
                >
                    You can keep reading about AI, or you can build the system that doubles your capacity.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center gap-6"
                >
                    <Button
                        size="lg"
                        className="bg-white text-black hover:bg-gray-200 border-none text-xl px-12 py-8 rounded-full"
                    >
                        Book your audit <ArrowRight className="ml-2 w-6 h-6" />
                    </Button>
                    <p className="text-sm text-gray-500">
                        No commitment. No pitch deck. just a conversation.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

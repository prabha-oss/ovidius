import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-white pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1">
                        <span className="font-space text-2xl font-bold tracking-tight block mb-6">Ovidius AI</span>
                        <p className="text-gray-600 mb-6">
                            Enterprise AI systems that actually work. Strategy, Build, Adoption.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold font-space text-lg mb-6">Solutions</h4>
                        <ul className="space-y-4 text-gray-600">
                            <li><a href="#solutions" className="hover:text-black transition-colors">AI Strategy</a></li>
                            <li><a href="#solutions" className="hover:text-black transition-colors">AI Transformation</a></li>
                            <li><a href="#solutions" className="hover:text-black transition-colors">AI Adoption</a></li>
                            <li><a href="#integrations" className="hover:text-black transition-colors">Integrations</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold font-space text-lg mb-6">Company</h4>
                        <ul className="space-y-4 text-gray-600">
                            <li><a href="#results" className="hover:text-black transition-colors">Case Studies</a></li>
                            <li><a href="#team" className="hover:text-black transition-colors">Team</a></li>
                            <li><a href="#process" className="hover:text-black transition-colors">How It Works</a></li>
                            <li><a href="#pricing" className="hover:text-black transition-colors">Pricing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold font-space text-lg mb-6">Resources</h4>
                        <ul className="space-y-4 text-gray-600">
                            <li><a href="#resources" className="hover:text-black transition-colors">Articles</a></li>
                            <li><a href="#resources" className="hover:text-black transition-colors">Downloads</a></li>
                            <li><a href="#faq" className="hover:text-black transition-colors">FAQ</a></li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <a href="mailto:hello@ovidius.ai" className="hover:text-black transition-colors">hello@ovidius.ai</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t-2 border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© 2024 Ovidius AI. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

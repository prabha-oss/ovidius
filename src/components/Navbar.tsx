import { Button } from './ui/Button';
import { Menu } from 'lucide-react';

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-cream/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {/* Logo */}
                    <span className="font-space text-2xl font-bold tracking-tight">Ovidius AI</span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#solutions" className="font-medium hover:text-gray-600 transition-colors">Solutions</a>
                    <a href="#results" className="font-medium hover:text-gray-600 transition-colors">Results</a>
                    <a href="#process" className="font-medium hover:text-gray-600 transition-colors">How It Works</a>
                    <a href="#team" className="font-medium hover:text-gray-600 transition-colors">Team</a>
                    <a href="#resources" className="font-medium hover:text-gray-600 transition-colors">Resources</a>
                    <a href="#faq" className="font-medium hover:text-gray-600 transition-colors">FAQ</a>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <Button size="sm">Book a Call</Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden p-2">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </nav>
    );
}

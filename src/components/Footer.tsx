import { Droplets, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-brand-red p-2 rounded-lg">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter text-white">
                PARADOX
              </span>
            </Link>
            <p className="text-brand-light/60 max-w-sm mb-8">
              The soda that defies logic. Bold flavors, zero apologies. Join the rebellion against boring beverages.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-light hover:bg-brand-accent hover:text-brand-dark transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-light hover:bg-brand-accent hover:text-brand-dark transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-light hover:bg-brand-accent hover:text-brand-dark transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-brand-light/60 hover:text-brand-accent transition-colors">Flavors</Link></li>
              <li><Link to="/quiz" className="text-brand-light/60 hover:text-brand-accent transition-colors">Flavor Quiz</Link></li>
              <li><Link to="/blueprint" className="text-brand-light/60 hover:text-brand-accent transition-colors">Strategy Blueprint</Link></li>
              <li><a href="#" className="text-brand-light/60 hover:text-brand-accent transition-colors">Merch</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-brand-light/60 hover:text-brand-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-brand-light/60 hover:text-brand-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-brand-light/60 hover:text-brand-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-brand-light/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Paradox Soda Co. All rights reserved. Not your average soda.</p>
        </div>
      </div>
    </footer>
  );
}

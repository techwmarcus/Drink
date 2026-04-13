import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { Menu, X, Droplets } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Flavor Quiz", path: "/quiz" },
    { name: "Strategy Blueprint", path: "/blueprint" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-red p-2 rounded-lg transform group-hover:rotate-12 transition-transform duration-300">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter text-white">
              PARADOX
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-accent",
                  location.pathname === link.path
                    ? "text-brand-accent"
                    : "text-brand-light/70"
                )}
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-brand-light text-brand-dark px-6 py-2.5 rounded-full font-bold text-sm hover:bg-brand-accent transition-colors transform hover:scale-105 duration-200">
              Get Paradox
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-light p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-2 text-base font-medium rounded-md",
                    location.pathname === link.path
                      ? "text-brand-accent bg-white/5"
                      : "text-brand-light/70 hover:text-brand-accent hover:bg-white/5"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <button className="w-full mt-4 bg-brand-red text-white px-6 py-3 rounded-full font-bold text-base hover:bg-red-600 transition-colors">
                Get Paradox
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

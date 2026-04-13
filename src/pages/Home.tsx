import { motion } from "motion/react";
import { ArrowRight, Star, Zap, Flame, Sparkles, Droplets } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark to-brand-red/20 z-0" />
        
        {/* Abstract background shapes */}
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-brand-red/10 blur-[120px] z-0"
        />
        <motion.div 
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-brand-purple/10 blur-[120px] z-0"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                <Flame className="w-4 h-4 text-brand-accent" />
                <span className="text-sm font-medium text-brand-accent uppercase tracking-wider">New Flavor Drop</span>
              </div>
              
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-6">
                DEFY <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-accent">
                  THE USUAL.
                </span>
              </h1>
              
              <p className="text-xl text-brand-light/80 mb-10 max-w-lg leading-relaxed">
                23 flavors? Try infinite possibilities. Paradox is the bold, rebellious soda that tastes like nothing else and everything you want.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-brand-red text-white rounded-full font-bold text-lg hover:bg-red-600 transition-all transform hover:scale-105 shadow-[0_0_40px_-10px_rgba(217,30,54,0.5)] flex items-center justify-center gap-2 group">
                  Claim Your Stash
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link to="/quiz" className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5 text-brand-accent" />
                  Find Your Flavor
                </Link>
              </div>
              
              <div className="mt-12 flex items-center gap-4 text-sm text-brand-light/60 font-medium">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" className="w-10 h-10 rounded-full border-2 border-brand-dark" referrerPolicy="no-referrer" />
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex text-brand-accent">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span>Join 50,000+ rebels</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="relative hidden lg:block"
            >
              {/* Abstract Can Representation */}
              <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-red via-[#ff4d6d] to-brand-accent rounded-[40px] shadow-2xl transform -rotate-6 transition-transform hover:rotate-0 duration-500 flex items-center justify-center overflow-hidden border border-white/20">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
                  <div className="text-center z-10 transform -rotate-90 origin-center scale-150 opacity-10">
                     <span className="font-display font-black text-9xl tracking-tighter text-black">PARADOX</span>
                  </div>
                  <div className="z-20 flex flex-col items-center">
                    <Droplets className="w-24 h-24 text-white mb-4 drop-shadow-lg" />
                    <span className="font-display font-bold text-4xl text-white tracking-widest drop-shadow-md">ORIGINAL</span>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-8 -right-8 bg-brand-dark p-4 rounded-2xl border border-white/10 shadow-xl backdrop-blur-md">
                  <span className="font-bold text-brand-accent">Zero Sugar</span>
                </motion.div>
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-8 -left-8 bg-brand-dark p-4 rounded-2xl border border-white/10 shadow-xl backdrop-blur-md">
                  <span className="font-bold text-brand-purple">100% Chaos</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Highlights / Marquee */}
      <section className="py-10 bg-brand-red overflow-hidden border-y border-white/10">
        <div className="flex gap-8 whitespace-nowrap">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 items-center"
          >
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 text-white font-display font-bold text-2xl uppercase tracking-widest">
                <Zap className="w-8 h-8 text-brand-dark" />
                <span>Not Your Grandma's Soda</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Flavor Experience */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">CHOOSE YOUR <span className="text-brand-accent">CHAOS</span></h2>
            <p className="text-xl text-brand-light/60 max-w-2xl mx-auto">Three distinct personalities. One undeniable attitude. Which Paradox are you?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "THE ORIGINAL", desc: "Cherry, vanilla, and a hint of rebellion.", color: "from-brand-red to-red-900", tag: "Classic" },
              { name: "MIDNIGHT VOID", desc: "Dark berry, plum, and zero sugar.", color: "from-brand-purple to-purple-900", tag: "Zero Sugar" },
              { name: "SOLAR FLARE", desc: "Spicy citrus and tropical heat.", color: "from-brand-accent to-orange-600", tag: "Spicy" }
            ].map((flavor, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-8 cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${flavor.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className="flex justify-between items-start mb-12 relative z-10">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider">{flavor.tag}</span>
                  <ArrowRight className="w-6 h-6 text-white/30 group-hover:text-white transition-colors transform group-hover:-rotate-45" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-display font-bold mb-4">{flavor.name}</h3>
                  <p className="text-brand-light/60">{flavor.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture / CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-accent text-brand-dark" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-8 text-brand-dark">
            JOIN THE UNDERGROUND.
          </h2>
          <p className="text-xl font-medium mb-10 text-brand-dark/80">
            Get early access to secret drops, exclusive merch, and 15% off your first case.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email..." 
              className="flex-1 bg-white/90 border-2 border-brand-dark rounded-full px-6 py-4 text-lg text-brand-dark placeholder:text-brand-dark/50 focus:outline-none focus:ring-4 focus:ring-brand-dark/20 font-medium"
            />
            <button className="bg-brand-dark text-brand-accent px-8 py-4 rounded-full font-bold text-lg hover:bg-black transition-colors whitespace-nowrap">
              Unlock Access
            </button>
          </form>
          <p className="mt-4 text-sm font-medium text-brand-dark/60">We don't spam. We just drop heat.</p>
        </div>
      </section>
    </div>
  );
}

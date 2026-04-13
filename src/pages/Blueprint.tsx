import { motion } from "motion/react";

export function Blueprint() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-brand-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <div className="mb-12 border-b border-white/10 pb-8">
            <h1 className="text-5xl font-display font-bold text-brand-accent mb-4">Paradox Soda: Website Strategy Blueprint</h1>
            <p className="text-xl text-brand-light/70">A high-converting, modern, visually engaging website structure for a bold, fun, and slightly rebellious soda brand.</p>
          </div>

          <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">1. SITEMAP</h2>
          <ul className="space-y-2 text-brand-light/80">
            <li><strong>Homepage:</strong> The high-energy conversion engine.</li>
            <li><strong>Product Pages (The Stash):</strong> Deep dives into each flavor profile.</li>
            <li><strong>Flavor Finder (Interactive Quiz):</strong> Gamified lead capture.</li>
            <li><strong>About / The Rebellion:</strong> Brand story and manifesto.</li>
            <li><strong>Store Locator (Find the Drop):</strong> Interactive map.</li>
            <li><strong>Merch Shop (The Gear):</strong> Apparel and accessories.</li>
            <li><strong>Promotions / Campaigns:</strong> Limited-time drops and collabs.</li>
            <li><strong>Social Hub (The Underground):</strong> UGC and social feeds.</li>
            <li><strong>Contact / Support:</strong> Help center.</li>
          </ul>

          <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">2. HOMEPAGE (HIGH CONVERTING)</h2>
          
          <h3 className="text-xl font-bold text-brand-accent mt-8 mb-4">Hero Section</h3>
          <ul className="list-disc pl-6 space-y-2 text-brand-light/80">
            <li><strong>Headline:</strong> "DEFY THE USUAL." or "100% CHAOS. ZERO APOLOGIES."</li>
            <li><strong>Subheadline:</strong> "23 flavors? Try infinite possibilities. Paradox is the bold, rebellious soda that tastes like nothing else and everything you want."</li>
            <li><strong>CTA:</strong> "Claim Your Stash" (Primary, Red), "Find Your Flavor" (Secondary, Outline)</li>
            <li><strong>Visuals:</strong> A 3D floating can of Paradox that rotates on scroll, surrounded by abstract, glowing neon shapes (red and purple).</li>
          </ul>

          <h3 className="text-xl font-bold text-brand-accent mt-8 mb-4">Social Proof / Popularity</h3>
          <ul className="list-disc pl-6 space-y-2 text-brand-light/80">
            <li><strong>Marquee:</strong> A fast-moving, infinite scrolling text banner: "NOT YOUR GRANDMA's SODA ⚡️ SOLD OUT IN LA ⚡️ RESTOCKING SOON ⚡️"</li>
            <li><strong>UGC Strip:</strong> TikTok and IG style video thumbnails of creators reacting to the taste.</li>
          </ul>

          <h3 className="text-xl font-bold text-brand-accent mt-8 mb-4">Product Highlights (Flavor Experience)</h3>
          <ul className="list-disc pl-6 space-y-2 text-brand-light/80">
            <li><strong>Layout:</strong> 3-column bento box style.</li>
            <li><strong>Content:</strong> "The Original" (Classic), "Midnight Void" (Zero Sugar), "Solar Flare" (Spicy).</li>
            <li><strong>Interaction:</strong> Hovering over a flavor changes the entire background color of the section to match the flavor profile.</li>
          </ul>

          <h3 className="text-xl font-bold text-brand-accent mt-8 mb-4">Email/SMS Capture (The Underground)</h3>
          <ul className="list-disc pl-6 space-y-2 text-brand-light/80">
            <li><strong>Headline:</strong> "JOIN THE UNDERGROUND."</li>
            <li><strong>Offer:</strong> "Get early access to secret drops, exclusive merch, and 15% off your first case."</li>
            <li><strong>CTA:</strong> "Unlock Access"</li>
          </ul>

          <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">3. PRODUCT PAGE</h2>
          <ul className="list-disc pl-6 space-y-2 text-brand-light/80">
            <li><strong>Layout:</strong> Split screen. Left side: Sticky 3D can that users can spin. Right side: Scrolling content.</li>
            <li><strong>Sensory Descriptions:</strong> "A chaotic blend of dark cherry, smooth vanilla, and a kick that wakes you up. It shouldn't work, but it does."</li>
            <li><strong>Positioning:</strong> "Why this is different: No boring aftertaste. No generic cola vibes. Just pure, unadulterated flavor."</li>
            <li><strong>CTA Strategy:</strong> Sticky "Add to Cart" bar at the bottom of the screen on mobile.</li>
          </ul>

          <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">4. INTERACTIVE EXPERIENCE: "Find Your Flavor Personality"</h2>
          <ul className="list-disc pl-6 space-y-2 text-brand-light/80">
            <li><strong>Concept:</strong> A fast, 3-question quiz to match users with a flavor.</li>
            <li><strong>Questions:</strong> 
              <br/>1. "It's 2 AM. Where are you?" (Gaming / Diner / Scrolling)
              <br/>2. "Pick a vibe:" (Neon / Vintage Leather / Chaos)
            </li>
            <li><strong>Conversion:</strong> At the end of the quiz, users must enter their email to "Unlock Your Flavor Profile & Get 15% Off".</li>
          </ul>

          <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">5. BRAND STORY PAGE</h2>
          <ul className="list-disc pl-6 space-y-2 text-brand-light/80">
            <li><strong>Narrative:</strong> "We got bored of the 'cola wars'. So we started a rebellion."</li>
            <li><strong>Emotional Hook:</strong> Appealing to the desire to stand out and reject the mundane.</li>
            <li><strong>Visuals:</strong> Gritty, behind-the-scenes polaroids, bold typography, glitch effects.</li>
          </ul>

          <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">6. CONVERSION STRATEGY</h2>
          <ul className="list-disc pl-6 space-y-2 text-brand-light/80">
            <li><strong>Scarcity:</strong> "Limited Drop" tags on specific flavors or merch.</li>
            <li><strong>Curiosity:</strong> The quiz drives engagement before asking for a sale.</li>
            <li><strong>Identity:</strong> Positioning the brand as a lifestyle choice, not just a drink.</li>
            <li><strong>Funnel:</strong> Homepage Hero → Flavor Quiz → Email Capture → Discount Code → Checkout.</li>
          </ul>

          <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">7. UI/UX DESIGN SYSTEM</h2>
          <ul className="list-disc pl-6 space-y-2 text-brand-light/80">
            <li><strong>Colors:</strong> Brand Dark (#0A0A0A), Brand Red (#D91E36), Accent Yellow (#FFD166), Deep Purple (#7209B7).</li>
            <li><strong>Typography:</strong> 'Space Grotesk' for bold, brutalist headings. 'Inter' for clean, readable body text.</li>
            <li><strong>Buttons:</strong> Pill-shaped, high contrast, with slight drop shadows that glow on hover.</li>
            <li><strong>Mobile-First:</strong> Large tap targets (48px+), bottom-sheet menus instead of dropdowns.</li>
          </ul>

          <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">8. MICROINTERACTIONS</h2>
          <ul className="list-disc pl-6 space-y-2 text-brand-light/80">
            <li><strong>Hover:</strong> Buttons scale up slightly (1.05x) and cast a colored glow.</li>
            <li><strong>Scroll:</strong> Elements reveal with a slight upward fade. The marquee speeds up when the user scrolls fast.</li>
            <li><strong>Easter Egg:</strong> Clicking the logo 5 times rapidly turns the site into a "hacked" retro terminal theme.</li>
          </ul>

          <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">9. PERFORMANCE + MODERN FEATURES</h2>
          <ul className="list-disc pl-6 space-y-2 text-brand-light/80">
            <li><strong>Speed:</strong> Use WebP/AVIF for images. Lazy load the 3D can models.</li>
            <li><strong>Personalization:</strong> If a user returns after taking the quiz, the homepage hero changes to feature their matched flavor.</li>
          </ul>

          <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">10. FINAL TOUCH: CAMPAIGNS & TAGLINES</h2>
          <h3 className="text-xl font-bold text-brand-accent mt-8 mb-4">Campaign Ideas:</h3>
          <ol className="list-decimal pl-6 space-y-2 text-brand-light/80">
            <li><strong>"The 24th Flavor":</strong> A crowdsourced campaign where users vote on the next crazy flavor combination.</li>
            <li><strong>"Midnight Drops":</strong> Exclusive merch or limited-edition cans that only become available to buy on the site between 12 AM and 2 AM.</li>
            <li><strong>"Glitch in the Matrix":</strong> Randomly, the site will "glitch" and offer a 50% off code that disappears in 60 seconds.</li>
          </ol>
          
          <h3 className="text-xl font-bold text-brand-accent mt-8 mb-4">Tagline Suggestions:</h3>
          <ul className="list-disc pl-6 space-y-2 text-brand-light/80">
            <li>"Defy the Usual."</li>
            <li>"Taste the Rebellion."</li>
            <li>"100% Chaos. Zero Apologies."</li>
          </ul>

        </motion.div>
      </div>
    </div>
  );
}

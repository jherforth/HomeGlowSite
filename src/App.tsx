import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  MessageCircle, 
  ArrowRight, 
  Calendar, 
  CloudSun, 
  Image as ImageIcon, 
  CheckSquare, 
  Server, 
  Code, 
  Users,
  Layout,
  ChevronRight,
  ExternalLink,
  Menu,
  X
} from 'lucide-react';

// --- Pseudo-Preview Component (Inspired by the attached image) ---
const AppPreview = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-2xl mx-auto aspect-square md:aspect-[4/3] bg-[#1a1a3a] rounded-[2.5rem] p-4 md:p-6 shadow-2xl border-[12px] border-[#0a0a1a] overflow-hidden group"
    >
      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
      
      <div className="grid grid-cols-12 grid-rows-12 gap-3 h-full">
        {/* Top Left: Calendar Grid */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="col-span-8 row-span-7 bg-[#4a86b4] rounded-3xl p-4 border-4 border-[#0a0a1a] flex flex-col gap-2"
        >
          <div className="w-2/3 h-4 bg-[#f1c40f] rounded-full mb-2" />
          <div className="grid grid-cols-5 gap-2 flex-1">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.02 }}
                className="bg-[#1e5a9a] rounded-lg border-2 border-[#0a0a1a]" 
              />
            ))}
          </div>
        </motion.div>

        {/* Top Right: Status Bars */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="col-span-4 row-span-7 bg-[#4a86b4] rounded-3xl p-4 border-4 border-[#0a0a1a] flex gap-3"
        >
          <div className="flex-1 bg-[#d35400] rounded-xl border-4 border-[#0a0a1a]" />
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex-1 bg-[#d35400] rounded-xl border-4 border-[#0a0a1a]" />
            <div className="h-1/3 bg-[#d35400] rounded-xl border-4 border-[#0a0a1a]" />
          </div>
        </motion.div>

        {/* Bottom Left: Chores/Status */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="col-span-7 row-span-5 bg-[#4a86b4] rounded-3xl p-4 border-4 border-[#0a0a1a] flex flex-col gap-3"
        >
          <div className="flex justify-around items-center mb-1">
            {[0, 1, 2].map(i => (
              <div key={i} className="w-6 h-6 rounded-full bg-[#1e5a9a] border-2 border-[#0a0a1a]" />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2 flex-1">
            {[
              '#27ae60', '#795548', '#27ae60',
              '#27ae60', '#795548', '#27ae60',
              '#795548', '#27ae60', '#795548'
            ].map((color, i) => (
              <motion.div 
                key={i}
                whileHover={{ filter: 'brightness(1.2)' }}
                className="rounded-lg border-2 border-[#0a0a1a]"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom Right: Large Widget */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="col-span-5 row-span-5 bg-[#4a86b4] rounded-3xl p-4 border-4 border-[#0a0a1a] flex items-center justify-center"
        >
          <div className="w-full h-full bg-[#f1c40f] rounded-2xl border-4 border-[#0a0a1a] relative">
            <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#f1c40f] border-2 border-[#0a0a1a]" />
          </div>
        </motion.div>
      </div>

      {/* Bottom Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {[0, 1, 2, 3].map(i => (
          <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#f1c40f] border-2 border-[#0a0a1a]" />
        ))}
      </div>
      <div className="absolute bottom-2 left-4 w-6 h-3 bg-[#f1c40f] rounded-sm border-2 border-[#0a0a1a]" />
    </motion.div>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [latestVersion, setLatestVersion] = useState('v1.3');

  useEffect(() => {
    fetch('https://api.github.com/repos/jherforth/HomeGlow/releases/latest')
      .then(res => res.json())
      .then(data => {
        if (data.tag_name) {
          setLatestVersion(data.tag_name);
        }
      })
      .catch(err => console.error('Failed to fetch latest version:', err));
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-blue-800 selection:text-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://homeglow.dev/wp-content/uploads/2026/03/cropped-HomeGlowLogo-170x134.png" 
              alt="HomeGlow Logo" 
              className="h-8 w-auto"
              referrerPolicy="no-referrer"
            />
            <span className="font-bold text-xl tracking-tight text-zinc-900">HomeGlow</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-zinc-600 hover:text-blue-800 transition-colors">Features</a>
            <a href="#why" className="text-sm font-medium text-zinc-600 hover:text-blue-800 transition-colors">Why HomeGlow</a>
            <a href="#support" className="text-sm font-medium text-zinc-600 hover:text-blue-800 transition-colors">Support</a>
            <div className="h-4 w-px bg-zinc-200" />
            <a 
              href="https://github.com/jherforth/HomeGlow" 
              target="_blank" 
              rel="noreferrer"
              className="text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://demo.homeglow.dev" 
              target="_blank" 
              rel="noreferrer"
              className="bg-blue-800 hover:bg-blue-900 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-900/10 hover:shadow-blue-900/20 active:scale-95"
            >
              Try Demo
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-zinc-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-b border-zinc-200 overflow-hidden"
            >
              <div className="px-4 py-6 flex flex-col gap-4">
                <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-zinc-900">Features</a>
                <a href="#why" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-zinc-900">Why HomeGlow</a>
                <a href="#support" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-zinc-900">Support</a>
                <a href="https://demo.homeglow.dev" className="w-full bg-blue-800 text-white py-3 rounded-xl text-center font-bold">Try Demo</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.05),transparent_50%)] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/5 text-blue-800 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-800/10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-700 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-800"></span>
                  </span>
                  {latestVersion} Now Available
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                  Your Family's <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-950 via-blue-800 to-blue-700">Command Center.</span>
                </h1>
                <p className="text-xl text-zinc-600 mb-10 leading-relaxed max-w-xl">
                  HomeGlow is the open-source smart board that brings your calendar, chores, and weather into one beautiful, private dashboard. No subscriptions, no cloud tracking—just your home, organized.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a 
                    href="#why" 
                    className="w-full sm:w-auto bg-gradient-to-br from-blue-800 to-blue-950 hover:from-blue-900 hover:to-black text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-blue-900/20 hover:shadow-blue-900/30 flex items-center justify-center gap-2 group"
                  >
                    Get Started Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="https://github.com/jherforth/HomeGlow" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full sm:w-auto bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200 px-8 py-4 rounded-2xl text-lg font-bold transition-all flex items-center justify-center gap-2"
                  >
                    <Github className="w-5 h-5" /> Star on GitHub
                  </a>
                </div>
                
                {/* 
                <div className="mt-12 flex items-center gap-6 text-zinc-400">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/40?u=${i}`} className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
                    ))}
                  </div>
                  <p className="text-sm font-medium">Trusted by 500+ self-hosted families</p>
                </div>
                */}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-800 to-blue-600 rounded-[3rem] blur-2xl opacity-10 animate-pulse" />
                <AppPreview />
                
                {/* Floating Stats */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-zinc-100 hidden md:block z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <CheckSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 font-bold uppercase">Chores Done</p>
                      <p className="text-xl font-bold text-zinc-900">12/15</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-zinc-100 hidden md:block z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                      <CloudSun className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 font-bold uppercase">Local Weather</p>
                      <p className="text-xl font-bold text-zinc-900">72°F Sunny</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-blue-800 font-bold tracking-widest uppercase text-sm mb-4">Powerful Features</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">Everything you need to run your home.</h3>
              <p className="text-lg text-zinc-600">Customizable widgets that turn any old tablet or monitor into a high-end family dashboard.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Smart Calendar',
                  desc: 'Sync ICS and CalDAV feeds. View multiple family calendars in one unified view.',
                  icon: Calendar,
                  color: 'bg-blue-50 text-blue-600'
                },
                {
                  title: 'Live Weather',
                  desc: 'Real-time local forecasts so you always know if it is a park day or a movie day.',
                  icon: CloudSun,
                  color: 'bg-amber-50 text-amber-600'
                },
                {
                  title: 'Photo Albums',
                  desc: 'Turn your board into a digital frame. Cycle through your favorite family memories.',
                  icon: ImageIcon,
                  color: 'bg-emerald-50 text-emerald-600'
                },
                {
                  title: 'Chore Tracker',
                  desc: 'Assign tasks, track progress, and gamify housework for the whole family.',
                  icon: CheckSquare,
                  color: 'bg-blue-800/5 text-blue-800'
                }
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 transition-all hover:shadow-xl hover:shadow-zinc-100"
                >
                  <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-zinc-900 mb-3">{feature.title}</h4>
                  <p className="text-zinc-600 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why HomeGlow Section */}
        <section id="why" className="py-32 bg-zinc-900 text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4">The Philosophy</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-8">Why we built HomeGlow.</h3>
                <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
                  We were tired of "smart" products that required $80/year subscriptions just to show a calendar. HomeGlow is our answer: a professional-grade experience that respects your wallet and your privacy.
                </p>
                
                <div className="space-y-10">
                  {[
                    {
                      title: 'Always Free',
                      desc: 'No "Premium" tier. No locked features. Everything we build is free for everyone, forever.',
                      icon: Server
                    },
                    {
                      title: 'Privacy First',
                      desc: 'Your data never leaves your network. No cloud tracking, no data selling, no accounts required.',
                      icon: Layout
                    },
                    {
                      title: 'Community Driven',
                      desc: 'Open source and built by families, for families. Suggest features or build your own plugins.',
                      icon: Users
                    }
                  ].map((item, i) => (
                    <div key={item.title} className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center border border-yellow-400/20">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                        <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <motion.div 
                  initial={{ rotate: 5, scale: 0.9 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  className="aspect-square rounded-[3rem] bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 p-1 shadow-2xl"
                >
                  <div className="w-full h-full rounded-[2.9rem] bg-zinc-900 overflow-hidden flex items-center justify-center p-12 text-center">
                    <div>
                      <img 
                        src="https://homeglow.dev/wp-content/uploads/2026/03/cropped-HomeGlowLogo-170x134.png" 
                        className="w-32 h-auto mx-auto mb-8 grayscale invert opacity-80" 
                        alt="Logo"
                        referrerPolicy="no-referrer"
                      />
                      <p className="text-3xl font-bold mb-4">Self-Hosted Freedom.</p>
                      <p className="text-zinc-500">Deploy in seconds with Docker.</p>
                      <div className="mt-10 p-4 bg-zinc-800 rounded-2xl font-mono text-sm text-yellow-400 border border-zinc-700">
                        docker pull jherforth/homeglow:latest
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-blue-800 font-bold tracking-widest uppercase text-sm mb-4">Community</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">Help and Support</h3>
              <p className="text-lg text-zinc-600">Join our growing community of self-hosters and help shape the future of HomeGlow.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Get Involved',
                  desc: 'Found a bug or have a feature idea? Our GitHub is the place to be.',
                  icon: Github,
                  link: 'https://github.com/jherforth/HomeGlow',
                  label: 'Open GitHub'
                },
                {
                  title: 'Documentation',
                  desc: 'Need help setting up? Our community-maintained Wiki has you covered.',
                  icon: Code,
                  link: 'https://github.com/jherforth/HomeGlow/wiki',
                  label: 'Read Wiki'
                },
                {
                  title: 'Discord Chat',
                  desc: 'Get immediate help and chat with other users in our Discord server.',
                  icon: MessageCircle,
                  link: 'https://discord.gg/3UPF7njkeD',
                  label: 'Join Discord'
                }
              ].map((item, i) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -10 }}
                  className="p-10 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-8 group-hover:bg-blue-800 group-hover:text-white transition-colors">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-zinc-900 mb-4">{item.title}</h4>
                  <p className="text-zinc-600 mb-8 leading-relaxed">{item.desc}</p>
                  <span className="mt-auto flex items-center gap-2 text-blue-800 font-bold group-hover:gap-4 transition-all">
                    {item.label} <ChevronRight className="w-5 h-5" />
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent_50%)]" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to take control of <br /> your family's schedule?
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Join hundreds of families who have ditched the subscriptions and embraced the freedom of self-hosting.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://demo.homeglow.dev" 
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-auto bg-white text-blue-900 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-blue-50 transition-all shadow-2xl shadow-black/20 active:scale-95"
              >
                Try The Demo
              </a>
              <a 
                href="https://github.com/jherforth/HomeGlow" 
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-auto bg-blue-800 text-white border border-blue-800 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-blue-800 transition-all flex items-center justify-center gap-2"
              >
                View Documentation <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-zinc-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <img 
                src="https://homeglow.dev/wp-content/uploads/2026/03/cropped-HomeGlowLogo-170x134.png" 
                className="h-8 w-auto grayscale opacity-40" 
                alt="Logo"
                referrerPolicy="no-referrer"
              />
              <span className="text-zinc-400 font-bold text-lg tracking-tight">HomeGlow</span>
            </div>
            
            <div className="flex items-center gap-10">
              <a href="https://github.com/jherforth/HomeGlow" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Github /></a>
              <a href="https://discord.gg/3UPF7njkeD" className="text-zinc-400 hover:text-zinc-900 transition-colors"><MessageCircle /></a>
            </div>

            <p className="text-zinc-400 text-sm font-medium">
              © 2026 HomeGlow Project. Open Source under MIT.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

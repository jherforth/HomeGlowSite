/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import {
  Calendar,
  CloudSun,
  Image as ImageIcon,
  CheckSquare,
  Server,
  Code,
  Users,
  Check,
  X,
  Github,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://homeglow.dev/wp-content/uploads/2026/03/cropped-HomeGlowLogo-170x134.png"
              alt="HomeGlow Logo"
              className="h-8 w-auto"
              referrerPolicy="no-referrer"
            />
            <span className="font-semibold text-xl tracking-tight">HomeGlow</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/jherforth/HomeGlow"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://discord.gg/3UPF7njkeD"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="hidden sm:inline">Discord</span>
            </a>
            <a
              href="https://demo.homeglow.dev"
              target="_blank"
              rel="noreferrer"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Try Demo
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/abstract-light/1920/1080?blur=10')] opacity-20 bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-50" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-6">
                The free alternative for the <br className="hidden md:block" />
                <span className="text-indigo-600">self-hosted family.</span>
              </h1>
              <p className="text-xl text-zinc-600 max-w-2xl mx-auto mb-10">
                Your family fully organized. A smart calendar board that's always free, open source, and community developed.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://demo.homeglow.dev"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-medium transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-200"
                >
                  Try The Demo <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/jherforth/HomeGlow"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200 px-8 py-4 rounded-xl text-lg font-medium transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Github className="w-5 h-5" /> View Source
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Everything you need in one place</h2>
              <p className="mt-4 text-lg text-zinc-600">Customizable widgets to help manage your home.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Calendar',
                  description: 'Supports ICS and CalDAV. Multiple calendars in one place.',
                  icon: Calendar,
                  color: 'bg-blue-100 text-blue-600',
                },
                {
                  title: 'Weather',
                  description: 'Always be ready for the day’s weather at a glance.',
                  icon: CloudSun,
                  color: 'bg-amber-100 text-amber-600',
                },
                {
                  title: 'Photos',
                  description: 'Add multiple albums and share all of your memories.',
                  icon: ImageIcon,
                  color: 'bg-emerald-100 text-emerald-600',
                },
                {
                  title: 'Chores',
                  description: 'All of your chores and tasks in one place, for the whole family.',
                  icon: CheckSquare,
                  color: 'bg-purple-100 text-purple-600',
                },
              ].map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:shadow-md transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.color}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">{feature.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why HomeGlow */}
        <section className="py-24 bg-zinc-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Why HomeGlow?</h2>
                <p className="text-lg text-zinc-400 mb-8">
                  The idea was simple: with so many options currently available that require a monthly fee, we hoped to provide a comparable, or better experience, for families willing to manage their own smart board experience.
                </p>
                <div className="space-y-8">
                  {[
                    {
                      title: 'Always Free',
                      description: 'The only investment you need to make is in time and hardware. Enjoy a smart board in no time by deploying HomeGlow in Docker.',
                      icon: Server,
                    },
                    {
                      title: 'Open Source',
                      description: 'A completely open project that hopes to continue to build onto an already great smart board platform.',
                      icon: Code,
                    },
                    {
                      title: 'Community Developed',
                      description: 'Not only is the application open source, but with a small, but growing, plugin database, we look forward to seeing what you build!',
                      icon: Users,
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                          <item.icon className="w-5 h-5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-zinc-400 leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden bg-zinc-800 border border-zinc-700 shadow-2xl relative">
                  <img
                    src="https://picsum.photos/seed/family-board/800/800"
                    alt="Family Smart Board"
                    className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center flex-col p-8 text-center">
                    <img
                      src="https://homeglow.dev/wp-content/uploads/2026/03/cropped-HomeGlowLogo-170x134.png"
                      alt="HomeGlow Logo"
                      className="w-32 h-auto mb-6 drop-shadow-lg"
                      referrerPolicy="no-referrer"
                    />
                    <p className="text-2xl font-medium text-white drop-shadow-md">
                      Your data stays in your home, on your network.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-24 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">How we compare</h2>
              <p className="mt-4 text-lg text-zinc-600">See why families are choosing HomeGlow over expensive alternatives.</p>
            </div>

            <div className="overflow-x-auto pb-8">
              <div className="min-w-[800px] bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-200 bg-zinc-50/50">
                      <th className="p-6 font-semibold text-zinc-500 w-1/5">Features</th>
                      <th className="p-6 font-bold text-xl text-indigo-600 w-1/5 bg-indigo-50/30">HomeGlow</th>
                      <th className="p-6 font-semibold text-zinc-900 w-1/5">Skylight</th>
                      <th className="p-6 font-semibold text-zinc-900 w-1/5">Hearth</th>
                      <th className="p-6 font-semibold text-zinc-900 w-1/5">Cozyla</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    <tr>
                      <td className="p-6 font-medium text-zinc-900">Price</td>
                      <td className="p-6 bg-indigo-50/30">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">
                          $0 / forever
                        </span>
                        <div className="text-sm text-zinc-500 mt-2">Bring your own hardware</div>
                      </td>
                      <td className="p-6 text-zinc-600">
                        <div className="font-medium text-zinc-900">$599.99</div>
                        <div className="text-sm">+ $79/year premium</div>
                      </td>
                      <td className="p-6 text-zinc-600">
                        <div className="font-medium text-zinc-900">$699.00</div>
                        <div className="text-sm">+ $86.40/year premium</div>
                      </td>
                      <td className="p-6 text-zinc-600">
                        <div className="font-medium text-zinc-900">$499–$649</div>
                        <div className="text-sm">+ $5/month premium</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium text-zinc-900">Customization</td>
                      <td className="p-6 bg-indigo-50/30 font-medium text-zinc-900">High</td>
                      <td className="p-6 text-zinc-600">Low</td>
                      <td className="p-6 text-zinc-600">Moderate</td>
                      <td className="p-6 text-zinc-600">High</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium text-zinc-900">Screen Size</td>
                      <td className="p-6 bg-indigo-50/30 text-zinc-900">You decide (Tablets to Monitors)</td>
                      <td className="p-6 text-zinc-600">15″ or 27″</td>
                      <td className="p-6 text-zinc-600">27″</td>
                      <td className="p-6 text-zinc-600">15.6″, 24″, or 32″</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium text-zinc-900">Key Features</td>
                      <td className="p-6 bg-indigo-50/30">
                        <ul className="space-y-2 text-sm text-zinc-700">
                          <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Free chore reward system</li>
                          <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Free community plugins</li>
                          <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Drag-and-Drop UI</li>
                        </ul>
                      </td>
                      <td className="p-6">
                        <ul className="space-y-2 text-sm text-zinc-600">
                          <li className="flex items-start gap-2"><Check className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" /> AI Magic Import</li>
                          <li className="flex items-start gap-2"><Check className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" /> Chores (Premium only)</li>
                          <li className="flex items-start gap-2"><Check className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" /> Meal planning</li>
                        </ul>
                      </td>
                      <td className="p-6">
                        <ul className="space-y-2 text-sm text-zinc-600">
                          <li className="flex items-start gap-2"><Check className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" /> Family profiles</li>
                          <li className="flex items-start gap-2"><Check className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" /> Interactive chore charts</li>
                          <li className="flex items-start gap-2"><Check className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" /> Drag-and-drop scheduling</li>
                        </ul>
                      </td>
                      <td className="p-6">
                        <ul className="space-y-2 text-sm text-zinc-600">
                          <li className="flex items-start gap-2"><Check className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" /> All-in-one hub</li>
                          <li className="flex items-start gap-2"><Check className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" /> Split-screen mode</li>
                          <li className="flex items-start gap-2"><Check className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" /> Voice control</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium text-zinc-900">Integrations</td>
                      <td className="p-6 bg-indigo-50/30 text-sm text-zinc-700">
                        Google Calendar, Yahoo, ICS, CalDAV, OpenWeatherMaps, Immich
                      </td>
                      <td className="p-6 text-sm text-zinc-600">
                        Google Calendar, Apple Calendar, Yahoo, Cozi
                      </td>
                      <td className="p-6 text-sm text-zinc-600">
                        Google Calendar, Outlook, others
                      </td>
                      <td className="p-6 text-sm text-zinc-600">
                        Google, Apple, Outlook, Alexa, Google Home
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white border-t border-zinc-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-6">Ready to organize your family?</h2>
            <p className="text-lg text-zinc-600 mb-10">
              Run it from an old PC or a Raspberry Pi, you can be up and running in no time. HomeGlow supports touchscreens and tablets too!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://demo.homeglow.dev"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-medium transition-colors shadow-lg shadow-indigo-200"
              >
                Try The Demo
              </a>
              <a
                href="https://github.com/jherforth/HomeGlow"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-zinc-100 hover:bg-zinc-200 text-zinc-900 px-8 py-4 rounded-xl text-lg font-medium transition-colors"
              >
                View Documentation
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-50 border-t border-zinc-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="https://homeglow.dev/wp-content/uploads/2026/03/cropped-HomeGlowLogo-170x134.png"
              alt="HomeGlow Logo"
              className="h-6 w-auto grayscale opacity-50"
              referrerPolicy="no-referrer"
            />
            <span className="text-zinc-500 font-medium">© 2026 HomeGlow</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/jherforth/HomeGlow" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="w-5 h-5" />
            </a>
            <a href="https://discord.gg/3UPF7njkeD" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors">
              <span className="sr-only">Discord</span>
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}


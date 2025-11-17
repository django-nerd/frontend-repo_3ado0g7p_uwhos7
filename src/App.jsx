import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState('dark')
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <div className={theme === 'dark' ? 'bg-[#05070F] text-white' : 'bg-white text-gray-900'}>
      <Navbar theme={theme} onToggleTheme={toggleTheme} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="relative">
        <Hero theme={theme} />

        {/* Narrative scroll section */}
        <section id="vision" className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-semibold">A higher state of intelligence</h2>
              <p className="text-white/70 text-lg">
                The strongest leaders don’t compete with AI — they command symbiosis. We orchestrate human judgement and machine precision into a single, calm system of advantage.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[{
                title: 'Control',
                body: 'Enterprise-grade guardrails, provenance, and explainability by design.'
              },{
                title: 'Power',
                body: 'Compound capability from search to strategy — one surface, no chaos.'
              },{
                title: 'Calm',
                body: 'Motion that breathes. Decisions at executive altitude.'
              },{
                title: 'Prestige',
                body: 'Private by default. Invitation-only networks and models.'
              }].map(card => (
                <div key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <div className="text-sm uppercase tracking-wide text-white/70">{card.title}</div>
                  <div className="mt-2 text-sm text-white/70">{card.body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="platform" className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pb-24">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold">Platform principles</h3>
            <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-white/70 text-sm">
              <li className="rounded-xl border border-white/10 p-4">Human-in-command orchestration</li>
              <li className="rounded-xl border border-white/10 p-4">Model-agnostic performance layer</li>
              <li className="rounded-xl border border-white/10 p-4">Secure, sovereign data planes</li>
              <li className="rounded-xl border border-white/10 p-4">Executive-grade copilots and agents</li>
              <li className="rounded-xl border border-white/10 p-4">Audit trails and deterministic fallbacks</li>
              <li className="rounded-xl border border-white/10 p-4">Premium support and research access</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer theme={theme} />
    </div>
  )
}

export default App

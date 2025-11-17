import { useMemo } from 'react'
import { Crown, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar({ theme = 'dark', onToggleTheme, menuOpen, setMenuOpen }) {
  const isDark = theme === 'dark'

  const navClasses = useMemo(() => (
    `fixed top-0 left-0 right-0 z-40 ${isDark ? 'text-white' : 'text-gray-900'} ` +
    'px-4 sm:px-6 lg:px-10 py-3'
  ), [isDark])

  return (
    <div className={navClasses}>
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl ${isDark ? 'bg-white/10 text-white' : 'bg-gray-900/5 text-gray-900'}`}>
              <Crown size={18} />
            </div>
            <div className="leading-tight">
              <div className="font-semibold tracking-wide">AI-Augmented</div>
              <div className="text-xs opacity-70">Human + AI Symbiosis</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Vision', 'Platform', 'Research', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm ${isDark ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}>
                {item}
              </a>
            ))}
            <button
              onClick={onToggleTheme}
              className={`rounded-full px-3 py-1.5 text-xs font-medium border ${isDark ? 'border-white/20 text-white/80 hover:text-white hover:border-white/40' : 'border-gray-300 text-gray-700 hover:text-gray-900'} transition-colors`}
            >
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
            <a
              href="#request"
              className={`rounded-xl px-4 py-2 text-sm font-semibold shadow-sm transition-colors ${isDark ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-black'}`}
            >
              Request Access
            </a>
          </div>

          <button
            className={`md:hidden p-2 rounded-lg ${isDark ? 'text-white/90 hover:bg-white/10' : 'text-gray-900 hover:bg-gray-900/5'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden mt-2 rounded-2xl border ${isDark ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-white'} backdrop-blur-xl overflow-hidden`}
          >
            <div className="p-4 flex flex-col gap-3">
              {['Vision', 'Platform', 'Research', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                  {item}
                </a>
              ))}
              <div className="flex gap-2">
                <button
                  onClick={onToggleTheme}
                  className={`flex-1 rounded-xl px-4 py-2 text-sm font-medium border ${isDark ? 'border-white/20 text-white/80 hover:text-white hover:border-white/40' : 'border-gray-300 text-gray-700 hover:text-gray-900'} transition-colors`}
                >
                  {isDark ? 'Light Mode' : 'Dark Mode'}
                </button>
                <a
                  href="#request"
                  className={`flex-1 rounded-xl px-4 py-2 text-sm font-semibold text-center shadow-sm ${isDark ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}`}
                >
                  Access
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

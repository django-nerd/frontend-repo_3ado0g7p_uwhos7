export default function Footer({ theme = 'dark' }) {
  const isDark = theme === 'dark'
  return (
    <footer className={`relative z-20 mt-24 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-10 text-sm">
        <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
          <div>
            <div className="font-semibold">AI-Augmented</div>
            <div className="text-xs opacity-70">© {new Date().getFullYear()} — Private alpha</div>
          </div>
          <div className="flex gap-6">
            <a href="#vision" className="hover:opacity-100 opacity-80">Vision</a>
            <a href="#platform" className="hover:opacity-100 opacity-80">Platform</a>
            <a href="#research" className="hover:opacity-100 opacity-80">Research</a>
            <a href="#contact" className="hover:opacity-100 opacity-80">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

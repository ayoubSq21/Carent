import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { applyTheme, getStoredTheme, persistTheme } from '../theme.js'

function Navbar() {
  const [isDark, setIsDark] = useState(() => getStoredTheme() === 'dark')

  const toggleTheme = () => {
    const next = isDark ? 'light' : 'dark'
    setIsDark(next === 'dark')
    applyTheme(next)
    persistTheme(next)
  }

  return (
    <header style={styles.header}>
      <nav style={styles.nav} aria-label="Primary">
        <a href="#" style={styles.logo}>
          CARENT
        </a>
        <ul style={styles.links}>
          <li>
            <a href="#" className="nav-link" style={styles.link}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link" style={styles.link}>
              Car Catalogue
            </a>
          </li>
          <li>
            <a href="#" className="nav-link" style={styles.link}>
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className="nav-link" style={styles.link}>
              Help
            </a>
          </li>
        </ul>
        <div style={styles.actions}>
          <button
            type="button"
            style={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Light mode' : 'Dark mode'}
          >
            {isDark ? <Sun size={18} strokeWidth={1.75} /> : <Moon size={18} strokeWidth={1.75} />}
          </button>
          <button type="button" style={styles.ghost}>
            Register
          </button>
          <button type="button" style={styles.primary}>
            Sign In
          </button>
        </div>
      </nav>
    </header>
  )
}

const styles = {
  header: {
    backgroundColor: 'var(--bg-elevated)',
    borderBottom: '1px solid var(--border)',
    position: 'sticky',
    top: 0,
    zIndex: 20,
  },
  nav: {
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '16px 28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '24px',
    flexWrap: 'wrap',
  },
  logo: {
    fontSize: '18px',
    fontWeight: 700,
    letterSpacing: '0.14em',
    color: 'var(--text)',
    textDecoration: 'none',
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '28px',
    flexWrap: 'wrap',
    margin: 0,
    padding: 0,
  },
  link: {
    fontSize: '14px',
    fontWeight: 500,
    color: 'var(--text-secondary)',
    textDecoration: 'none',
  },
  linkActive: {
    color: 'var(--text)',
    fontWeight: 600,
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flexWrap: 'wrap',
  },
  themeToggle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    padding: 0,
    borderRadius: '8px',
    border: '1px solid var(--border)',
    backgroundColor: 'var(--bg-elevated)',
    color: 'var(--text)',
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  ghost: {
    padding: '8px 14px',
    borderRadius: '8px',
    border: '1px solid var(--border)',
    backgroundColor: 'var(--bg-elevated)',
    fontSize: '14px',
    fontWeight: 600,
    color: 'var(--label-text)',
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  primary: {
    padding: '8px 16px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: 'var(--accent)',
    fontSize: '14px',
    fontWeight: 600,
    color: 'var(--text-on-accent)',
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
}

export default Navbar

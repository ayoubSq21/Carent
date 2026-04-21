const STORAGE_KEY = 'carent-theme'

export function getStoredTheme() {
  if (typeof window === 'undefined') return 'light'
  try {
    const s = localStorage.getItem(STORAGE_KEY)
    if (s === 'dark' || s === 'light') return s
  } catch {
    /* ignore */
  }
  return 'light'
}

export function applyTheme(theme) {
  const root = document.documentElement
  if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark')
    root.style.colorScheme = 'dark'
  } else {
    root.removeAttribute('data-theme')
    root.style.colorScheme = 'light'
  }
}

export function persistTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    /* ignore */
  }
}

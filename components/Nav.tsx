'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Nav.module.css'

const links = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Hire me', href: '/hire' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => {
    setMenuOpen(false);
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link onClick={handleLinkClick} href="/" className={styles.logo}>Janhavi S.</Link>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`} role="list">
          {links.map(l => (
            <li key={l.href}>
              <Link
                onClick={handleLinkClick}
                href={l.href}
                className={`${styles.link} ${pathname === l.href ? styles.active : ''}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.badge} aria-label="Work status">
          <span className={styles.dot} aria-hidden="true" />
          Available · Auckland NZ
        </div>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>
    </header>
  )
}
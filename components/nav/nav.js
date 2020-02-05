import React from 'react'
import Link from 'next/link'
import style from './styles.scss'

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
].map(link => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`,
}))

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a className={style.home}>Home</a>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav

import Link from 'next/link'
import './topmenu.css'

export default function TopMenu() {
    return (
      <div className='topMenuStyle'>
        <Link href="/">
            <a style={{textDecoration: 'none'}}>Home</a>
        </Link>
        <Link href="/about">
            <a style={{textDecoration: 'none'}}>About</a>
        </Link>
        <Link href="/photos/[id]" as='/photos/moscow'>
            <a style={{textDecoration: 'none'}}>Photos</a>
        </Link>
      </div>
    )
  }
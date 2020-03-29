import Link from 'next/link'
import './header.css'

export default function Header() {
  return (
    <div className='headerStyle'>
      <div className='headerLogoStyle'>
        <Link href='/'>
          <img style={{width:300}} src='../logo.png'/>
        </Link>
      </div>
      <div className='headerRightStyle'>
        Simple example of React app with ssr
      </div>
    </div>
  )
}

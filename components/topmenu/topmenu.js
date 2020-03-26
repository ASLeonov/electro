import Link from 'next/link'

const topMenuStyle = {
    boxSizing: 'border-box',
    padding: 20,
    width: '100%',
    height: 100,
    border: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  }

export default function TopMenu() {
    return (
      <div style={topMenuStyle}>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
          <p>News</p>
          <p>Conditions</p>
          <p>Contacts</p>
      </div>
    )
  }
import Link from 'next/link'

const topMenuStyle = {
    boxSizing: 'border-box',
    padding: 20,
    paddingTop: 0,
    paddingBottom: 10,
    width: '100%',
    height: 58,
    border: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: '150%',
    borderBottom: '1px solid #DDD'
  }

export default function TopMenu() {
    return (
      <div style={topMenuStyle}>
        <Link href="/">
            <a style={{textDecoration: 'none'}}>Home</a>
        </Link>
        <Link href="/about">
            <a style={{textDecoration: 'none'}}>About</a>
        </Link>
        <Link href="/photo">
            <a style={{textDecoration: 'none'}}>Photos</a>
        </Link>
      </div>
    )
  }
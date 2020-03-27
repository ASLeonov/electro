import Link from 'next/link'

const headerStyle = {
  boxSizing: 'border-box',
  marginTop: 35,
  marginBottom: 12,
  padding: 20,
  width: '100%',
  height: 125,
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  borderTop: '1px solid #DDD',
  borderBottom: '1px solid #DDD'
}

const headerLogoStyle = {
  width: 300,
  marginLeft: 50
}

const headerRightStyle = {
  width: '100%',
  fontSize: '200%',
  textAlign: 'center',
  textTransform: 'uppercase'
}

export default function Header() {
  return (
    <div style={headerStyle}>
      <div style={headerLogoStyle}>
        <Link href='/'>
          <img style={{width:300}} src='../logo.png'/>
        </Link>
      </div>
      <div style={headerRightStyle}>
        Simple example of React app with ssr
      </div>
    </div>
  )
}


const headerStyle = {
  boxSizing: 'border-box',
  padding: 20,
  width: '100%',
  height: 100,
  border: 'none',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderTop: '1px solid #DDD',
  borderBottom: '1px solid #DDD'
}

const headerLogoStyle = {
  width: 300
}

const headerRightStyle = {
  fontSize: '200%'
}

export default function Header() {
  return (
    <div style={headerStyle}>
      <div style={headerLogoStyle}>
        <img src='../el24logo.jpg' style={{width:'100%'}}/>
      </div>
      <div style={headerRightStyle}>
        search, contacts, etc
      </div>
    </div>
  )
}

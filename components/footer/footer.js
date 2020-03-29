
const footerStyle = {
  boxSizing: 'border-box',
  marginTop: 30,
  marginBottom: 0,
  padding: 15,
  width: '100%',
  height: 70,
  border: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderTop: '1px solid #DDD',
  fontSize: '120%',
}

export default function Footer() {
  return (
    <div style={footerStyle}>
      Copyright 2020
    </div>
  )
}

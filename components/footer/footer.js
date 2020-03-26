
const footerStyle = {
  boxSizing: 'border-box',
  marginTop: 35,
  marginBottom: 0,
  padding: 20,
  width: '100%',
  height: 90,
  border: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderTop: '1px solid #DDD',
  // borderBottom: '1px solid #DDD',
  fontSize: '120%',
}

// const headerLogoStyle = {
//   width: 300,
//   marginLeft: 50
// }

// const headerRightStyle = {
//   width: '100%',
//   fontSize: '200%',
//   textAlign: 'center',
//   textTransform: 'uppercase'
// }

export default function Footer() {
  return (
    <div style={footerStyle}>
      Copyright 2020
      {/* <div style={headerLogoStyle}>
        <img style={{width:300}} src='../logo.png'/>
      </div>
      <div style={headerRightStyle}>
        Simple example of React app with ssr
      </div> */}
    </div>
  )
}

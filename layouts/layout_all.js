import Header from '../components/header/header'
import TopMenu from '../components/topmenu/topmenu'
import Footer from '../components/footer/footer'

const layoutStyle = {
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
}

const contentStyle = {
  padding: 20,
  paddingLeft: 60,
  display: 'flex',
  flexGrow: 1
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Header />
      <TopMenu />

      <div style={contentStyle}>
        {props.children}
      </div>

      <Footer />
    </div>
  )
}

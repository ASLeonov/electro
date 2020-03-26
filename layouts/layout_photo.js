import Header from '../components/header/header'
import TopMenu from '../components/topmenu/topmenu'
import Sidebar from '../components/sidebar/sidebar'
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
  display: 'flex',
  flexGrow: 2
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Header />
      <TopMenu />

      <div style={contentStyle}>
        <Sidebar />
        {props.children}
      </div>

      <Footer />
    </div>
  )
}

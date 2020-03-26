import Header from './header/header'
import TopMenu from './topmenu/topmenu'
import Sidebar from './sidebar/sidebar'

const layoutStyle = {
  margin: 0,
  padding: 0,
  display: 'flex-column',

}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Header />
      <TopMenu />
      <Sidebar />
      {props.children}
    </div>
  )
}

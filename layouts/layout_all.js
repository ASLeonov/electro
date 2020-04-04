import MyHead_all from './head_all'
import Header from '../components/header/header'
import TopMenu from '../components/topmenu/topmenu'
import Footer from '../components/footer/footer'
import './layout_all.css'

export default function Layout(props) {
  return (
    <div className='layoutStyle'>
      <MyHead_all title={props.title}/>
      <Header />
      <TopMenu />

      <div className='contentStyle'>
        {props.children}
      </div>

      <Footer />
    </div>
  )
}

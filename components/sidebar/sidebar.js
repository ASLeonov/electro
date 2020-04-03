
import { useRouter }  from 'next/router'
import { photoMenu }  from '../../public/fixtures'
import SidebarLinks from './sidebar-links/sidebar-links'
import './sidebar.css'

export default function Sidebar() {

    const router = useRouter()

    let level1 = null
    for (const key1 in photoMenu) {
        for (const key2 in photoMenu[key1]) {
          if (key2 === router.query.id) {
            level1 = key1
          }
        }
      }

    const currentLink = router.query.id ? {level1:level1, level2:router.query.id} : {level1:'towns', level2:'moscow'}

    return (
    <div id='sidebar'>
        <SidebarLinks currentLink={{...currentLink}} />
    </div>
)

}
  
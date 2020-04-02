
import { useRouter }  from 'next/router'
import { photoMenu }  from '../../public/fixtures'
import SidebarLinks from './sidebar-links/sidebar-links'

const sidebarStyle = {
    boxSizing: 'border-box',
    minWidth: 182,
    padding: 20,
    paddingRight: 60,
    borderRight: '1px solid #DDD',
    fontSize: '120%'
}
 
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

    const currentLink = router.query.id ? {level1:level1, level2:router.query.id} : {}
    
return (
    <div id='sidebar' style={sidebarStyle}>
        <SidebarLinks currentLink={{...currentLink}} />
    </div>
)
}
  
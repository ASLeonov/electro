import {photoMenu} from '../../public/fixtures'

const sidebarStyle = {
    padding: 20,
    paddingRight: 60,
    borderRight: '1px solid #DDD',
    fontSize: '120%'
}
 
export default function Sidebar() {

    const menu   = []

    for (const key1 in photoMenu) {
        const menu_2 = []
        const level_1 = key1
        const level_2_items = photoMenu[key1]
            for (const key2 in level_2_items) {
                menu_2.push(
                    <div style={{paddingLeft:10, paddingBottom:4}}>
                        {key2} 
                         {/* -> {level_2_items[key2]} */}
                    </div>
                )
            }
        menu.push(
            <div>
                <div style={{paddingBottom:8}}>
                    {level_1}
                </div>
                {menu_2}
                <br />
            </div>
        )
    }
    
return (
    <div id='sidebar' style={sidebarStyle}>
        {menu}
    </div>
)
}
  
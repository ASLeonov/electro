import {productMenu} from '../../public/fixtures'

const sidebarStyle = {
    padding: 20,
    paddingRight: 40,
    float: 'left'
}
 
export default function Sidebar() {

    const menu = []
    const menu2 = []

    for (const key1 in productMenu) {
        const level1 = key1
        const level2_items = productMenu[key1]
            for (const key2 in level2_items) {
                menu2.push(
                    <div style={{paddingLeft:10}}>
                        {level2_items[key2]}
                    </div>
                )
            }
        menu.push(
            <div>
                <div>
                    {level1}
                </div>
                {menu2}
            </div>
        )
    }
    
return (
    <div id='sidebar' style={sidebarStyle}>
        {menu}
    </div>
)
}
  
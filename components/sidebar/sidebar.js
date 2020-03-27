
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
    
return (
    <div id='sidebar' style={sidebarStyle}>
        <SidebarLinks />
    </div>
)
}
  
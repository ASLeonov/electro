import Link from 'next/link'
import { photoMenu } from '../../../public/fixtures'
import Link_1 from './link-1_level/link1'

export default function SidebarLinks(props) {
    const menu = []

    for (const key1 in photoMenu) {
        const level_1 = key1
            menu.push(
                <div key={level_1}>
                    <Link_1 level_1={level_1} level_2={photoMenu[level_1]}/>  
                    <br />
                </div>
            )
    }

    return (
        <div>
            {menu}
        </div>
    )

}

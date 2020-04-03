import { useState, useEffect } from 'react'
import { photoMenu } from '../../../public/fixtures'
import Link_1 from './link-1_level/link1'

export default function SidebarLinks(props) {

    const [activeLevel2, setActiveLevel2] = useState(props.currentLink.level2)

    const menu = []

    const onHandleClick__level_2 = (key) => { setActiveLevel2(key) }

    for (const key1 in photoMenu) {
        const level_1 = key1
            menu.push(
                <div key={level_1}>
                    <Link_1
                        level_1 = {level_1}
                        level_2 = {photoMenu[level_1]}
                        // level_1__active = {(props.currentLink.level1 === key1) ? true : false}
                        level_2__active = {activeLevel2}
                        handleClick__level_2 = {onHandleClick__level_2}
                    />  
                    <br />
                </div>
            )
    }

    useEffect( () => {
        setActiveLevel2(props.currentLink.level2)
    }, [props.currentLink.level2])

    return (
        <div>
            {menu}
        </div>
    )

}

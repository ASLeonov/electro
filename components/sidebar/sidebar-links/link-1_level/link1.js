// import Link from 'next/link'
import Link_2 from '../link-2_level/link2'

export default function Link_1(props) {

    const activeStyle = props.level_1__active ? { paddingBottom:5, fontWeight:'bold', cursor:'pointer' } : { paddingBottom:5, cursor:'pointer' }

    const onHandleClick = () => {
        props.handleClick__level_1(props.level_1)
    }

    const level_2Style = (props.level_1__active) ? { display:'block' } : { display:'none' }

    const level_2 = []
        for (const key in props.level_2) {
            const link_2_item = {}
            link_2_item[key] = props.level_2[key]
                level_2.push(
                    <Link_2
                        key = {key}
                        level2_key = {key}
                        level_2 = {link_2_item}
                        activeLink = {(key === props.level_2__active) ? true : false}
                        handleClick__level_2 = {props.handleClick__level_2}
                    />
                )
        }

    return (
        <div>
            <div style={activeStyle} onClick={onHandleClick}>
                {props.level_1}
            </div>
            <div style={level_2Style}>
                {level_2}
            </div>            
        </div>
    )

}

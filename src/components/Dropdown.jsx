
const Dropdown = ({items, dropDown}) => {
    return (
        <ul className={`menu-dropdown ${dropDown ? 'show' : 'hide'}`}>
            {items.map((menu, index) => {
                return (
                    <li key={index} className="menu-items">
                        <a href={menu.url}>{menu.title}</a>
                    </li>
                )
            })}
        </ul>
    )
}

export default Dropdown;
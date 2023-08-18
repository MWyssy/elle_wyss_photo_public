import Dropdown from './Dropdown.jsx';
import { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';

const menuItems = [
    {
        title: 'Portfolio',
        url: '/',
    },
    {
        title: 'About',
        url: '/about',
    },
    {
        title: 'Contact',
        url: 'contact',
    }
]


function MenuItems() {
    const [dropDown, setDropdown] = useState(false);
    
    return (
        <li className='menu-items'>
            <>
                <Hamburger 
                    type='button' 
                    aria-haspopup='menu'
                    aria-expanded={dropDown ? 'true' : 'false'}
                    onClick={() => setDropdown((prev) => !prev)}
                    toggled={dropDown}
                    toggle={setDropdown}
                    direction='right'
                    color='#fff6eaff'
                    easing='ease-in'
                    rounded
                />
                <Dropdown
                    items={menuItems}
                    dropDown={dropDown}
                />
            </>
        </li>
    )
}

export default MenuItems
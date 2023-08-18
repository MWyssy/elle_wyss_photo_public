import '../Styles/Nav.css'
import MenuItems from './MenuItems';

function Nav() {

    return (
        <nav id='navbar'>
            <img 
                src='../src/assets/logo-light.svg'
                id='logo'
                alt='Elle Wyss Photo logo'
            ></img>
            <h1 id='title-text'>Elle Wyss Photo</h1>
            <MenuItems />
        </nav>
    )
}

export default Nav
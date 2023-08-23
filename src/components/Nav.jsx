import '../Styles/Nav.css'
import MenuItems from './MenuItems';

function Nav() {

    return (
        <nav id='navbar'>
            <img 
                src='../src/assets/Logo/logo-light.svg'
                id='logo'
                alt='Elle Wyss Photography logo'
            ></img>
            <a href='/' alt='home'>
                <h1 id='title-text'>Elle Wyss Photo</h1>
            </a>
            <MenuItems />
        </nav>
    )
}

export default Nav
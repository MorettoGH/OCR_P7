import '../styles/HomeHeader.css';
import logo from '../assets/icon-left-font.png';

function HomeHeader() {
    const title = 'Bienvenue sur le réseau social de Groupomania !'
    return (
    <div className='gm-home-header'>
        <a href="/"><img src={logo} alt='Logo de Groupomania' className='gm-home-header-logo'/></a>
        <h1 className='gm-home-header-title'>{title}</h1>
    </div>
    )
}

export default HomeHeader;
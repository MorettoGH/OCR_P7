import LogoutCard from './LogoutCard';
import '../styles/PagesHeader.css';
import logo from '../assets/icon-left-font.png';

function PagesHeader() {
    return (
    <div className='gm-pages-header'>
        <img src={logo} alt='Logo de Groupomania' className='gm-pages-header-logo'/>
        <LogoutCard />
    </div>
    
    )
}

export default PagesHeader;
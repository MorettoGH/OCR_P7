import LogoutCard from '../Buttons/LogoutCard';
import './PagesHeader.css';
import logo from '../../assets/icon-left-font.png';

function PagesHeader() {
    return (
    <div className='gm-pages-header'>
        <a href="/wall"><img src={logo} alt='Logo de Groupomania' className='gm-pages-header-logo'/></a>
        <LogoutCard />
    </div>

    )
}

export default PagesHeader;
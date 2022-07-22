import {Link} from 'react-router-dom';
import '../styles/LogoutCard.css';

function LogoutCard() {
    const title = 'Se déconnecter'
    return (
        <Link to='/'>
        <div className='gm-pages-logout'>
            <h2 className='gm-pages-logout-title'>{title}</h2>
        </div>
        </Link>
    )
}

export default LogoutCard;
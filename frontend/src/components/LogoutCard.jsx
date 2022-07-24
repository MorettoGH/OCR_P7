import {Link} from 'react-router-dom';
import '../styles/LogoutCard.css';

function LogoutCard() {
    const title = 'Se déconnecter'
    return (
        <Link to='/'>
            <div className='gm-pages-logout'>
                <h1 className='gm-pages-logout-title'>{title}</h1>
            </div>
        </Link>
    )
}

export default LogoutCard;
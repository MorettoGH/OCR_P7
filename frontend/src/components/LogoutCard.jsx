import {Link} from 'react-router-dom';
import '../styles/LogoutCard.css';

function clearSession() {
    localStorage.clear()
}

function LogoutCard() {
    const title = 'Se déconnecter'
    return (
        <Link to='/'>
            <div className='gm-pages-logout' onClick={clearSession}>
                <h1 className='gm-pages-logout-title'>{title}</h1>
            </div>
        </Link>
    )
}

export default LogoutCard;
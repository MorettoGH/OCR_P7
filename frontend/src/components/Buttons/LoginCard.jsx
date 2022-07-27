import './LoginCard.css';
import {Link} from 'react-router-dom';

function LoginCard() {
    const title = 'Se connecter'
    return (
        <Link to='/login'>
            <div className='gm-home-login'>
                <h2 className='gm-home-login-title'>{title}</h2>
            </div>
        </Link>
    )
}

export default LoginCard;
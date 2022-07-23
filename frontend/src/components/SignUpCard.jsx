import '../styles/SignUpCard.css';
import {Link} from 'react-router-dom';

function SignUpCard() {
    const title = 'Créer un compte';
    return (
        <Link to='/signup'>
            <div className='gm-home-signup'>
                <h2 className='gm-home-signup-title'>{title}</h2>
            </div>
        </Link>
    )
}

export default SignUpCard;
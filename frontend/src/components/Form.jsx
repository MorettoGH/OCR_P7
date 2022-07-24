import '../styles/Form.css';
import '../styles/Connect.css'
import {useLocation, Link} from 'react-router-dom';

function Form() {
    const location = useLocation();
    let title = '';
    location.pathname === '/login' ? title = 'Connexion' : title = 'S\'inscrire';

	return (
        <div>
            <form className='gm-pages-form'>
                <div className='gm-pages-form-text'>Email :</div>
                <input
                    placeholder='Entrez votre mail'
                    className='gm-pages-form-input'
                    type='email'
                    required
                />
                
                <div className='gm-pages-form-text'>Mot de passe :</div>
                <input
                    placeholder='Entrez votre mot de passe'
                    className='gm-pages-form-input'
                    type='password'
                    required
                />
            </form>
            <Link to='/wall'>
                <input type='submit' className='gm-connect gm-connect-title' value={title}></input>
            </Link>
        </div>
	)
}

export default Form
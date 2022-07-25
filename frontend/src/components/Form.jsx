import '../styles/Form.css';
import '../styles/Connect.css'
import {useLocation} from 'react-router-dom';
import {useState} from 'react';

function Form() {
    const location = useLocation();
    let title = '';
    location.pathname === '/login' ? title = 'Connexion' : title = 'S\'inscrire';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function validateForm() {
        if (email.length > 3
            && password.length > 3
            && email.includes('@')) {
            let user = {
                email: email,
                password: password
            }
            console.log('je suis dans le validateform');
            const userData = await fetch(`http://localhost:4200/api/auth/login`, {
                method: "POST",
                headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
                })
                .then((res) => res.json())
                .then((res) => console.log(res))
                .catch((error) => console.log(error))
            if (userData.userId) {
                console.log('lol');
                localStorage.setItem("userData", JSON.stringify(userData));
            }
        }else{
            alert('toto');
        }
    }
    
	return (
        <div>
            <form className='gm-pages-form'>
                <label className='gm-pages-form-text'>Email :</label>
                <input
                    placeholder='Entrez votre mail'
                    className='gm-pages-form-input'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                
                <label className='gm-pages-form-text'>Mot de passe :</label>
                <input
                    placeholder='Entrez votre mot de passe'
                    className='gm-pages-form-input'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input 
                type='button' 
                className='gm-connect gm-connect-title' 
                value={title}
                onClick={validateForm}>
                </input>
            </form>
            
        </div>
	)
}

export default Form
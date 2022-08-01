import './Form.css';
import './FormBtn.css'
import {useState} from 'react';
import axios from 'axios';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    async function login() {
        let emailValid = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
        let passwordValid = /^[a-zA-ZÀ-ÿ0-9- ',]{2,15}$/
        if (emailValid.test(email)
            && passwordValid.test(password)) {
            let user = {
                email: email,
                password: password
            }
            console.log('je suis dans la fonction login');
            axios.post(`http://localhost:4200/api/auth/login`, user)
                .then((res) => {
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('email', email)
                    localStorage.setItem('userId', res.data.userId)
                    localStorage.setItem('isAdmin', res.data.isAdmin)
                    window.location.href="/wall"
                })
                .catch((error) => {
                    console.log(error)
                    alert('Email ou mot de passe incorrecte')
                })
                
        }else{
            alert('Veuillez entrer des données valides.');
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
                    className='gm-form-btn gm-form-btn-title' 
                    value='Connexion'
                    onClick={login}>
                </input>
            </form>
            
        </div>
	)
}

export default LoginForm
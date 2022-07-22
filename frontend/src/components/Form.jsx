import '../styles/Form.css';

function Form() {
	return (
		<form className='gm-pages-form'>
            <div className='gm-pages-form-text'>Email :</div>
            <input
                placeholder='Entrez votre mail'
                className='gm-pages-form-input'
                type='email'
            />
            <div className='gm-pages-form-text'>Mot de passe :</div>
            <input
                placeholder='Entrez votre mot de passe'
                className='gm-pages-form-input'
                type='password'
            />
		</form>
	)
}

export default Form
import '../styles/Modify.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'

function Modify() {
    const [img, setImg] = useState();
    const onImageChange = (e) => {
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
    }
    return (
            <div className='gm-post-container'>
                <div className='gm-post-card'>
                    <h2 className='gm-post-title'>toto@gmail.com</h2>
                    <p className='gm-post-date'> Publié le : 01/01/2023 at 10am</p>
                    <textarea type='text' maxLength={1500} className='gm-post-text'></textarea>
                    <div className='gm-post-footer'>
                        <input type='file' accept="image/png, image/jpeg, image/jpg" className='gm-post-file' onChange={onImageChange}></input>   
                        <p className='gm-post-thumbs'>Like Dislike</p>
                    </div>
                </div>
                <div className='gm-submit-container'>
                    <Link to='/wall'>
                        <div className='gm-post-back'>
                            <h3 className='gm-post-back-title'>Retour à la page principale</h3>
                        </div>
                    </Link>    
                    <input type='submit' value='Modifier' className='gm-post_submit'></input>
                    <img src={img} alt='' className='gm-post-img'/>
                </div>
            </div>
    )
}

export default Modify;
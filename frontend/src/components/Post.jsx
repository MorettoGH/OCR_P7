import '../styles/Post.css'
import {Link} from 'react-router-dom'

function Post() {

    return (
            <div className='gm-post-container'>
                <div className='gm-post-card'>
                    <h2 className='gm-post-title'>toto@gmail.com</h2>
                    <p className='gm-post-date'> Publié le : 01/01/2023 at 10am</p>
                    <textarea type='text' maxLength={1500} className='gm-post-text'></textarea>
                    <div className='gm-post-footer'>
                        <input type='file' accept="image/png, image/jpeg, image/jpg" className='gm-post-file'></input>   
                        <p className='gm-post-thumbs'>Like Dislike</p>
                    </div>
                </div>
                <div className='gm-submit-container'>
                    <Link to='/wall'>
                        <div className='gm-post-back'>
                            <h3 className='gm-post-back-title'>Retour à la page principale</h3>
                        </div>
                    </Link>    
                    <input type='submit' value='Publier' className='gm-post_submit'></input>
                    <input type='submit' value='Modifier' className='gm-post_submit'></input>
                </div>
            </div>
    )
}

export default Post;
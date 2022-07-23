import '../styles/PostPage.css';
import PagesHeader from '../components/PagesHeader';

function PostPage() {
    
    return (
        <div>
            <PagesHeader />
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
                    <input type='submit' value='Publier' className='gm-post_submit'></input>
                </div>
            </div>
        </div>    
    )
}

export default PostPage;
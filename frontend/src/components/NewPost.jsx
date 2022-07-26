import '../styles/NewPost.css'
import {useState} from 'react'

function Post() {
    const [img, setImg] = useState();
    const onImageChange = (e) => {
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
    }
    return (
            <div className='gm-post-container'>
                <div className='gm-post-card'>
                    <h2 className='gm-post-title'>toto@gmail.com</h2>
                    <textarea type='text' maxLength={1500} className='gm-newpost-text'></textarea>
                    <div className='gm-post-footer'>
                        <input type='file' accept="image/png, image/jpeg, image/jpg" onChange={onImageChange} className='gm-post-file'></input>   
                    </div>
                </div>
                <div className='gm-submit-container'>   
                    <input type='submit' value='Publier' className='gm-post_submit'></input>
                    <img src={img} alt='' className='gm-post-img'/>
                </div>
            </div>
    )
}

export default Post;
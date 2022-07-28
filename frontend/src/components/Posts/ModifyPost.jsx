import './ModifyPost.css'
import {useState} from 'react'

function ModifyPost() {
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
                        <p className='gm-post-thumbs'>Like</p>
                    </div>
                </div>
                <div className='gm-submit-container'>   
                    <img src={img} alt='' className='gm-post-img'/>
                    <input type='submit' value='Modifier' className='gm-post-submit'></input>
                </div>
            </div>
    )
}

export default ModifyPost;
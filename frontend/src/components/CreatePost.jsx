import '../styles/NewPost.css'
import {useState} from 'react'
import axios from 'axios'

function CreatePost() {
    const [img, setImg] = useState('');
    const [content, setContent] = useState('');
    const onImageChange = (e) => {
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
    }
    const token = localStorage.getItem("token")
    const email = localStorage.getItem("email")
    //const userId = localStorage.getItem("userId")
    
    async function addPost() {
        const formData = new FormData();
        formData.append('post', JSON.stringify(content));
        formData.append('image', img);
        
        console.log(formData);
        console.log(content);
        console.log(img);
        axios({
            method: 'POST',
            url: 'http://localhost:4200/api/wall/new',
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data',
                        'Authorization': 'Bearer ' + token}
            })
            .then((res) => {
                console.log(res)
                console.log('post créé')
            })
            .catch((error) => {
                console.log(error)
                alert('nope')
            })
    }
    
    return (
            <div className='gm-post-container'>
                <div className='gm-post-card'>
                    <h2 className='gm-post-title'>{email}</h2>
                    <textarea 
                        type='text'
                        maxLength={1500}
                        className='gm-newpost-text'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}> 
                    </textarea>
                    <div className='gm-post-footer'>
                        <input
                            type='file'
                            accept="image/png, image/jpeg, image/jpg" onChange={onImageChange} className='gm-post-file'>
                        </input>   
                    </div>
                </div>
                <div className='gm-submit-container'>   
                    <img 
                        src={img} alt='' 
                        className='gm-post-img'
                        onChange={(e) => setImg(e.target.value)}/>
                    <input 
                        type='submit' 
                        value='Publier' 
                        className='gm-post_submit'
                        onClick={addPost}>
                    </input>
                </div>
            </div>
    )
}

export default CreatePost;
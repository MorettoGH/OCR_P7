import './ModifyPost.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom';

function ModifyPost() {
    const auth = localStorage.getItem("token");
    const postData = useParams();
    const [content, setContent] = useState('');
    const [post, setPost] = useState('');
    const [img, setImg] = useState('');
    const [preview, setPreview] = useState('');
    const [userId, setUserId] = useState('');

    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://localhost:4200/api/wall/${postData.id}`,
            headers: {'Authorization': 'Bearer ' + auth}
            })
            .then(res => {
                setPost(res.data);
                setContent(res.data.content);
                setPreview(res.data.imageUrl);
                setUserId(res.data.userId);
            })
    // eslint-disable-next-line       
    }, []);
    
    const onImageChange = (e) => {
        const [file] = e.target.files;
        setPreview(URL.createObjectURL(file));
        setImg(e.target.files[0]);
    }

    function replacePost() {
        const formData = new FormData();
        formData.append('content', content);
        formData.append('image', img);
        formData.append('userId', userId);
        
        axios({
            method: 'PUT',
            url: `http://localhost:4200/api/wall/${postData.id}`,
            data: formData, userId,
            headers: { 'Content-Type': 'multipart/form-data',
                        'Authorization': 'Bearer ' + auth}
            })
            .then((res) => {
                alert('Vous avez modifié une publication');
            })
            .catch((error) => {
                console.log(error)
                alert('nope')
            })
    }

    return (
            <form className='gm-post-container'>
                <div className='gm-post-card'>
                    <h2 className='gm-post-title'>Post</h2>
                    <p className='gm-post-date'> Publié le {post.date}</p>
                    <textarea 
                        type='text' 
                        maxLength={1500} 
                        className='gm-post-text'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}>
                    </textarea>
                    <div className='gm-post-footer'>
                        <input 
                            type='file' 
                            accept="image/png, image/jpeg, image/jpg"
                            className='gm-post-file'
                            onChange={onImageChange}
                            >
                        </input>
                    </div>
                </div>
                <div className='gm-submit-container'>   
                    <img 
                        src={preview} alt='' 
                        className='gm-post-img'/>
                    <Link to='/wall'>
                        <input 
                            type='submit' 
                            value='Modifier' 
                            className='gm-post-submit'
                            onClick={replacePost}>
                        </input>
                     </Link>
                </div>
            </form>
    )
}

export default ModifyPost;
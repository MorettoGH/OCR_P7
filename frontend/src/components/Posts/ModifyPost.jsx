import './ModifyPost.css'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';

function ModifyPost() {
    const auth = localStorage.getItem("token");
    const [preview, setPreview] = useState();
    const [postParams, setPostParams] = useState();
    const { postId } = useParams()
    const [img, setImg] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://localhost:4200/api/wall/${postId}`,
            headers: {'Authorization': 'Bearer ' + auth}
            })
            .then(res => {
                setPostParams(res.data);
                console.log(res.data);
            })
    }, []);

    const onImageChange = (e) => {
        const [file] = e.target.files;
        setPreview(URL.createObjectURL(file));
        setImg(e.target.files[0]);
    }
    return (
            <div className='gm-post-container'>
                <div className='gm-post-card'>
                    <h2 className='gm-post-title'>Post</h2>
                    <p className='gm-post-date'> Publié le :</p>
                    <textarea 
                        type='text' 
                        maxLength={1500} 
                        className='gm-post-text'
                        value=''
                        readOnly>
                    </textarea>
                    <div className='gm-post-footer'>
                        <input 
                            type='file' 
                            accept="image/png, image/jpeg, image/jpg" className='gm-post-file' 
                            onChange={onImageChange}>
                        </input>   
                        <p className='gm-post-thumbs'>Like</p>
                    </div>
                </div>
                <div className='gm-submit-container'>   
                    <img src={preview} alt='' className='gm-post-img'/>
                    <input type='submit' value='Modifier' className='gm-post-submit'></input>
                </div>
            </div>
    )
}

export default ModifyPost;
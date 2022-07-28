import './PostCard.css';
import axios from 'axios';
import {useState} from 'react'
import { useEffect } from 'react';

function PostCard() {
    const [postList, setPostList] = useState([]);
    const auth = localStorage.getItem("token");
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://localhost:4200/api/wall/',
            headers: {'Authorization': 'Bearer ' + auth}
            })
            .then(res => {
                setPostList(res.data);
            })
    }, []);

    const onLikeClick = (id) => {
        console.log('+1');
        console.log(id);

        let like = 1;

        axios.post(`http://localhost:4200/api/wall/${id}/like`, like,
            {headers: {Authorization: `Bearer ${auth}`}})
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='gm-postcard-container'>
            {postList.map((post) => (
                <div key={post._id} className='gm-postcard'>
                <div>
                    <img src={post.imageUrl} alt="" className='gm-postcard-img'></img>
                    <p className='gm-postcard-like' onClick={() => (onLikeClick(post._id))}>LIKE</p>
                </div>
                <div className='gm-postcard-content'>    
                    <h3 className='gm-postcard-title'>Post</h3>
                    <p className='gm-postcard-text'>{post.content}</p>
                    <p className='gm-postcard-date'> Publié le : {post.timestamp}</p>
                </div>
            </div>
            ))}
        </div>
    )
}

export default PostCard;
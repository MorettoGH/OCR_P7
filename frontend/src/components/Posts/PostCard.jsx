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
                console.log(res.data);
            })
    }, []);

    return (
        <div className='gm-postcard-container'>
            {postList.map((post) => (
                <div key={post._id} className='gm-postcard'>
                <div>
                    <img src={post.imageUrl} alt="" className='gm-postcard-img'></img>
                    <p className='gm-postcard-like'>Like</p>
                </div>
                <div className='gm-postcard-content'>    
                    <h3 className='gm-postcard-title'>toto@gmail.com</h3>
                    <p className='gm-postcard-text'>{post.content}</p>
                    <p className='gm-postcard-date'> Publié le : 01/01/2023 at 10am</p>
                </div>
            </div>
            ))}
        </div>
    )
}

export default PostCard;
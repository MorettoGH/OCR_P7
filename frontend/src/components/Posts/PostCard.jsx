import './PostCard.css';
import {Edit, Trash2, ThumbsUp} from 'react-feather'
import axios from 'axios';
import {Fragment, useState} from 'react'
import { useEffect } from 'react';

function PostCard() {
    const auth = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    const [postList, setPostList] = useState([]);
    const [isLiked, setIsLiked] = useState(true);

    const getAllPosts = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:4200/api/wall/',
            headers: {'Authorization': 'Bearer ' + auth}
            })
            .then(res => {
                setPostList(res.data);
            })
    }

    const onLikeClick = async (id, usersLiked) => {
        // Axios Request: use the userlike data of the clicked post to verify if the current user has already like it
        // the like data in req.body is useless
        await axios.post(`http://localhost:4200/api/wall/${id}/like`, {usersLiked},
            {headers: {Authorization: `bearer ${auth}`}})
            .then(() => {
                setIsLiked((oldState) => !oldState);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const onEditClick = (id) => {
        window.location.href = `/wall/post/${id}`
    }
    
    const deletePost = (id) => {
        axios.delete(`http://localhost:4200/api/wall/${id}`, {headers: {Authorization: `bearer ${auth}`}})
        .then((res) => {
            getAllPosts();
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    useEffect(() => {
        getAllPosts();
    // eslint-disable-next-line
    }, [isLiked]); // re-render for each change in likeAction value

    return (
        <div className='gm-postcard-container'>
            {postList.map((post) => {
                return (
                <div key={post._id} className='gm-postcard'>
                    <div>
                        <img src={post.imageUrl} alt="" className='gm-postcard-img'></img>
                        {/* 
                            onClick - Get id for the path to the post
                                    - Get the usersLiked for checking how to update likes data
                        */}
                        <p className='gm-postcard-like' onClick={() => (onLikeClick(post._id, post.usersLiked))}><ThumbsUp /> : "{post.likes}"</p>
                    </div>
                    <div className='gm-postcard-content'>    
                        <div className='gm-postcard-title'>
                            {post.userId === userId && ( 
                                <> 
                                <h3 onClick={() => onEditClick(post._id)}><Edit/></h3>
                                <h3 onClick={() => deletePost(post._id)}><Trash2  color="red"/></h3>
                                </>
                            )}
                        </div>
                        <p className='gm-postcard-text'>{post.content}</p>
                        <p className='gm-postcard-date'> Publié le : {post.timestamp}</p>
                    </div>
                </div>
            )
            })}
        </div>
    )
}

export default PostCard;
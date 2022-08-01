import './PostCard.css';
import {Edit, Trash2, ThumbsUp} from 'react-feather'
import axios from 'axios';
import {useState, useEffect} from 'react'

function PostCard() {
    const auth = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const isAdmin = localStorage.getItem("isAdmin");

    const [postList, setPostList] = useState([]);
    const [isLiked, setIsLiked] = useState(true);

    // fetch all datas if valid token 
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
    }, [isLiked]); // re-render for each change in like action value

    return (
        <div className='gm-postcard-container'>
            {postList.map((post) => {
                return (
                <div key={post._id} className='gm-postcard'>
                    <div className='gm-mq-postcard'>
                        <img src={post.imageUrl} alt="" className='gm-postcard-img'></img>
                        {/* 
                            onClick - Get id for the path to the post
                                    - Get the usersLiked for checking how to update likes data
                        */}
                        <p className='gm-postcard-like' onClick={() => (onLikeClick(post._id, post.usersLiked))}><ThumbsUp /> : "{post.likes}"</p>
                    </div>
                    <div className='gm-postcard-content'>    
                        <div className='gm-postcard-title'>
                            {(post.userId === userId || isAdmin === true) && ( 
                                <> 
                                <h3 onClick={() => onEditClick(post._id)}><Edit/></h3>
                                <h3 onClick={() => deletePost(post._id)}><Trash2  color="red"/></h3>
                                </>
                            )}
                        </div>
                        <p className='gm-postcard-text'>{post.content}</p>
                        <p className='gm-postcard-date'> Publié le : {post.date}</p>
                    </div>
                </div>
            )
            })}
        </div>
    )
}

export default PostCard;
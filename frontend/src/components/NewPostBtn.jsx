import '../styles/NewPostBtn.css';
import {Link} from 'react-router-dom';

function NewPostBtn() {
    const title = '+ Nouvelle publication'
    return (
            <Link to='/wall/newPost'>
                <div className='gm-newpost-card'>
                    <h2 className='gm-newpost-title'>{title}</h2>
                </div>
            </Link>
    )
}

export default NewPostBtn;
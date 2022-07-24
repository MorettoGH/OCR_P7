import '../styles/WallCard.css';
import {Link} from 'react-router-dom';

function WallCard() {

    return (
            <div className='gm-wallcard-container'>
                    <div className='gm-wallcard'>
                        <Link to='/post/1'>
                            <h3 className='gm-wallcard-title'>toto@gmail.com</h3>
                            <p className='gm-wallcard-date'> Publié le : 01/01/2023 at 10am</p>
                            <p className='gm-wallcard-text'>Blablabla</p>
                            <p className='gm-wallcard-thumbs'>Like Dislike</p>
                        </Link>
                    </div>
                
                <div className='gm-wallcard'>
                        <Link to='/post/2'>
                            <h3 className='gm-wallcard-title'>toto@gmail.com</h3>
                            <p className='gm-wallcard-date'> Publié le : 01/01/2023 at 10am</p>
                            <p className='gm-wallcard-text'>Blablabla</p>
                            <p className='gm-wallcard-thumbs'>Like Dislike</p>
                        </Link>
                </div>
                <div className='gm-wallcard'>
                        <Link to='/post/3'>
                            <h3 className='gm-wallcard-title'>toto@gmail.com</h3>
                            <p className='gm-wallcard-date'> Publié le : 01/01/2023 at 10am</p>
                            <p className='gm-wallcard-text'>Blablabla</p>
                            <p className='gm-wallcard-thumbs'>Like Dislike</p>
                        </Link>
                </div>
                <div className='gm-wallcard'>
                        <Link to='/post/4'>
                            <h3 className='gm-wallcard-title'>toto@gmail.com</h3>
                            <p className='gm-wallcard-date'> Publié le : 01/01/2023 at 10am</p>
                            <p className='gm-wallcard-text'>Blablabla</p>
                            <p className='gm-wallcard-thumbs'>Like Dislike</p>
                        </Link>
                </div>
            </div>
    )
}

export default WallCard;
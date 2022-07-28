import './PostCard.css';
import Img from "../../data/profile.png"

function PostCard() {
    return (
        <div className='gm-postcard-container'>
            <div className='gm-postcard'>
                <div>
                    <img src={Img} alt="" className='gm-postcard-img'></img>
                    <p className='gm-postcard-like'>Like</p>
                </div>
                <div className='gm-postcard-content'>    
                    <h3 className='gm-postcard-title'>toto@gmail.com</h3>
                    <p className='gm-postcard-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor blandit enim. Aliquam placerat tempor vehicula. Suspendisse eleifend urna nec ligula commodo dapibus. Ut faucibus mauris a augue consequat finibus. Donec tempus arcu id eros interdum, sed elementum velit placerat. In sed augue risus.</p>
                    <p className='gm-postcard-date'> Publié le : 01/01/2023 at 10am</p>
                </div>
            </div>
            <div className='gm-postcard'>
                <div>
                    <img src={Img} alt="" className='gm-postcard-img'></img>
                    <p className='gm-postcard-like'>Like</p>
                </div>
                <div className='gm-postcard-content'>    
                    <h3 className='gm-postcard-title'>toto@gmail.com</h3>
                    <p className='gm-postcard-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor blandit enim. Aliquam placerat tempor vehicula. Suspendisse eleifend urna nec ligula commodo dapibus. Ut faucibus mauris a augue consequat finibus. Donec tempus arcu id eros interdum, sed elementum velit placerat. In sed augue risus. Pellentesque vel urna nunc. Nam a sapien odio. Nulla vel tincidunt neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor blandit enim. Aliquam placerat tempor vehicula. Suspendisse eleifend urna nec ligula commodo dapibus. Ut faucibus mauris a augue consequat finibus. Donec tempus arcu id eros interdum, sed elementum velit placerat. In sed augue risus. Pellentesque vel urna nunc. Nam a sapien odio. Nulla vel tincidunt neque.</p>
                    <p className='gm-postcard-date'> Publié le : 01/01/2023 at 10am</p>
                </div>
            </div>
            <div className='gm-postcard'>
                <div>
                    <img src={Img} alt="" className='gm-postcard-img'></img>
                    <p className='gm-postcard-like'>Like</p>
                </div>
                <div className='gm-postcard-content'>    
                    <h3 className='gm-postcard-title'>toto@gmail.com</h3>
                    <p className='gm-postcard-text'>Blablabla</p>
                    <p className='gm-postcard-date'> Publié le : 01/01/2023 at 10am</p>
                </div>
            </div>
            <div className='gm-postcard'>
                <div>
                    <img src={Img} alt="" className='gm-postcard-img'></img>
                    <p className='gm-postcard-like'>Like</p>
                </div>
                <div className='gm-postcard-content'>    
                    <h3 className='gm-postcard-title'>toto@gmail.com</h3>
                    <p className='gm-postcard-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor blandit enim. Aliquam placerat tempor vehicula.</p>
                    <p className='gm-postcard-date'> Publié le : 01/01/2023 at 10am</p>
                </div>
            </div>
        </div>
    )
}

export default PostCard;
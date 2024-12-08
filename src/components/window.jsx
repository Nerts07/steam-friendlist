import { icons } from '../constants/icons';
import './style.css'

import FriendList from './friendlist';


function Window()
{
    return(
        <>
        <div className="window">
            <header className='header-steam'>
                <div className='head-frag'></div>
                <div className='me'>
                    <img className='east-side-profile' src={icons.users.EastSide}/>

                    <div className='east-name'>
                        <p>EastSide</p>
                        <p>Online</p>
                    </div>

                </div>
                
                <div className='line'></div>

                <div className='twoA'>
                    <img className='twoA-profile' src={icons.users.twoE}/>
                </div>

            </header>
            <div className='friend-line'>
                <div>
                    <p>FRIENDS</p>
                </div>

                <div className='icon-steam'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-solid fa-user"></i>
                    <i class="fa-solid fa-user-group"></i>
                </div>
            </div>
            <div className='over'>
            <FriendList/>
            </div>
        </div>
        </>
    );
}


export default Window;
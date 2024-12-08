import { friends } from "../constants/friends";

function Profile(props)
{
    const {icon, nick, gameName, subGame, isplaying, styleName, link} = props;

    return(
        <div className="profile">
            <a href={link} target="_blank">
            <img className="friend-icon" src={icon}/>
            </a>
            <div className={styleName}>
                <p>{nick}</p>
                <p>{!isplaying ? `${gameName}` : `Online`}</p>
                {subGame && <p>{subGame}</p>}
            </div>
        </div>
    );
}

export default Profile;
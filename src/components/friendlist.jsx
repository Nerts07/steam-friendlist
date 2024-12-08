import { useState, useEffect } from "react";
import { friends } from "../constants/friends";
import Profile from "./profile";

function FriendList()
{
    let inGameFriends = [];
    let onlineFriends = [];

    inGameFriends = friends.filter(friend =>
    {
        return friend.isPlaying;
    })

    onlineFriends = friends.filter(friend =>
    {
        return !friend.isPlaying;
    })

    function InGame()
    {
        return(    
            inGameFriends.map((friend)=>
            {

                return(
                    <Profile 
                    icon={friend.icon} 
                    nick={friend.nickName} 
                    isPlaying={friend.isPlaying}
                    subGame={friend.subGame}
                    key={friend.id}
                    gameName={friend.playingFor}
                    styleName={"friends-nick-and-games"}
                    link={friend.link}
                    />
                );
            }
        ));
    }

    function Online()
    {
        return(    
            onlineFriends.map((friend)=>
            {
                return(
                    <Profile 
                    icon={friend.icon} 
                    nick={friend.nickName} 
                    isPlaying={friend.isPlaying}
                    subGame={friend.subGame}
                    key={friend.id}
                    gameName={'Online'}
                    styleName={"friends-nick-online"}
                    link={friend.link}
                    />
                );
            }
        ));
    }
    const [onlineCount, setOnlineCount] = useState(0);

    useEffect(() => 
    {
        setOnlineCount(onlineFriends.length);
    }, [onlineFriends]);

    return (
        <>
        {inGameFriends.length > 0 && <p className="in-game">In Game</p>}
        
        <div className="friend-list">
        <InGame/>
        {onlineFriends.length > 0 && <p className="in-game">Online Friends <span>{`(${onlineCount})`}</span> </p>}
        <Online/>
        </div>
        </>
    );
}

export default FriendList;
import React from 'react'

const PlayerCard = (props) => {
    console.log("card", props);
return (
    
        <div className="player-card">
            
                {props.player && props.player.length!==0 ? props.player.map(player =>{
                return(
                    <div className="ui cards">
                        <div className="card">
                            <div className="content">
                            <header>Name:{player.name}</header>
                            <div>{player.country}</div>
                            </div>
                        </div>
                    </div>
                )
            }): null }
        </div>
);
}   
         
export default PlayerCard;
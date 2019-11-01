import React from 'react'

const PlayerCard = (props) => {
    console.log("card", props);
return (
<div className="card">
    {props.player && props.player.length!==0 ? props.player.map(player =>{
        return(
            <div>
        <div>Name: {player.name}</div>
        <div>{player.country}</div>
        </div>)
    }): null }    
</div>
);
}
   
         
export default PlayerCard;
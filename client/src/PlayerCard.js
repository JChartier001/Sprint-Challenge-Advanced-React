import React from 'react'

const PlayerCard = (props) => {
    console.log("card", props)
    return ( 

        // props.map(player => {
        //     return (

           
        <div className="player-card" key={props.player.id}>
            <div>Name: {props.name}</div>
        </div>
        //  )
        // })
    );
}
export default PlayerCard;
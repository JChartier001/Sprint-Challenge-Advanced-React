import React from 'react'
import axios from "axios"
import PlayerCard from "./PlayerCard";

class PlayerList extends React.Component {
    constructor(){
        console.log('constructor')
        super();
        this.state={
            player: []
        }
    }

        componentDidMount(){
            console.log('cDM');
            axios
            .get('http://localhost:5000/api/players')
            .then(response => {this.setState({player: response.data})}
            ).catch(err => {console.log("data did not display", err)});
        }
        
    render(){
        console.log("rendered");
        console.log("state", this.state)
        return(        
                <div className="player-list">
                    {this.player !==0 ? <PlayerCard player={this.state.player}/> : null }
               
                </div>
             );
             }   
      

    
}
    
export default PlayerList;
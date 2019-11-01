import React from 'react'
import axios from "axios"
import PlayerCard from "./PlayerCard";

class PlayerList extends React.Component {
    constructor(){
        console.log('constructor')
        super();
        this.state={
            player: ''
        }
    }

        componentDidMount(){
            console.log('cDM')
            axios
            .get('http://localhost:5000/api/players')
            .then(response => {this.setState({player: response.data})}
            )
       
         .catch(err => {console.log("data did not display", err)});
            
        }
        

    render(){
        console.log("rendered")
        return(
           <PlayerCard player={this.state.player} />
           

        );
    };
}

export default PlayerList;
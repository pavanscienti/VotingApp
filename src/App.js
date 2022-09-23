import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './App.css';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      location:[
        {name:"Bali",votes:0},
        {name:"Londan",votes:0},
        {name:"Berlin",votes:0},
        {name:"Belgium",votes:0}
      ],
    };
  }
vote(i){
  let newLocations = [...this.state.location];
  newLocations[i].votes++;

  this.setState({locations:newLocations})
}





  render(){
    return(
  <><h1>Vote for your Destination</h1><div> </div><div className='locations'>
        {this.state.location.map((loc, i) => (
          <div key={i} className="location">
          <div className='voteCount'>{loc.votes}</div>
            <div className='locationName'>{loc.name}</div>
          <button onClick={this.vote.bind(this,i)}>Click</button>
          </div>
        ))}
      </div></>
    
    )
  }
}


export default App;

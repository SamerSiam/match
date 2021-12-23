
import './App.css';
import React, { Component } from 'react'

export class App extends Component {
 
  inputRef=React.createRef();
state={yes:0, no:0, value:0}

yes=() =>{
  this.setState({yes:this.state.yes+1});
}

no=() =>{
  this.setState({no:this.state.no+1});
}

getImageUrl = (index) => {
  return `https://picsum.photos/500/500?random=${index}`;
  }

  componentDidUpdate(){
    this.getImageUrl()
  }
  render() {

    if (this.state.yes+ this.state.no <= this.state.value)
    {

      return (
          <div className="App-container">
      
        <img  src={this.getImageUrl(Date.now())} alt="random"/>
        <div >
        Enter how many pictures you like to see:
          <input ref={this.inputRef} className="ui field" type="text" value={this.state.value} 
                     onChange={e=> this.setState({value:e.target.value })}/>
       
        </div>
        
       <div className="button">
        <button className="button" onClick={this.yes}>Yes </button>
        <button className="button" onClick={this.no}>No </button>
      </div>
      <div className="button">
       <div> {this.state.yes} </div>
       <div> {this.state.no}</div> 
      </div>
       

      </div>
    )
    }
    else{
      return (

        <div> Game Over</div>
      )
    }
  }
}

export default App

import React, { Component } from 'react';
import Header from './Header.js'
import Board from './Board.js'
import './App.css';
import ControlPanel from './ControlPanel'
import DISPLAYS from './CONSTS.js'



class App extends Component {
   constructor(props){
      super(props)
      this.state = {
         display:DISPLAYS.DAYS30,
         days30: undefined,
         allTimes: undefined
      }
   }
   changeDisplay = (newDisplayVal) => {
      this.setState({display:newDisplayVal})
   }
   componentWillMount(){
      const url30="https://fcctop100.herokuapp.com/api/fccusers/top/recent"
      const urlAll="https://fcctop100.herokuapp.com/api/fccusers/top/alltime"
      fetch(url30)
         .then(res => res.json())
         .then(data => {
             this.setState({days30:data})
             // console.log("state.days30 is")
             // console.log(this.state.days30)
         })
         .catch((error)=>{console.log(error)})
      fetch(urlAll)
         .then(res => res.json())
         .then(data => {
             this.setState({allTimes:data})
             console.log("state.allTimes is")
             console.log(this.state.allTimes)
         })
         .catch((error)=>{console.log(error)})
         }
  render() {
     let boardData = undefined
     if (this.state.display===DISPLAYS.DAYS30){
        if (this.state.days30) {
           boardData= this.state.days30
        }
     } else {
        if (this.state.allTimes){
           boardData=this.state.allTimes
        }
     }

    return (
      <div className="App">
      <Header />
      <ControlPanel display={this.state.display} changeDisplay={this.changeDisplay}/>
      {boardData? <Board display={this.state.display} boardData={boardData} /> : ""}
      </div>
    );
  }
}

export default App;

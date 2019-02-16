import React, { Component } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar';
import { ShowModal } from './components/modalpop/Modalpop'
import axios from 'axios';
import CardList from './components/card/CardList';
const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       cards:[],
       myCards:[]
    }
  }
  
  getDataList() {
    axios.get(`http://localhost:3030/api/cards`)
    .then(res => {
      const cards = res.data;
      if(res.status === 200) {
        this.setState({ cards: cards.cards });
      }
    })
  }

  componentDidMount() {
   this.getDataList();
  }
  addItem(props) {
    const selected = this.state.myCards;
    selected.push(props);
    this.setState({
      myCards:selected
    })
  }
  render() {
    return (
      <div className="app">
        <Navbar />
        <div className="app-content">
        <CardList cards={this.state.myCards} showMycards={true}/>
        </div>
        <div className="buttons__bar">
          <a className="buttons__add" onClick={()=>ShowModal(this.state.cards, this.addItem.bind(this))}><span>+</span></a>
        </div>
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar';
import { ShowModal } from './components/modalpop/Modalpop'
import axios from 'axios';
import CardList from './components/card/CardList';
import swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
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
       myCards:[],
       filter:[]
    }
    this.handleChange = this.handleChange.bind(this);
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
  delete(id){
    this.setState({
      myCards: this.state.myCards.filter((x) => x.id != id )
    });
  }
  handleChange(e) {
       // Variable to hold the original version of the list
  let currentList = [];
       // Variable to hold the filter list before putting into state
   let newList = [];

       // If the search bar isn't empty
   if (e.target.value !== "") {
           // Assign the original list to currentList
     currentList = this.props.cards;

           // Use .filter() to determine which items should be displayed
           // based on the search terms
     newList = currentList.filter(item => {
               // change current item to lowercase
       const lc = item.toLowerCase();
               // change search term to lowercase
       const filter = e.target.value.toLowerCase();
               // check to see if the current list item includes the search term
               // If it does, it will be added to newList. Using lowercase eliminates
               // issues with capitalization in search terms and search content
       return lc.includes(filter);
     });
   } else {
           // If the search bar is empty, set newList to original task list
     newList = this.props.cards;
   }
       // Set the filter state based on what our rules added to newList
   this.setState({
     filter: newList
   });
  }
  render() {
    return (
      <div className="app">
        <Navbar />
        <div className="app-content">
          <CardList cards={this.state.myCards} showMycards={true} deleteFunc={this.delete.bind(this)} />
        </div>
        <div className="buttons__bar">
          <a className="buttons__add" onClick={()=>ShowModal(this.state.cards, this.addItem.bind(this), this.handleChange.bind(this))}><span>+</span></a>
        </div>
      </div>
    )
  }
}

export default App

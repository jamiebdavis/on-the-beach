import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card/Card";

let destinations = [
  {
    hotelName: "",
    stars: 0,
    price: 0,
    image: "",
    dateInfo: "",
    description: ""
  },
  {
    hotelName: "",
    stars: 0,
    price: 0,
    image: "",
    dateInfo: "",
    description: ""
  },
  {
    hotelName: "",
    stars: 0,
    price: 0,
    image: "",
    dateInfo: "",
    description: ""
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>On The Beach</h1>
        <Card />
      </div>
    );
  }
}

export default App;

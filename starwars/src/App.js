import React, { Component } from 'react';
import uuid from 'uuid';
import Characters from './components/Characters';
import getSpecies from './components/Species';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      species: ''
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  // getSpecies = URL => {
  //   fetch(URL)
  //   .then(res => {
  //     return res.json();
  //   })
  //   .then(data => {
  //     this.setState({ species: data.name });
  //   })
  // }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="allCards">
          {this.state.starwarsChars.map(charObj => (
            <Characters
              key={uuid()}
              name={charObj.name}
              birth_year={charObj.birth_year}
              species={getSpecies(charObj.species[0])}
              test={charObj.species[0]}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

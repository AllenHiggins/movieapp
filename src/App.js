import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import Header from './components/HeaderComponent/header'
import FilimContainer from './containers/FilimContainer';

import {userSetFilmTitle} from './actions/userInput-actions'
import {filmGetListByTitle} from './actions/film-actions'

class App extends Component {

  componentWillMount(){
    this.props.getFilmList(this.props.userInput.title)
  }
  
  searchForTile = (event) => {
    
    let userTitle = event.target.value
    
    this.props.setTitle(userTitle)
    
    if( userTitle !== ''){
      this.props.getFilmList(userTitle)
    }
  }

  render() {
    return (
      <div className="App">
      
        <Header />

        <input 
          type="text" 
          name="movieSearch" 
          placeholder="Enter search term" 
          onChange={this.searchForTile.bind(this)} 
          value={this.props.userInput.title}/>

        {
          this.props.userInput.title === '' 
            ? <p>Enter a Tilte in the Search Area</p> 
            : <FilimContainer 
                filmTitle={this.props.userInput.title}
                filmlist={this.props.film.filmList}/> 
        }

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userInput: state.userInputReducer,
    film: state.filmReducer
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTitle: (title) => {
      dispatch(userSetFilmTitle(title))
    },
    getFilmList: (title) => {
      dispatch(filmGetListByTitle(title))
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

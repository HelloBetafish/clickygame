import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Clicky Game</h1>
          <p>Click on an image to earn points, but don't click on any more than once!</p>
        </header>
        <div class="container">
          <div class="row">
            <div class="col-md-3">
            <img src="BB8.jpg" alt="BB8" class="img-fluid img-thumbnail"/>
            </div>
            <div class="col-md-3">
            <img src="BB8.jpg" alt="BB8" class="img-fluid img-thumbnail"/>
            </div>
            <div class="col-md-3">
            <img src="BB8.jpg" alt="BB8" class="img-fluid img-thumbnail"/>
            </div>
            <div class="col-md-3">
            <img src="BB8.jpg" alt="BB8" class="img-fluid img-thumbnail"/>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
            <img src="BB8.jpg" alt="BB8" class="img-fluid img-thumbnail"/>
            </div>
            <div class="col-md-3">
            <img src="BB8.jpg" alt="BB8" class="img-fluid img-thumbnail"/>
            </div>
            <div class="col-md-3">
            <img src="BB8.jpg" alt="BB8" class="img-fluid img-thumbnail"/>
            </div>
            <div class="col-md-3">
            <img src="BB8.jpg" alt="BB8" class="img-fluid img-thumbnail"/>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
            <img src="BB8.jpg" alt="BB8" class="img-fluid img-thumbnail"/>
            </div>
            <div class="col-md-3">
            <img src="BB8.jpg" alt="BB8" class="img-fluid img-thumbnail"/>
            </div>
            <div class="col-md-3">
            <img src="BB8.jpg" alt="BB8" class="img-fluid img-thumbnail"/>
            </div>
            <div class="col-md-3">
            <img src="BB8.jpg" alt="BB8" class="img-fluid img-thumbnail"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

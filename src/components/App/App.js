import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import Container from '../Bootstrap/Container';
import Row from '../Bootstrap/Row';
import Col from '../Bootstrap/Col';
import ImgCard from '../ImgCard/ImgCard'
import cards from '../../images.json'

class App extends Component {
  state = {
    cards: cards,
    guessedCards: [],
    score: 0,
    topScore: 0
  }

  shuffle = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
  }

  handleClick = (event) => {
    const cardId = event.target.attributes.getNamedItem("data-id").value;
    // console.log(cardId);
    // We always use the setState method to update a component's state
    this.addGuess(cardId);
    this.shuffle(cards);
  }

  incrementScore = () => {
    this.setState({ score: this.state.score + 1 });
    if (this.setState === 12){
      alert("Congratulations! You are a memory wizard!");
      this.setState({
        guessedCards: [],
        score: 0
      });
    }
  }

  incrementTopScore = () => {
      if (this.state.score === this.state.topScore && this.state.topScore !== 12) {
        this.setState({ topScore: this.state.topScore + 1 });
      }
  }

  addGuess = (id) => {

    if (this.state.guessedCards.indexOf(id) === -1) {
      this.state.guessedCards.push(id);
      this.incrementScore();
      this.incrementTopScore();
    }

    else {
      alert("This card has already been clicked!");
      this.setState({
        guessedCards: [],
        score: 0
      });
    }

    // Set this.state.friends equal to the new friends array
    console.log(this.state.guessedCards);
    // console.log(this.state.guessedCards[0].id)
    console.log(id);
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Clicky Memory Game</h1>
          <p>Click on an image to earn points, but don't click on any more than once!</p>
          <p>Score: {this.state.score}    Top Score: {this.state.topScore}</p>

        </header>
        <Container>
          <Row>
            {this.state.cards.map(card => (
              <Col size="md-3">
                <ImgCard
                  image={card.image}
                  name={card.name}
                  id={card.id}
                  key={card.id}
                  handleClick={this.handleClick}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

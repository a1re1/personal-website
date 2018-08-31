import React, { Component } from 'react';
import './PortfolioCard.css';

/**
* @inspired by alex devero; https://codepen.io/alexdevero/pen/pRjNmW
*/

const cardContainer = document.querySelector('.react-card');

// React component for the front side of the card
class CardFront extends Component {
  render() {
    return(
      <div className='card-side side-front'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xs-6'>
              <img src='https://source.unsplash.com/w8YICpz1I10/358x458' width="40px" height="40px"/>
            </div>

            <div className='col-xs-6 side-front-content'>
              <h2>Czech based</h2>

              <h1>UI/UX Designer</h1>

              <p>Andrey is driven by turning ideas into scalable and and empowering experiences that solve real life problems.</p>

              <p>He is currently the founder of Dvorak Media. Previously, Andrey was a product designer at Dropbox.</p>

              <p>Over the years, Michael has been priviledged to have worked with Adobe, Evernote, Square and more.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// React component for the back side of the card
class CardBack extends Component {
  render() {
    return(
      <div className='card-side side-back'>
        <div className='container-fluid'>
          <h1>Lets get in touch!</h1>
          <form formAction='' className='card-form'>
          </form>
        </div>
      </div>
    )
  }
}

// React component for the card (main component)
class Card extends Component {
  render() {
    return(
      <div className='card-container'>
        <div className='card-body'>
          <CardBack />
          <CardFront />
        </div>
      </div>
    )
  }
}

class PortfolioComponent extends Component {
  render(){
    return(
      <div className='Portfolio'>
        <Card />
        <Card />
        <Card />
      </div>
    )
  }
}

// Render Card component
export default PortfolioComponent;

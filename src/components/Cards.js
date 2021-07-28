import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our products</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Classic mayo burger with pickles sauce and cheddar'
              path='/menu'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Turkey sandwich with lettuce and tomatoes '
              path='/menu'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Hot dog with mustard and ketchup'
              path='/menu'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Chicken nuggets with ketchup dip'
              path='/menu'
            />
            <CardItem
              src='images/img-8.jpg'
              text='chocolate milkshake with chocolate syrup'
              path='/menu'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

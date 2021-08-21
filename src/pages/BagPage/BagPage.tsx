import React, { Component } from 'react';

import './BagPage.scss';

import emptyCartImg from './../../assets/empty_cart.svg';

interface BagPageProps {}

interface BagPageState {}

export default class BagPage extends Component<BagPageProps, BagPageState> {
  constructor(props: BagPageProps) {
    super(props);
  }

  render() {
    return (
      <div className="bag container__main">
        {/* If the bag is empty */}
        <div className="bag__empty-cart">
          <div>
            <img className="bag__empty-cart-img" src={emptyCartImg} alt="empty-bag" />
            <br />
            <div className="bag__empty-cart-message">Your bag is empty. Add items to purchase !</div>
          </div>
        </div>

        <div></div>
      </div>
    );
  }
}

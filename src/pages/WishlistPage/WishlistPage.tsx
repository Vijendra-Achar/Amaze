import React, { Component } from 'react';

import './WishlistPage.scss';

import emptyWishlistImg from './../../assets/empty_wishlist.svg';

interface WishlistPageProps {}

interface WishlistPageState {}

export default class WishlistPage extends Component<WishlistPageProps, WishlistPageState> {
  constructor(props: WishlistPageProps) {
    super(props);
  }

  render() {
    return (
      <div className="wishlist container_main">
        {/* If wishlist is empty */}
        <div className="wishlist__empty-wishlist">
          <div>
            <img className="wishlist__empty-wishlist-img" src={emptyWishlistImg} alt="" />
            <div className="wishlist__empty-wishlist-message">Your wishlist is empty.</div>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

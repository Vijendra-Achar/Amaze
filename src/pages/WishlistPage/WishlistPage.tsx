import React, { Component } from 'react';

import './WishlistPage.scss';

interface WishlistPageProps {}

interface WishlistPageState {}

export default class WishlistPage extends Component<WishlistPageProps, WishlistPageState> {
  constructor(props: WishlistPageProps) {
    super(props);
  }

  render() {
    return <div>Your Wishlist is empty as of now!</div>;
  }
}

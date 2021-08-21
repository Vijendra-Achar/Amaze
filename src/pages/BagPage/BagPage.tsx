import React, { Component } from 'react';

import './BagPage.scss';

interface BagPageProps {}

interface BagPageState {}

export default class BagPage extends Component<BagPageProps, BagPageState> {
  constructor(props: BagPageProps) {
    super(props);
  }

  render() {
    return <div>Your Shopping bag is now empty!</div>;
  }
}

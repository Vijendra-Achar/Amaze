import React, { Component } from 'react';

import Slider from '../../components/Slider/Slider';
import CategoryContainer from '../../components/CategoryContainer/CategoryContainer';

interface Props {}
interface State {}

export default class HomePage extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        <Slider />
        <CategoryContainer />
      </div>
    );
  }
}

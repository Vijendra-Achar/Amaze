import React, { Component } from 'react';

import Slider from '../../components/Slider/Slider';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

interface Props {}
interface State {}

export default class HomePage extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        <NavigationBar />
        <Slider />

        <CategoryCard />
      </div>
    );
  }
}

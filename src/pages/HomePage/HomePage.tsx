import React, { Component } from 'react';
import Slider from '../../components/Slider/Slider';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

interface Props {}
interface State {}

export default class HomePage extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        <NavigationBar />
        <Slider />
      </div>
    );
  }
}

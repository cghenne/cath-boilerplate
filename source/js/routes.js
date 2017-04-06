import React, { Component } from 'react';
import { Route } from 'react-router';

import Movies from 'views/Movies';

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={ Movies } />
      </div>
    );
  }
}

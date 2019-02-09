import { Route, HashRouter, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import * as React from 'react';

import { Hello } from './components/Hello';

const history = createBrowserHistory();

export interface RouterProps {};

export default class Routes extends React.Component<RouterProps, {}> {
  render() {
    return <HashRouter>
        <div>
          <Route exact path="/" component={ Hello } />
          <Route path="/hello" component={ Hello } />
        </div>
    </HashRouter>
  }
};
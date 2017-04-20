import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App  from './components/App';
import WhatIsARainyDayFund from  './components/WhatIsARainyDayFund';
import Landing from './components/Landing';

export default(
  <Router history={hashHistory}>
    <Route path='/' component={App} >
      <IndexRoute component={Landing} />
      <Route path='what-is-a-rainy-day-fund' component={WhatIsARainyDayFund} />
    </Route>
  </Router>
)

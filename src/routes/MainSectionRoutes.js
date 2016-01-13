import React from 'react';
import {Route, IndexRoute} from 'react-router';

// Layouts
import CoreLayout from 'layouts/CoreLayout/CoreLayout';

// Pages
import LandingPage from 'pages/LandingPage/LandingPage';
import AboutPage from 'pages/AboutPage/AboutPage';

export default (
  <Route name="landing-page" path="/" component={CoreLayout}>
    <IndexRoute component={LandingPage} />
    <Route name="about-us" path="about" component={AboutPage} />
  </Route>
);

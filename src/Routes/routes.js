import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from 'react-router-dom';
import Header from '../components/molecules/Headers/header';
import Footer from '../components/molecules/Footers/footer';
import Home from '../views/Home/index';
import Movies from '../views/movies/index.js';
import Series from '../views/series/index';

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/movies" component={Movies} />
        <Route path="/series" component={Series}></Route>
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;

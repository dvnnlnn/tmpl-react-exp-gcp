import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './views/About';
import Home from './views/Home';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <div className={styles.nav}>
          <Link to="/">Home</Link>
          <span>｜</span>
          <Link to="/about">About</Link>
        </div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

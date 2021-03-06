import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import About from './pages/About';
import Article from './pages/Article';
import ArticlesList from './pages/ArticlesList';
import HomePage from './pages/HomePage';
import './App.css';
import NavBar from './NavBar';
import NotFound from './pages/NotFound';


class App extends Component {
  render(){
    return (

      <Router>
        <div className="App">
          <NavBar/>
          <div id="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/about" component={About} />
              <Route path="/articles-list" component={ArticlesList} />
              <Route path="/article/:name" component={Article} />
              <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
      </Router>
    
  );
  }
  
}

export default App;

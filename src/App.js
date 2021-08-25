import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import About from './pages/About';
import Article from './pages/Article';
import ArticleList from './pages/ArticleList';
import HomePage from './pages/HomePage';
import './App.css';
import NavBar from './NavBar';


class App extends Component {
  render(){
    return (

      <Router>
        <div className="App">
          <NavBar/>
          <div id="page-body">
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={About}></Route>
            <Route path="/article-list" component={ArticleList}></Route>
            <Route path="/article" component={Article}></Route>
          </div>
        </div>
      </Router>
    
  );
  }
  
}

export default App;

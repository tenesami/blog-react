import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import About from './pages/About';
import Article from './pages/Article';
import ArticleList from './pages/ArticleList';
import HomePage from './pages/HomePage';
import './App.css';



class App extends Component {
  render(){
    return (

      <Router>
        <div className="App">
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={About}></Route>
          <Route path="/article-list" component={ArticleList}></Route>
          <Route path="/article" component={Article}></Route>
        </div>
      </Router>
    
  );
  }
  
}

export default App;

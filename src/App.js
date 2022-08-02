import './style.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import ListadoPosts from './ListadoPosts';
import Post from './Post';
import DetallePost from './DetallePost';

export default function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/ListadoPosts" component={ListadoPosts}></Route>
        <Route exact path="/post/:id" component={DetallePost} />
      </Router>
    </div>
  );
}

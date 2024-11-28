import React, { Component } from 'react'
import Navbar from './COMPONENTS/Navbar';
import News from './COMPONENTS/News';
import About from './COMPONENTS/About';
import Contact from './COMPONENTS/contact';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  apikey=process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<News apikey={this.apikey} key="general" category="general" />} />
            <Route exact path="/business" element={<News apikey={this.apikey} key="business" category="business" />} />
            <Route exact path="/entertainment" element={<News apikey={this.apikey} key="entertainment" category="entertainment" />} />
            <Route exact path="/health" element={<News apikey={this.apikey} key="health" category="health" />} />
            <Route exact path="/sports" element={<News apikey={this.apikey} key="sports" category="sports" />} />
            <Route exact path="/science" element={<News  apikey={this.apikey}key="science" category="science" />} />
            <Route exact path="/technology" element={<News  apikey={this.apikey}key="technology" category="technology" />} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/contact" element={<Contact/>} />
          </Routes>

        </Router>
      </div>
    )
  }
}

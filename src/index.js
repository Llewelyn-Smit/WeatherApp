import React from 'react';
//import {createRoot} from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import { Component } from 'react';

import reportWebVitals from './reportWebVitals';
import Headpartial from './headFunction';
import Searchpartial from './searchFunction';
import Weekpartial from './weekFunction';





const header = document.getElementById('top');
const head = ReactDOM.createRoot(header);
head.render(<Headpartial />);

const weekly = document.getElementById('week');
const week = ReactDOM.createRoot(weekly);
week.render(<Weekpartial />);

const searcher = document.getElementById('search');
const searching = ReactDOM.createRoot(searcher);
searching.render(<Searchpartial />);

reportWebVitals();

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res }))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }

    return body;
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        {data && (
          <ul>
            {data.map(item => (
              <li key={item.date}>
                <p>Date: {item.date}</p>
                <p>Temperature: {item.temp}</p>
                <p>Condition: {item.condition}</p>
                <img src={item.picture} alt="Weather Icon" />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

root.render(<App />/*,document.getElementById('root')*/);

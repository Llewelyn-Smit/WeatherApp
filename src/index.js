import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Headpartial from './headFunction';
import Searchpartial from './searchFunction';
import Weekpartial from './weekFunction';
const header = document.getElementById('top');
const head = ReactDOM.createRoot(header);
head.render(<Headpartial/>);
const weekly = document.getElementById('week');
const week = ReactDOM.createRoot(weekly);
week.render(<Weekpartial/>);
const searcher = document.getElementById('search');
const searching = ReactDOM.createRoot(searcher);
searching.render(<Searchpartial/>);

reportWebVitals();

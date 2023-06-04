import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Headpartial from "./headFunction";
import SearchPartial from "./searchFunction";
//import Weekpartial from './weekFunction';

// Render Headpartial component
const header = document.getElementById("top");
const head = ReactDOM.createRoot(header);
head.render(<Headpartial />);

// Render SearchPartial component
const searcher = document.getElementById("search");
const searching = ReactDOM.createRoot(searcher);
searching.render(<SearchPartial />);

reportWebVitals();

class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    this.callBackendAPI()
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err));
  }

  // Fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <div>
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layouts/App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));  // ORIGINAL GENERATED CODE.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

// Below we added hot module replacement so that the browser is auto updated w/o refresh:
const rootElement = document.getElementById('root');

let render = () => {
  ReactDOM.render(<App />, rootElement)
}

if (module.hot) {
  module.hot.accept('./app/layout/App', () => {
    setTimeout(render)
  })
}

render()

serviceWorker.unregister();
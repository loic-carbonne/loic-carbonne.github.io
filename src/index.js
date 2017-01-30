import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './Reducers'
import AppContainer from './AppContainer';
import { INIT } from './Actions'
import './index.css';

let store = createStore(reducers)

class Global extends Component {
  constructor(props) {
    super(props);
    store.dispatch(INIT())
  }
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}

ReactDOM.render(
  <Global />,
  document.getElementById('root')
);

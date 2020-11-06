import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ar_EG from 'antd/es/locale/ar_EG';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import reducer from './reducer'
import { createStore } from 'redux';

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider
      getPopupContainer={node => {
        if (node) {
          return node.parentNode;
        }
        return document.body;
      }}
      direction="rtl" locale={ar_EG}>
      <Provider store={store} >
        <App />
      </Provider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

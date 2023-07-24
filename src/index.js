import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';

import {store} from './app/store'
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId='815466921398-nf99d79pnsthq1rfcokgii2rcpj5u229.apps.googleusercontent.com'>
      <App />
      </GoogleOAuthProvider>
  </Provider>
);
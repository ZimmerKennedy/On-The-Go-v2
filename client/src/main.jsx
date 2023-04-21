import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import App from './App'
import './index.css'
import { Provider } from 'react-redux';
import store from './routes/store';
createRoot(document.getElementById("root")).render(
<Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
);
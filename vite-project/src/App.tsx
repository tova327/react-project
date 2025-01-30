import React from 'react';
import { BrowserRouter as Router, Route, Routes, RouterProvider } from 'react-router-dom';


import { router } from './Router';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  
  
  return (
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  )
}

export default App

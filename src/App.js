import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './config/routes';
import './App.scss';

console.log(routes);


function App() {

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route 
          key={index} 
          path={route.path} 
          element={<route.layout>
            <route.element />
            </route.layout>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import Home from '@/pages/Home/Home';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import Product from './pages/Product/Product';

class App extends React.Component {
  render() {
    return (
      <>
        {/* <Home />
        <Login />
        <Register /> */}
        <Product />
      </>
    );
  }
}

export default App

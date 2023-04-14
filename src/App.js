import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import { Home, SingleProduct, Cart, Checkout, Error, About, Products, Private, AuthWrapper } from './pages'

import styled from 'styled-components';
//import { Home } from './pages'


const Button = styled.button`
  background: green;
  color: white;
`

const Container = styled.div`  
   background: red;
   color: white;

`

function App() {
  return ( 
    <AuthWrapper> 
    <Router>
    <Navbar />
    <Sidebar />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/products' element={<Products />} />
    <Route path='/products/:id' element={<SingleProduct />} />
    <PrivateRoute exact path='/checkout' element={<Checkout />} />
    <Route path='*' element={<Error />} />
    </Routes>
    <Footer />
  </Router>    
  </AuthWrapper>  
  
  )
}

export default App;

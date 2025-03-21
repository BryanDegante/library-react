import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import { books } from './data'
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import React, { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }])
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map(item =>
        item.id === book.id
          ?
          {
            ...item,
            quantity: +quantity,
          }
          : item
      ));
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += +item.quantity
    });
    return counter;
  }

  useEffect(() => {
    console.log(cart);
  }, [cart])

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Routes>
          <Route path="/library-react" exact element={<Home />}></Route>
          <Route path="/books" exact element={<Books books={books} />}></Route>
          <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} cart={cart} />}></Route>
          <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


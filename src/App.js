import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import { books } from './data'
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/books" exact element={<Books books={books} />}></Route>
          <Route path="/books/:id"  element={<BookInfo books={books} />}></Route>
          <Route path="/cart"  element={<Cart  />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


import React from "react"

const Cart = () => {
  return (
      <div id="books__body">
          <main id="books__main">
              <div className="books__container">
                  <div className="row">
                      <div className="book__selected--top">
                          <h2 className="cart__title">Cart</h2>
                      </div>
                      <div className="cart">
                          <div className="cart__header">
                              <span className="cart__book">Book</span>
                              <span className="cart__quantity">Quantity</span>
                              <span className="cart__price">Price</span>
                          </div>
                          <div className="cart__body"></div>
                          <div className="cart__empty"></div>
                      </div>
                  </div>
              </div>
          </main>
    </div>
  )
};

export default Cart;

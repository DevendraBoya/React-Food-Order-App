import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCartOverLay, setShowCartOverLay] = useState(false);
  const showCartHandler = () => {
    setShowCartOverLay(true);
  }
  const onCloseClickHandler = () => {
    setShowCartOverLay(false);
  }
  return (
    <CartProvider>
      {
        showCartOverLay && <Cart onCloseClick={onCloseClickHandler}/>
      }
      <Header onClick={showCartHandler}/>
      <Meals></Meals>
    </CartProvider>
  );
}

export default App;

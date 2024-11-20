import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals.js";
import Cart from "./components/Meals/MealIteam/Cart.js";
import CartProvider from "./store/CartProvider.js";
import { useState } from "react";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}

      <header className="App-header">
        <h1>Welcome to React!</h1>
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
      </header>
    </CartProvider>
  );
}

export default App;

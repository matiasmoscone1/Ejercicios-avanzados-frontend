import Products from "./components/Products"
import Cart from "./components/Cart"
import CartContextProvider from "./components/CartContextProvider"

function App() {
  return(
    <CartContextProvider>
      <Products/>
      <Cart/>
    </CartContextProvider>
  )
  
}

export default App

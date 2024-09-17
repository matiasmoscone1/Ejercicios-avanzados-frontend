
import CartContextProvider from "./components/CartContextProvider"
import PrincipalSection from "./components/PrincipalSection";

function App() {
  return(
    <CartContextProvider>
      <PrincipalSection/>
    </CartContextProvider>
  )
  
}

export default App

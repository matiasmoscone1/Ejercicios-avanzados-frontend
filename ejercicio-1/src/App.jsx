import { CountContextProvider } from "./components/CountContextProvider"
import ComponentA from "./components/ComponentA.jsx";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";

function App() {
  
  return (
    <>
      <CountContextProvider>
        <div className="component-container">
          <ComponentA/>
          <ComponentB/>
          <ComponentC/>
        </div>
      </CountContextProvider>
    </>
  )
}

export default App

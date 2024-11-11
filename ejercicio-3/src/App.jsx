import ComponentUsers from "./components/ComponentUsers"
import ContextProvider from "./components/ContextProvider"


function App() {

  return (
    <>
      <ContextProvider>
        <ComponentUsers />
      </ContextProvider>
    </>
  )
}

export default App

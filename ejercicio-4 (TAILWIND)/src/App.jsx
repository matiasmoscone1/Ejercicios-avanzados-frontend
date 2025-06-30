import Login from "./components/Login"
import TaskContextProvider from "./context/TaskContext"

function App() {
  
  return (
    <>
      <TaskContextProvider>
        <Login />

      </TaskContextProvider>

    </>
  )
}

export default App

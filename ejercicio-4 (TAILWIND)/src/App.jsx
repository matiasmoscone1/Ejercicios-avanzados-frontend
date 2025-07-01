import Login from "./components/Login"
import TaskContextProvider from "./context/TaskContext"
import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <>
      <TaskContextProvider>

        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/dashboard" />

        </Routes>

      </TaskContextProvider>

    </>
  )
}

export default App

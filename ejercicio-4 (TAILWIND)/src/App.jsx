import Login from "./components/Login"
import TaskContextProvider from "./context/TaskContext"
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  
  return (
    <>
      <TaskContextProvider>

        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/dashboard" element={<Dashboard />}/>

        </Routes>

      </TaskContextProvider>

    </>
  )
}

export default App

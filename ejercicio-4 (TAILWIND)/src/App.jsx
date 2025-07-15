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
          <PrivateRoute>
            <Route path="/dashboard" element={<Dashboard />}/>
          </PrivateRoute>
    

        </Routes>

      </TaskContextProvider>

    </>
  )
}

export default App

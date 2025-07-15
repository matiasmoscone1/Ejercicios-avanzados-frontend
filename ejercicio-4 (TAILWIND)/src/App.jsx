import Login from "./components/Login"
import TaskContextProvider from "./context/TaskContext"
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  
  return (
    <>
      <TaskContextProvider>

        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />}/>}/>
          


        </Routes>

      </TaskContextProvider>

    </>
  )
}

export default App

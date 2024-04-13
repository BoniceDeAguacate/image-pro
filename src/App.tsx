import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Signup from "./pages/signup"
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth";

function App() {

  return (

  <AuthProvider>

   <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
         </Routes>
    </BrowserRouter>
  </AuthProvider>

    
  );
}

export default App

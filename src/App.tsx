import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Signup from "./pages/signup"
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";

function App() {

  return (

  <AuthProvider>

   <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute>
            <Home/>
          </PrivateRoute>} />
          
          <Route path="/signup" element={<PublicRoute>
            <Signup/>
          </PublicRoute>} />
         </Routes>
    </BrowserRouter>
  </AuthProvider>

    
  );
}

export default App

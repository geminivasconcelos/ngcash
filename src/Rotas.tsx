import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    Outlet
} from "react-router-dom";

import Login from "./pages/Login";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='login' element={<Login />} />
        {/* <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Login' element={<Login />} />

        <Route element={<ProtectedRoute redirect="/Login" />}>
        <Route path='/History' element={<History />} />
        <Route path='/Calculation' element={<Calculation />} />
        <Route path='/Result' element={<Result />} /> */}
        {/* </Route> */}

        {/* <Route path='/Help' element={<Help/>} /> */}
        
      </Routes>
    </BrowserRouter>
  );
};
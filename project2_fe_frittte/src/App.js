
//mport UpdateProduct from "./admin/update-product";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./admin/admin-dashboard";


import WelcomePage from "./Components/WelcomePage";


function App() {
  return (
    <>

     <BrowserRouter>
          {/* <WelcomePage /> */}
              <Routes>
                 <Route path="/admindashboard" element={<AdminDashboard />} />
                 <Route path="" element={<WelcomePage />} />
              
               </Routes> 
      </BrowserRouter>

     </>
  );
}

export default App;

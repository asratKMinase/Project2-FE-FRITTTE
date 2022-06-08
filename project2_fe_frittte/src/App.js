
//mport UpdateProduct from "./admin/update-product";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./admin/admin-dashboard";
import AccountRegister from "./customers/create-an-account";
import CustomerDashboard from "./customers/customer-dashboard";
import AccountDelete from "./customers/delete-an-account";
import AccountUpdate from "./customers/update-an-account";
import Welcome from "./WelcomePage";


function App() {
  return (
    <>

     <BrowserRouter>
          {/* <WelcomePage /> */}
              <Routes>
                 <Route path="/admindashboard" element={<AdminDashboard />} />
                 <Route path="" element={<Welcome />} />
                 <Route path="/customerdashboard" element={<CustomerDashboard/>} />
                 <Route path="/addanaccount" element={<AccountRegister/>}/>
                 <Route path="/updateanaccount" element={<AccountUpdate/>}/>
                 <Route path="/deleteanaccount" element={<AccountDelete/>}/>
              
               </Routes> 
      </BrowserRouter>

     </>
  );
}

export default App;

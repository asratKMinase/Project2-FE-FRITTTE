
//mport UpdateProduct from "./admin/update-product";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/admin/admin-dashboard";
import CrdeiteCardRegister from "./components/creditCards/create-creditCrad";
import CrediteCardDashboard from "./components/creditCards/creditCrad-dashboard";
import CrediteCardDelete from "./components/creditCards/delete-crediteCard";
import AccountRegister from "./components/customers/create-an-account";
import CustomerDashboard from "./components/customers/customer-dashboard";
import AccountDelete from "./components/customers/delete-an-account";
import AccountUpdate from "./components/customers/update-an-account";
import ViewAllFood from "./components/food/view-all-food";
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
                 <Route path="/creditcraddashboard" element={<CrediteCardDashboard/>} />
                 <Route path="/addcreditcard" element={<CrdeiteCardRegister/>}/>
                 <Route path="/deletecreditcard" element={<CrediteCardDelete/>}/>
                 <Route path="/Food-Items" element={<ViewAllFood/>}/>
               </Routes> 
      </BrowserRouter>

     </>
  );
}

export default App;

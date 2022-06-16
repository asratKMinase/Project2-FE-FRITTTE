

import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/admin/admin-dashboard";
import CrdeiteCardRegister from "./components/creditCards/create-creditCrad";
import CrediteCardDashboard from "./components/creditCards/creditCrad-dashboard";
import CrediteCardDelete from "./components/creditCards/delete-crediteCard";
import Payment from "./components/creditCards/make-payment";
import AccountRegister from "./components/customers/create-an-account";
import CustomerDashboard from "./components/customers/customer-dashboard";
import CustomerLogin from "./components/customers/CustomerLogin";
import AccountDelete from "./components/customers/delete-an-account";
import AccountUpdate from "./components/customers/update-an-account";
import ViewAllFood from "./components/food/view-all-food";
import Welcome from "./WelcomePage";

export const userContext = createContext();


function App() {


  const [user, setUser] = useState({username: "Guest" })

  return (
    <>
     <BrowserRouter>
          <userContext.Provider value={[user, setUser]}>
              <Routes>
                 <Route path="/admindashboard" element={<AdminDashboard />} />
                 <Route path="" element={<Welcome />} />
                 <Route path="/customerdashboard" element={<CustomerDashboard/>} />
                 <Route path="/addanaccount" element={<AccountRegister/>}/>
                 <Route path="/updateanaccount" element={<AccountUpdate/>}/>
                 <Route path="/deleteanaccount" element={<AccountDelete/>}/>
                 <Route path="/creditcarddashboard" element={<CrediteCardDashboard/>} />
                 <Route path="/addcreditecard" element={<CrdeiteCardRegister/>}/>
                 <Route path="/deletecreditecard" element={<CrediteCardDelete/>}/>
                 <Route path="/creditcraddashboard" element={<CrediteCardDashboard/>} />
                 <Route path="/addcreditcard" element={<CrdeiteCardRegister/>}/>
                 <Route path="/deletecreditcard" element={<CrediteCardDelete/>}/>
                 <Route path="/Food-Items" element={<ViewAllFood/>}/>
                 <Route path="/make-payment" element={<Payment/>}/>
                 <Route path="/LogIn" element={<CustomerLogin/>}/>
               </Routes>
          </userContext.Provider>
      </BrowserRouter>

     </>
  );
}

export default App;

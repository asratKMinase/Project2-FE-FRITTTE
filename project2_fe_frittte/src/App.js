
import UpdateProduct from "./admin/update-product";
import AdminDashboard from "./admin/admin-dashboard";
import AddProduct from "./admin/add-product";
import DeleteProduct from "./admin/delete-product";
import NavBar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Welcome from "./Components/WelcomePage";


function App() {
  return (
    <>

     <BrowserRouter>
          <NavBar />
              <Routes>
                 <Route path="admindashboard" element={<AdminDashboard></AdminDashboard>} />
                 <Route path="addproduct" element={<AddProduct></AddProduct>} />
                 <Route path="updateproduct" element={<UpdateProduct></UpdateProduct>} />
                 <Route path="deleteproduct" element={<DeleteProduct></DeleteProduct>} /
               </Routes> 
      </BrowserRouter>

     </>
  );
}

export default App;

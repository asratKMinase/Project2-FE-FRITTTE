import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Components/WelcomePage";

function App() {
  return (
    <>
    <BrowserRouter>
      <Welcome />
      <Routes>
        {/* <Route path="/admin" element={} /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

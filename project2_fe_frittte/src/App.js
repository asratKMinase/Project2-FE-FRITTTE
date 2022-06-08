import { BrowserRouter, Routes } from "react-router-dom";
import Welcome from "./Components/WelcomePage";

function App() {
  return (
    <>
    <BrowserRouter>
      <Welcome />
      <Routes>
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

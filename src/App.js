import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bike from "./pages/bike/Bike";
import Home from "./pages/home/Home";
import Bikes from "./pages/marketplace/Bikes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Bikes />} />
        <Route path="/marketplace/:id" element={<Bike />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

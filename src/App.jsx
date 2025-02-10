import Home from "./Components/Pages/home";
import Category from "./Components/Pages/category";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;

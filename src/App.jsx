import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import UnAuthorized from "./pages/UnAuthorized";

function App() {
  return (
    <Router basename="/ReactK">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<UnAuthorized />} />
      </Routes>
    </Router>
  );
}
export default App;

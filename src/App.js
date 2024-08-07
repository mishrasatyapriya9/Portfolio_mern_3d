import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import About from "./pages/About.js";
import Pagenotfound from "./pages/Pagenotfound.js";
import ScrollToTop from "./pages/ScrollToTop.js";
import "react-toastify/dist/ReactToastify.css";
import ContactBack from "../../client/src/components/ContactBG/Backgroundformts.jsx"
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="/ContactBack" element={<ContactBack />} />
      </Routes>
    </>
  );
}

export default App;

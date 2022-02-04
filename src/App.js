import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen jsutify-between">
        <Navbar />
        <main className="container px-3 pb-12 mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        </main>
        <Footer />
      </div>
     
    </Router>
  );
}

export default App;

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { GithubProvider } from "./context/github/GithubContext";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <GithubProvider>
    <Router>
      <div className="flex flex-col h-screen jsutify-between">
        <Navbar />
        <main className="container relative px-3 pb-12 mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        </main>
        <Footer />
      </div>
     
    </Router>
    </GithubProvider>
  );
}

export default App;

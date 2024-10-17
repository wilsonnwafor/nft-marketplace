import { Route, Router, Routes } from "react-router-dom";
import Header from "./components/Navigation/header";
import Home from "./pages/home";
import Discover from "./pages/discover";
import Footer from "./components/footer/footer";


 

function App() {
  
  return (
    <>


      <Header />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/discover" element={<Discover />}/>
      </Routes>
      <Footer />

    </>
  )
};

export default App;

import { Route, Router, Routes } from "react-router-dom";
import Header from "./components/Navigation/header";
import Home from "./pages/home";
import Discover from "./pages/discover";
import Footer from "./components/footer/footer";
import NftDetails from "./pages/NftDetails";


 

function App() {
  
  return (
    <>


      <Header />

      <Routes>
        <Route path="/nft-marketplace" element={<Home />}/>
        <Route path="/nft-marketplace/discover" element={<Discover />}/>
        <Route path="/nft-marketplace/nft/:id" element={<NftDetails />}/>
      </Routes>
      <Footer />

    </>
  )
};

export default App;

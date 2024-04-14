import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import CreateNFT from "./pages/CreateNFT/CreateNFT";
import CreateCollection from "./pages/CreateCollection/CreateCollection";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore/:collections" element={<Explore />} />
        <Route path="/create-nft" element={<CreateNFT />} />
        <Route path="/create-collection" element={<CreateCollection />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

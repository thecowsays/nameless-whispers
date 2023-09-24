import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Auth from "./pages/Auth/Auth";
import NewWhisper from "./pages/NewWhisper/NewWhisper";

import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/newwhisper" element={<NewWhisper />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/auth" element={<Auth />} />
        {/* <Route path="/" element={<Homepage />}/> */}
        {/* <Route path="/" element={<Homepage />}/> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

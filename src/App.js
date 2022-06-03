import AppHeader from './components/UI/App-header';
import AppFooter from "./components/UI/App-footer";
import Home from "./pages/Home";
import AboutUs from "./pages/About-us";
import Price from "./pages/Price";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <AppHeader />
      <main className="container-fluid d-flex flex-column align-items-center">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/price" element={<Price />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contacts" element={<Contacts />} />
              </Routes>
            </main>
            <AppFooter />
    </div>
    </BrowserRouter>
  );
}

export default App;

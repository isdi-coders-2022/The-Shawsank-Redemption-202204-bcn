import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import MyCountriesPage from "./pages/MyCountriesPage/MyCountriesPage";
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/countries" element={<MyCountriesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

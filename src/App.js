import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import MyCountriesPage from "./pages/MyCountriesPage/MyCountriesPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import { useContext } from "react";
import Context from "./store/contexts/CountriesContext";

function App() {
  const { state } = useContext(Context);
  return (
    <div className="App">
      {!state.loaded && <LoadingPage />}
      {state.loaded && (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/countries" element={<MyCountriesPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

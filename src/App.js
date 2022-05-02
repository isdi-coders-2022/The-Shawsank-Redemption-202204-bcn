import "./App.css";
import Country from "./components/Country/Country";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />


      <Country />
      <HomePage />

      <Footer />
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";

import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;

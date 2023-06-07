import { useContext, useEffect } from "react";
import Intro from './components/intro/Intro';
import About from './components/about/About';
import ProductList from './components/productList/ProductList'
import { ThemeContext } from "./context";
import Toggle from "./components/toggle/Toggle";
import Contact from "./components/contact/Contact";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
    style={{
      backgroundColor: darkMode ? "#222" : "#F6F6F2",
      color: "#F6F6F2" && "#388087",
    }}
    >
      {/* <Toggle /> */}
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Quote from "./pages/Quote";
import RandomQuote from "./pages/RandomQuote";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/quote"} element={<Quote />} />
        <Route path={"/random-quote"} element={<RandomQuote />} />
      </Routes>
    </div>
  );
}

export default App;

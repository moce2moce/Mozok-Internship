import { Route, Routes } from "react-router-dom";
import "./App.css";
import Quote from "./components/Quote";
import RandomQuote from "./components/RandomQuote";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/quote"} element={<Quote />} />
        <Route path={"/random-quote"} element={<RandomQuote />} />
      </Routes>
    </div>
  );
}

export default App;

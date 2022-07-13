import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Code from "./Routes/Code";
import Home from "./Routes/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<Code />} />
      </Routes>
    </Router>
  );
}

export default App;

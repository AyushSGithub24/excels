import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { About,Home, Signup,Files } from "./components/pages";


function App(){
  return <div className="App">
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/files" element={<Files />} />

     
    </Routes>
  </div>
}

export default App;
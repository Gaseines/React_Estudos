import "./App.css";

// - 1 Config React Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Components
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      {/* 2 - Links com react router */}
        <Navbar />
        {/* 9 - Search */}
        <SearchForm />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />

          {/* 4 - Rotas dinâmicas */}
          <Route path="/products/:id" element={<Product />} />

          {/* 6 - Nested Route*/}
          <Route path="/products/:id/info" element={<Info />}/>

          {/* 9 - Search */}
          <Route path="/search" element={<Search />} />

          {/* 10 - Redirect */}
          <Route path="/company" element={<Navigate to={"/about"} />} />

          {/* 7 - 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;

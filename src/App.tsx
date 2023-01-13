import ResetGlobalStyle from "./styles/ResetGlobalStyle";

import { Route, Routes } from "react-router-dom";

import Header from "./layouts/Header";
import Home from "./Routes/Home";
import Movie from "./Routes/Movie";
import Search from "./Routes/Search";
import TV from "./Routes/TV";

function App() {
  return (
    <>
      <ResetGlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tv" element={<TV />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}
export default App;

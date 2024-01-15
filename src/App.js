import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Laureat from "./pages/Laureat";
import Passwd from "./pages/Passwd";
import About from "./pages/About";
import Details from "./pages/Details";
import Membres from "./pages/Membres";
import Inscription from "./pages/Inscription";
import Login from "./pages/Login";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/laureat":
        title = "";
        metaDescription = "";
        break;
      case "/passwd":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/details":
        title = "";
        metaDescription = "";
        break;
      case "/membres":
        title = "";
        metaDescription = "";
        break;
      case "/inscription":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/laureat" element={<Laureat />} />
      <Route path="/passwd" element={<Passwd />} />
      <Route path="/about" element={<About />} />
      <Route path="/details" element={<Details />} />
      <Route path="/membres" element={<Membres />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;

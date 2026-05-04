import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Main from "./components/Main"
import ProjectDetail from "../src/components/ProjectDetail.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router> {/* Il Router deve avvolgere tutto ciò che usa la navigazione */}
      <Header />

      <Routes>
        {/* La Home visualizzerà Main */}
        <Route path="/" element={<Main />} />

        {/* La pagina di dettaglio visualizzerà ProjectDetail */}
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>

      <hr />
      <Footer />
    </Router>
  );
}

export default App;
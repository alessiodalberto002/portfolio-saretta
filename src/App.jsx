import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import ProjectDetail from "../src/components/ProjectDetail.jsx";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";

// Wrapper per forzare il re-render al cambio dell'ID nell'URL
function ProjectDetailWrapper() {
  const { id } = useParams();
  return <ProjectDetail key={id} />;
}

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/project/:id" element={<ProjectDetailWrapper />} />
      </Routes>
      <hr />
      <Footer />
    </Router>
  );
}

export default App;
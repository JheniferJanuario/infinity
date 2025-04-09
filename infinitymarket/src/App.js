import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaExplorar from './pages/PaginaExplorar';
import Explorar from './pages/Explorar'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/explorar" element={<PaginaExplorar />} />
        <Route pah= '/explorar2' element={<Explorar />} />
      </Routes>
    </Router>
  );
}

export default App;
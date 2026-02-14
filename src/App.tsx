import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Faaliyetlerimiz from './pages/Faaliyetlerimiz';
import Hakkimizda from './pages/Hakkimizda';
import Referanslar from './pages/Referanslar';
import İletişim from './pages/Iletisim';
import ZiraiIlac from './pages/ZiraiIlac';
import DamlaSulama from './pages/DamlaSulama';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden w-full">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/zirai-ilac" element={<ZiraiIlac />} />
          <Route path="/damla-sulama" element={<DamlaSulama />} />
          <Route path="/faaliyetlerimiz" element={<Faaliyetlerimiz />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/referanslar" element={<Referanslar />} />
          <Route path="/iletisim" element={<İletişim />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

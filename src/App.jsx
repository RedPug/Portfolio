import { HashRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Navbar from 'components/NavBar/Navbar';
import Footer from 'components/Footer/Footer';

import routesConfig from 'routesConfig';

import 'App.css';
import { useEffect } from 'react';

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }else{
        console.warn(`Element with id ${hash} not found.\n`);
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    // <Router basename={process.env.PUBLIC_URL}>
    <Router>
      <ScrollToHash />
      <div className="container">
        <Navbar />
        <main>

        <Routes>
          {routesConfig.map((route, index) =>
            <Route key={index} path={route.path} element={route.element} />
          )}
        </Routes>

        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

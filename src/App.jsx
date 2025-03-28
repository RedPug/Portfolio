import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from 'components/NavBar/Navbar';
import Footer from 'components/Footer/Footer';
import ScrollToHash from 'components/Utility/ScrollToHash';
import ScrollToTop from 'components/Utility/ScrollToTop';

import routesConfig from 'routesConfig';

import 'App.css';

function App() {

  return (
    // <Router basename={process.env.PUBLIC_URL}>
    <Router>
      <ScrollToHash />
      <ScrollToTop />
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

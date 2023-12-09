import {
  createBrowserRouter, createRoutesFromElements,
  RouterProvider, Route, Outlet
} from 'react-router-dom';

// CSS
import './css/App.css';
import './css/Home.css';
import './css/Header.css';
import './css/Footer.css';
import './css/DateCard.css';
import './css/Instructions.css';
import './css/Play.css';

// Pages
import Home from './pages/Home';
import Play from './pages/Play';
import Instructions from './pages/Instructions';

// Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';

/**
 * TODO: 
 * - Home Page - 
 * - Header -
 * - Footer - 
 * - Color Pallete -
 * - Font Style -
 * - 
 */

function App() {
  const Root = () => {
    return <>
      <Header />
      <Outlet />
      <Footer />
    </>
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/instructions" element={<Instructions />} />
      </Route>
    )
  )

  return (
    <div className="page-container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
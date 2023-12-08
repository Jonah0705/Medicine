import Profile from './components/Profile';
import LoginButton from './components/LoginButton';
import Home from  './components/Home';
import Medicine from  './components/Medicine';
import Test from './components/Test';
import { useAuth0 } from '@auth0/auth0-react';
import './index.css';
import Footer from './components/Footer';
import Missing from './components/Missing';
import { Spinner } from './components/Spinner';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavbarDefault from './components/Navbar';


function App() {
  const {isLoading, error} = useAuth0();
  return (
    <main >
      <NavbarDefault />
      {error && 
      <LoginButton />}
      {!error && isLoading && 
      <><Spinner /></>
      }
      {!error && !isLoading && (
        <>
            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Medicine" element={<Medicine />} />
                <Route path="/Test" element={<Test />} />
                <Route path="*" element={<Missing />} />
              </Routes>
            </BrowserRouter>
        </>
      )}
      <Footer />
    </main>
  );
}

export default App;

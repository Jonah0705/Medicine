import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import Home from  './components/Home';
import Medicine from  './components/Medicine';
import Test from './components/Test';
import { useAuth0 } from '@auth0/auth0-react';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import NavbarDefault from './components/Navbar';


function App() {
  const {isLoading, error} = useAuth0();
  return (
    <main className='column'>
      {error && 
      <LoginButton />}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <NavbarDefault />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Medicine" element={<Medicine />} />
                <Route path="/Test" element={<Test />} />
              </Routes>
            </BrowserRouter>
        </>
      )}
    </main>
  );
}

export default App;

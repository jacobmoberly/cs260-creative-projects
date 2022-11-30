import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import Explore from './pages/Explore';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/pages/search" element={<Search />}></Route>
          <Route path="/pages/explore" element={<Explore />}></Route>
          <Route path="/pages/profile" element={<Profile />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import TopNav from './components/topnav/TopNav.jsx';
import CatNav from './components/catnav/CatNav';
import MainComponent from './components/maincomponent/MainComponent';
function App() {
  return (
    <div>
      <TopNav />
      <CatNav />
      <MainComponent />
    </div>
  );
}

export default App;

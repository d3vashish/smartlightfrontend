import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User1 from './pages/User1';
import User2 from './pages/User2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/User-1" element={<User1 />} />
        <Route path="/User-2" element={<User2 />} />
      </Routes>
    </Router>
  );
}

export default App;

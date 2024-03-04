import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
const ProgressBarWrapperLazy = lazy(() => import('./components/ProgressBar/ProgressBarWrapper'));

function App() {
  return (
    <>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/progress-bar">Progress Bar</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/progress-bar" element={<ProgressBarWrapperLazy />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
const ProgressBarWrapperLazy = lazy(() => import('./components/ProgressBar/ProgressBarWrapper'));
const UseEffectCustomHookLazy = lazy(() => import('./components/UseEffectCustomHook/UseEffectCustomHook'));

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
          <li>
            <Link to="/custom-use-effect">Custom Use Effect</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/progress-bar" element={<ProgressBarWrapperLazy />} />
            <Route exact path="/custom-use-effect" element={<UseEffectCustomHookLazy />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

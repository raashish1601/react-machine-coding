import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
const StarRatingLazy = lazy(() => import('./components/StarRating/StarRating'));
const ProgressBarWrapperLazy = lazy(() => import('./components/ProgressBar/ProgressBarWrapper'));
const UseMemoCustomHookLazy = lazy(() => import('./components/UseMemoCustomHook/UseMemoCustomHook'));
const UseEffectCustomHookLazy = lazy(() => import('./components/UseEffectCustomHook/UseEffectCustomHook'));
const GridLightsReverseLazy = lazy(() => import('./components/GridLightsReverse/GridLightsReverse'));
const GenerateRandomColorCirclesLazy = lazy(() => import('./components/GenerateRandomColorCircles/GenerateRandomColorCircles'));

function App() {
  return (
    <>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/star-rating">Star Rating</Link>
          </li>
          <li>
            <Link to="/progress-bar">Progress Bar</Link>
          </li>
          <li>
            <Link to="/custom-use-memo">Custom Use Memo</Link>
          </li>
          <li>
            <Link to="/custom-use-effect">Custom Use Effect</Link>
          </li>
          <li>
            <Link to="/grid-lights-reverse">Grid Lights Reverse</Link>
          </li>
          <li>
            <Link to="/generate-random-color-circles">Generate Random Color Circles</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/star-rating" element={<StarRatingLazy value={0} total={5}/>} />
            <Route exact path="/progress-bar" element={<ProgressBarWrapperLazy />} />
            <Route exact path="/custom-use-memo" element={<UseMemoCustomHookLazy />} />
            <Route exact path="/custom-use-effect" element={<UseEffectCustomHookLazy />} />
            <Route exact path="/grid-lights-reverse" element={<GridLightsReverseLazy />} />
            <Route exact path="/generate-random-color-circles" element={<GenerateRandomColorCirclesLazy />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;







/* Controlled Vs Uncontrolled
1. They do not maintain their own state	1. They maintain their own state
2. Data is controlled by the parent component	2. Data is controlled by the DOM
3. They take in the current values through props and then notify the changes via callbacks	3. Refs are used to get their current values
*/

/*
What are the different phases of React component’s lifecycle?
There are three different phases of React component’s lifecycle:

Initial Rendering Phase: This is the phase when the component 
is about to start its life journey and make its way to the DOM.

Updating Phase: Once the component gets added to the DOM, it 
can potentially update and re-render only when a prop or state 
change occurs. That happens only in this phase.

Unmounting Phase: This is the final phase of a component’s 
life cycle in which the component is destroyed and removed 
from the DOM.

Explain the lifecycle methods of React components in detail.

Some of the most important lifecycle methods are:

componentWillMount() – Executed just before rendering takes place both on the client as well as server-side.
componentDidMount() – Executed on the client side only after the first render.
componentWillReceiveProps() – Invoked as soon as the props are received from the parent class and before another render is called.
shouldComponentUpdate() – Returns true or false value based on certain conditions. If you want your component to update, return true else return false. By default, it returns false.
componentWillUpdate() – Called just before rendering takes place in the DOM.
componentDidUpdate() – Called immediately after rendering takes place.
componentWillUnmount() – Called after the component is unmounted from the DOM. It is used to clear up the memory spaces.
*/
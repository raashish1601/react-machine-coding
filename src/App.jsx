import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from './context/use-theme-context';
import Navbar from './components/Navbar/Navbar';
import About from './pages/about';
import Blog from './pages/blog';
import Home from './pages/home';
const ElementsInViewPort = lazy(() => import('./components/ElementsInViewPort/ElementsInViewPort'));
const AccordianWrapper = lazy(() => import('./components/Accordian/AccordianWrapper'));
const CountdownTimer = lazy(() => import('./components/CountdownTimer/CountdownTimer'));
const OverlappingCircles = lazy(() => import('./components/OverlappingCircles/OverlappingCircles'));
const ModalWrapper = lazy(() => import('./components/Modal/ModalWrapper'));
const TypeaheadLazy = lazy(() => import('./components/Typeahead/Typeahead'));
const OtpLoginLazy = lazy(() => import('./components/OtpLogin/OtpLogin'));
const TooltipLazy = lazy(() => import('./components/Tooltip/Tooltip'));
const StarRatingLazy = lazy(() => import('./components/StarRating/StarRating'));
const MultiselectInputLazy = lazy(() => import('./components/MultiselectInput/MultiselectInput'))
const ProgressBarWrapperLazy = lazy(() => import('./components/ProgressBar/ProgressBarWrapper'));
const UseMemoCustomHookLazy = lazy(() => import('./components/UseMemoCustomHook/UseMemoCustomHook'));
const UseEffectCustomHookLazy = lazy(() => import('./components/UseEffectCustomHook/UseEffectCustomHook'));
const GridLightsReverseLazy = lazy(() => import('./components/GridLightsReverse/GridLightsReverse'));
import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator';
const SelectableGrid = lazy(() => import('./components/SelectableGrid/SelectableGrid'));
import MultilvelDropdown from './components/MultilevelDropdown/MultilevelDropdown';
const FileExplorerWrapper = lazy(() => import('./components/FileExplorer/FileExplorerWrapper'));
const GenerateRandomColorCirclesLazy = lazy(() => import('./components/GenerateRandomColorCircles/GenerateRandomColorCircles'));
import './App.css';
import "./styles/globals.scss";
import TicTacToe from './components/TicTacToe/TicTacToe';
import Caraousel2 from './components/Caraousel2/Caraousel2';
import TextHighlight from './components/TextHighlight/TextHighlight';
import PaginationLimitWrapper from './components/PaginationLimit/PaginationWrapper';
import NestedCommentsWrapper from './components/NestedComments/NestedCommentsWrapper';
const Stopwatch = lazy(() => import('./components/StopWatch/StopWatch'));
const ShowHidePassword = lazy(() => import('./components/ShowHidePassword/ShowHidePassword'));
const CaraouselWrapper = lazy(() => import('./components/Caraousel/CaraouselWrapper'));
const PaginationWrapper = lazy(() => import('./components/Pagination/PaginationWrapper'));
const InfiniteScrollWindowHeight = lazy(() => import('./components/InfiniteScrollWindowHeight/InfiniteScrollWindowHeight'));
const SliderProgressUI = lazy(() => import('./components/SliderProgressUI/SliderProgressUI'));

function App() {
  return (
    <>
      <ThemeProvider>
        <ScrollIndicator />
        <MultilvelDropdown />
        <BrowserRouter>
          <NestedCommentsWrapper />
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
              <Link to="/multiselect-input">Multiselect Input</Link>
            </li>
            <li>
              <Link to="/generate-random-color-circles">Generate Random Color Circles</Link>
            </li>
            <li>
              <Link to="/tooltip">Tooltip</Link>
            </li>
            <li>
              <Link to="/otp-login">Otp Login</Link>
            </li>
            <li>
              <Link to="/typeahead">Typeahead</Link>
            </li>
            <li>
              <Link to="/modal">Modal</Link>
            </li>
            <li>
              <Link to="/overlapping-circles">Overlapping Circles</Link>
            </li>
            <li>
              <Link to="/countdown-timer">Countdown Timer</Link>
            </li>
            <li>
              <Link to="/accordian">Accordian</Link>
            </li>
            <li>
              <Link to="/selectable-grid">Selectable Grid</Link>
            </li>
            <li>
              <Link to="/elements-viewport">Elements Viewport</Link>
            </li>
            <li>
              <Link to="/file-explorer">File Explorer</Link>
            </li>
            <li>
              <Link to="/stopwatch">Stopwatch</Link>
            </li>
            <li>
              <Link to="/pagination">Pagination</Link>
            </li>
            <li>
              <Link to="/paginationLimitWrapper">Pagination Limit Wrapper</Link>
            </li>
            <li>
              <Link to="/caraousel">Caraousel</Link>
            </li>
            <li>
              <Link to="/caraousel-2">Caraousel - 2</Link>
            </li>
            <li>
              <Link to="/infinite-scroll">Infinite Scroll</Link>
            </li>
            <li>
              <Link to="/show-hide-password">Show Hide Password</Link>
            </li>
            <li>
              <Link to="/slider-progress-ui">Slider Progress UI</Link>
            </li>
            <li>
              <Link to="/textHighlight">TextHighlight</Link>
            </li>
            <li>
              <Link to="/ticTacToe">TicTacToe</Link>
            </li>
            <li>
              <Link to="/dark-mode">Dark Mode</Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route exact path="/tooltip"
                element={
                  <TooltipLazy
                    message='This is a tooltip'
                    // position='top-left'
                    // position='top-right'
                    // position='top-center'
                    // position='bottom-left'
                    position='bottom-right'
                  // position='bottom-center'
                  >
                    <div className='tooltipHead'>Hello, Welcome to my world</div>
                  </TooltipLazy>}
              />
              <Route exact path="/star-rating" element={<StarRatingLazy value={0} total={5} />} />
              <Route exact path="/progress-bar" element={<ProgressBarWrapperLazy />} />
              <Route exact path="/custom-use-memo" element={<UseMemoCustomHookLazy />} />
              <Route exact path="/custom-use-effect" element={<UseEffectCustomHookLazy />} />
              <Route exact path="/grid-lights-reverse" element={<GridLightsReverseLazy />} />
              <Route exact path="/multiselect-input" element={<MultiselectInputLazy />} />
              <Route exact path="/otp-login" element={<OtpLoginLazy />} />
              <Route exact path="/typeahead" element={<TypeaheadLazy />} />
              <Route exact path="/modal" element={<ModalWrapper />} />
              <Route exact path="/countdown-timer" element={<CountdownTimer />} />
              <Route exact path="/overlapping-circles" element={<OverlappingCircles />} />
              <Route exact path="/accordian" element={<AccordianWrapper />} />
              <Route exact path="/selectable-grid" element={<SelectableGrid />} />
              <Route exact path="/elements-viewport" element={<ElementsInViewPort />} />
              <Route exact path="/file-explorer" element={<FileExplorerWrapper />} />
              <Route exact path="/slider-progress-ui" element={<SliderProgressUI />} />
              <Route exact path="stopwatch" element={<Stopwatch />} />
              <Route exact path="show-hide-password" element={<ShowHidePassword />} />
              <Route exact path="/generate-random-color-circles" element={<GenerateRandomColorCirclesLazy />} />
              <Route exact path="/dark-mode" element={<Navbar />} />
              <Route exact path="/pagination" element={<PaginationWrapper />} />
              <Route exact path="/paginationLimitWrapper" element={<PaginationLimitWrapper />} />
              <Route exact path="/caraousel" element={<CaraouselWrapper />} />
              <Route exact path="/caraousel-2" element={<Caraousel2 />} />
              <Route exact path="/textHighlight" element={<TextHighlight />} />
              <Route exact path="/infinite-scroll" element={<InfiniteScrollWindowHeight />} />
              <Route exact path="/ticTacToe" element={<TicTacToe />} />
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/blog" element={<Blog />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
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
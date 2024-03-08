import { FunctionComponent, Suspense, useEffect, useState,lazy } from 'react';

import {
  Route,
  Routes,
} from 'react-router';

// import Layout from '@components/PageLayout/Layout';
// import lazy from '@components/Lazy-loading/lazy_loading';
import EventsPage from './screens/EventsScreen/EventsPage';
import LandingPage from './screens/LandingScreen/LandingPage';
import ComingSoon from './components/ComingSoon/ComingSoon';
import Blank from './components/Blank';

const LazyloadDelay = 4000;
const HomeScreen = lazy(() =>
  delay(LazyloadDelay).then(() => import('./components/PageLayout/Layout'))
);
// const HomeScreen = lazy(() => import('./pages/landing'));
// const Sponsors = lazy(() => import('./pages/sponsors'));
// import Artists from './pages/artists';
// import Events from './pages/events';
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const App: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={ <Fallback><HomeScreen/></Fallback>}>
        <Route index element={<LandingPage />} />
        <Route path="/about" element={<ComingSoon/>} />
        <Route path="/theme" element={<ComingSoon/>} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/artists" element={<ComingSoon />} /> 
        <Route path="/gallery" element={<ComingSoon />} /> 
        <Route path="/merchandise" element={<ComingSoon />} /> 
        <Route path="/contact" element={<ComingSoon />} /> 
      </Route>
    </Routes>
  );
};

function Fallback({ children }: { children: JSX.Element }) {
  const [isLoading, setIsLoading] = useState(true);

  // this is for forcefully displaying the splash screen for 3 seconds
  // irrespective of the loading time of the app.
  // default is 3 seconds.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, LazyloadDelay);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        // this will be displayed for 3 seconds
        // when refreshed or reloaded the page will be displayed instead of white screen
        <div className={'preload-screen'}></div>
      ) : (
        // this will be displayed after 3 seconds
        <Suspense fallback={<Blank/>}>{children}</Suspense>
      )}
    </>
  );
}
export default App;
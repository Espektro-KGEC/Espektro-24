import { FunctionComponent } from 'react';

import {
  Route,
  Routes,
} from 'react-router';

import Layout from '@components/PageLayout/Layout';
import EventsPage from './screens/EventsScreen/EventsPage';
import LandingPage from './screens/LandingScreen/LandingPage';
import ComingSoon from './components/ComingSoon/ComingSoon';

const App: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
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

export default App;
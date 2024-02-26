import { FunctionComponent } from 'react';

import {
  Route,
  Routes,
} from 'react-router';

import Layout from '@components/PageLayout/Layout';
import EventsPage from './screens/EventsScreen/EventsPage';
import ComingSoon from './components/ComingSoon/ComingSoon';

const App: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/events" element={<EventsPage />} />
        <Route path="/artists" element={<ComingSoon />} /> //! Applied coming soon to artist page for now
        <Route index element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
      </Route>
    </Routes>
  );
};

export default App;
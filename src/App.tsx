import { FunctionComponent } from 'react';

import {
  Route,
  Routes,
} from 'react-router';

import Layout from '@components/PageLayout/Layout';
import EventsPage from './screens/EventsScreen/EventsPage';

const App: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/events" element={<EventsPage/>}/>
        <Route index element={<div>Home</div>} />
        <Route path="about" element={<div>About</div>} />
      </Route>
    </Routes>
  );
};

export default App;
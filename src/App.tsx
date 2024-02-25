import { FunctionComponent } from 'react';

import {
  Route,
  Routes,
} from 'react-router';

import Layout from '@components/PageLayout/Layout';

const App: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Home</div>} />
        <Route path="about" element={<div>About</div>} />
      </Route>
    </Routes>
  );
};

export default App;
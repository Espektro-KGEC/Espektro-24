import { Outlet } from 'react-router';

import Navigation from '@components/Navbar/Navbar';

const Layout = () => {
  return (
    <>
      <Navigation />
      <main className="main">
        <Outlet />
      </main>
      {/* <footer>Footer</footer> */}
    </>
  );
};

export default Layout;

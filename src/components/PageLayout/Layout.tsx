import { Outlet } from 'react-router';

import Navigation from '@components/Navbar/Navbar';

const Layout = () => {
  return (
    <>
      <Navigation />
      <main className="mainBox">
        <Outlet />
      </main>
      {/* <footer>Footer</footer> */}
    </>
  );
};

export default Layout;

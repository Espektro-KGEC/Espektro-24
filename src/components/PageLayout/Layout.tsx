import { Outlet } from 'react-router';
import {motion} from 'framer-motion'; 
import Navigation from '@components/Navbar/Navbar';

const Layout = () => {
  return (
    <><motion.div initial={{opacity:0,y:"-100%"}}
    animate={{opacity:1,y:"0%"}}
    transition={{delay:5}}>
      <Navigation /></motion.div>
      <main className="mainBox">
        <Outlet />
      </main>
      {/* <footer>Footer</footer> */}
    </>
  );
};

export default Layout;

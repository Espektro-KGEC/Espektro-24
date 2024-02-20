import React from "react";

import { NavbarProps } from "./types";

const Navbar: React.FC<NavbarProps> = (props) => {
  return <div {...props}>Navbar</div>;
};

export default Navbar;

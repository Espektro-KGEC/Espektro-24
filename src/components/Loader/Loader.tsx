import React from "react";
import { LoaderProps } from "./types";

const Loader: React.FC<LoaderProps> = (props) => {
  return <div {...props}>Loader</div>;
};

export default Loader;

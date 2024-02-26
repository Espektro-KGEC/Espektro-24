import { FunctionComponent } from "react";

import { Route, Routes } from "react-router";

import Layout from "@components/PageLayout/Layout";
import HomePage from "./components-global/Home";

const App: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<div>About</div>} />
      </Route>
    </Routes>
  );
};

export default App;

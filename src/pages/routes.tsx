import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Profile from "./Profile/index";
import Overview from "./Profile/Overview/index";
import Repositories from "./Profile/Repositories/index";
import Error404 from "../components/Error404/index";

const Pages: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/alessandrohenriqueramos" />} />
      <Route path="/:username" element={<Profile />}>
        <Route path="/" element={<Overview />} />
        <Route path="/repositories" element={<Repositories />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Pages;

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Layout from "./layout/Layout";
import Assessment from "./components/assessment/Assessment";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/assessment"
          element={
            <Layout>
              <Assessment />
            </Layout>
          }
        />

        <Route path="/" element={<Navigate to="/assessment" />} />
      </Routes>
    </Router>
  );
};

export default App;

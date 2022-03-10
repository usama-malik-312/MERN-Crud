// import "./App.css";
import React, { useState } from "react";

import LandingPage from "./screens/LandingPAge/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateNote from "./screens/CreteNote/createNote";
import SingleNote from "./screens/SingleNote/SingleNote";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";

const { default: Header } = require("./components/Header/Header");
const { default: Footer } = require("./components/Footer/Footer");

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Header setSearch={setSearch} />
      <Routes>
        <Route
          exact
          path="/"
          element={<LandingPage style={{ minHeight: "90vh" }} />}
        />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/profileScreen" element={<ProfileScreen />} />
        <Route path="/createNote" element={<CreateNote />} />
        <Route exact path="/note/:id" element={<SingleNote />} />
        <Route path="/mynotes" element={<MyNotes search={search} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import React from "react";
import "./App.css";
import MyNavbar from "./Components/Navbar/Navbar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home/Home.js";
import MealPlanning from "./Components/MealPlanning/MealPlanning.js";
import NutritionalInfo from "./Components/NutritionalInfo/NutritionalInfo.js";
import RecipeSearch from "./Components/RecipeSearch/RecipeSearch.js";
import UserProfile from "./Components/UserProfile/UserProfile.js";
import LoginRegister from "./Components/auth/loginRegister/LoginRegister.jsx";


function App() {
  return (
    <Router>
     <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MealPlanning" element={<MealPlanning />} />
        <Route path="/NutritionalInfo" element={<NutritionalInfo />} />
        <Route path="/RecipeSearch" element={<RecipeSearch />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/LoginRegister" element={<LoginRegister />} />
      </Routes>
    </Router>
  );
}

export default App;

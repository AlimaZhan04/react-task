import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import "./App.css";
const App = () => {
  let users = [
    {
      name: "Alima",
      lastName: "Zhanbalaeva",
      age: 18,
      id: Date.now(),
    },

    {
      name: "Saikal",
      lastName: "Zhanysheva",
      age: 25,
      id: Date.now(),
    },
  ];
  return (
    <div>
      <Header />
      <Section users={users} />
      <Footer />
    </div>
  );
};

export default App;

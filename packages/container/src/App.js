import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./container/Header";
import MarketingApp from "./container/MarketingApp";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Hi Container!</h1>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};

export default App;

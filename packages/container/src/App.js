import { StylesProvider, createGenerateClassName } from "@material-ui/styles";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./container/Header";
import MarketingApp from "./container/MarketingApp";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;

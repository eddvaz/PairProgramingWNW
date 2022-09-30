import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";

import { GlobalStyle } from "./Styles/styledGlobal";

const App = () => {
  return (
    <section>
      <GlobalStyle />
      <div>
        <Header />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default App;

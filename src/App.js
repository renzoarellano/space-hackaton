import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
/* import Home from "./pages/Home"; */
import Login from "./pages/Login";
import Error from "./pages/Error";
import ScrollToTop from "./components/common/ScrollToTop";
const App = () => {
  const routing = (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </Router>
  );

  return routing;
};

export default App;

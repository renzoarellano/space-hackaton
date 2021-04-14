import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import SecondView from "./pages/SecondPage";
import ThridView from "./pages/ThridPage";
import Error from "./pages/Error";
import ScrollToTop from "./components/common/ScrollToTop";
const App = () => {
  const routing = (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/paso-2" component={SecondView} />
        <Route exact path="/paso-3" component={ThridView} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </Router>
  );

  return routing;
};

export default App;

import React, { useEffect } from "react";

import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.less";
import { connect } from "react-redux";
import { FirebaseAuthListener } from "./Redux/auth/authActions";
import "./index.css";
import { Layout } from "antd";

import Dashboard from "./Pages/Dashboard/Dashboard";
import Profile from "./Pages/Profile/Profile";
import RateFeedback from "./Pages/RateFeedback/RateFeedback";
import Customer from "./Pages/Customer/Customer";
import AntLayout from "./Component/AntLayout/AntLayout";
import Product from "./Pages/Product/Product";
import Quotes from "./Pages/Quotes/Quotes";
import ViewList from "./Pages/ViewList/ViewList";
import Authentication from "./Pages/Authentication/Authentication";
import Doctors from "./Pages/Doctors/Doctors";
import AvailableDoctors from "./Pages/AvailableDoctors/AvailableDoctors";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#00818F",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#00818F",
    },
  },
});

const { Header, Content } = Layout;

function App({ FirebaseAuthListener }) {
  useEffect(() => {
    console.log("App Render");
    FirebaseAuthListener();
  }, []);
  console.log("App");
  return (
    <Switch>
      <ThemeProvider theme={theme}>
        <Route path="/" component={Authentication} exact />
        <AntLayout>
          <Route path="/home" component={Dashboard} />
          <Route path="/doctorlist" component={ViewList} />
          <Route path="/available_doctors" component={AvailableDoctors} />
          <Route path="/quote" component={Quotes} />
          <Route path="/appointment" component={Product} />
          <Route path="/feedback" component={RateFeedback} />

          {/* //Admin pages */}
          <Route path="/add_doctor" component={Customer} />
          <Route path="/doctors" component={Doctors} />
        </AntLayout>
      </ThemeProvider>
    </Switch>
  );
}

var actions = {
  FirebaseAuthListener,
};
export default connect(null, actions)(App);

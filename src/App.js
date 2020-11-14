import React, { Component } from "react";
import Content from "./Content";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>

        <Grid item container>
          <Grid Item sm={2}></Grid>
          <Grid Item sm={8}>
            <Content />
          </Grid>
          <Grid Item sm={2}></Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;

import React from "react";

// material ui
import { Grid } from "@material-ui/core";

// styles
import useStyles from './styles';

// components
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";


function App() {
  const { grid } = useStyles()

  return (
    <div>
      <Grid className={grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh' }}>
        <Grid item xs={12} sm={4}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

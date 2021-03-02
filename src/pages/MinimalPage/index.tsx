import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from '../../components';
import { CustomTheme } from '../../theme';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: CustomTheme) => ({
  root: {},
}));

export const MinimalPage = () => {
  const classes = useStyles();
  const params = useParams();
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.root}>
      <Grid item>
        <div className={classes.root}>
          <h1>First Page!</h1>
          <Link to="/main/page-name">Route: main page</Link>
          <br />
          <Link to="/doesntexist">Route: page that doesnt exist</Link>
          <br />

          <pre>{JSON.stringify(params)}</pre>
        </div>
      </Grid>
    </Grid>
  );
};

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

export const NotMadeYet = () => {
  const classes = useStyles();
  const params = useParams();
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.root}>
      <Grid item>
        <h1>Page Not Found!</h1>
        <br />

        <Link to="/">Back Home</Link>
        <br />

        <pre>{JSON.stringify(params)}</pre>
      </Grid>
    </Grid>
  );
};

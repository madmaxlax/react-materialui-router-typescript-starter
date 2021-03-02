import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Footer } from '../../components';
import { CustomTheme } from '../../theme';
import { LayoutProps } from '../../utils/types';

const useStyles = makeStyles((theme: CustomTheme) => ({
  minimalRoot: {},
  main: {
    minHeight: '300px',
  },
  leftSide: {
    backgroundColor: theme.palette.primary.main,
  },
  content: {},
}));

const Minimal = (props: LayoutProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children, layoutprops } = props;

  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="stretch"
        className={classes.minimalRoot}
      >
        <Grid item container justifyContent="center" alignItems="stretch">
          <Grid item container xs={12} justifyContent="center" alignItems="stretch" className={classes.main}>
            <Grid item xs={6} justifyContent="center" alignItems="center" container className={classes.leftSide}>
              <Typography variant="h2">Appname</Typography>
            </Grid>
            <Grid item justifyContent="center" alignItems="center" container xs={6}>
              <main className={classes.content}>{children}</main>
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    </>
  );
};

export default Minimal;

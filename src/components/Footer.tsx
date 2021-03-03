import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React from 'react';
import { CustomTheme } from '../theme';
import { ClassNameProps } from '../utils/types';
import { Link } from './Link';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: CustomTheme) => ({
  footerRoot: {},
  footerContainer: { minHeight: 100 },
}));

const Footer = (props: ClassNameProps) => {
  const { className } = props;
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="stretch"
      className={clsx(classes.footerRoot, className)}
    >
      <Grid item container justifyContent="center" alignItems="center" className={classes.footerContainer}>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" to="https://material-ui.com/">
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;

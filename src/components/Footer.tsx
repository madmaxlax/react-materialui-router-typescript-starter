import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React from 'react';
import { CustomTheme } from '../theme';
import { ClassNameProps } from '../utils/types';
import { Link } from './Link';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: CustomTheme) => ({
  footerRoot: {},
}));

const Footer = (props: ClassNameProps) => {
  const { className } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.footerRoot, className)}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" to="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </div>
  );
};

export default Footer;

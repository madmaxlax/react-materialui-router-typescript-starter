import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Footer } from '../../components';
import { CustomTheme } from '../../theme';
import { ClassNameChildrenProps } from '../../utils/types';
import Topbar from './components/Topbar';

const useStyles = makeStyles((theme: CustomTheme) => ({
  root: {},
  content: { paddingTop: theme.spacing(10) },
}));

const Main = (props: ClassNameChildrenProps) => {
  const { className, children, ...rest } = props;
  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const params = useParams() as any;
  console.log(params);

  return (
    <div
      className={clsx(
        {
          [classes.root]: true,
        },
        className
      )}
    >
      <Topbar {...rest} />
      <Grid container justifyContent="center" alignItems="center">
        <main className={classes.content}>
          {children}
          <Footer />
        </main>
      </Grid>
    </div>
  );
};

export default Main;

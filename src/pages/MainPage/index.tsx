import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from '../../components';
import { CustomTheme } from '../../theme';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: CustomTheme) => ({
  root: {},
}));

export const MainPage = () => {
  const classes = useStyles();
  const params = useParams();
  return (
    <div className={classes.root}>
      <h1>Main Page!</h1>
      <Link to="/">Back to minimal page</Link>
      <pre>{JSON.stringify(params)}</pre>
    </div>
  );
};

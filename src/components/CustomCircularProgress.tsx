import { Box, CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React from 'react';
import { CustomTheme } from '../theme';
import { ClassNameProps } from '../utils/types';

const useStyles = makeStyles((theme: CustomTheme) => ({
  circularProgressRoot: {},
}));

interface GWCircularProgressProps extends ClassNameProps {
  text?: string;
}

const CustomCircularProgress = (props: GWCircularProgressProps) => {
  const { text, className } = props;
  const classes = useStyles();

  return (
    <Box className={clsx(classes.circularProgressRoot, className)}>
      {text ? (
        <Box p={3}>
          <Typography variant="h4">{text}</Typography>
        </Box>
      ) : null}
      <CircularProgress />
    </Box>
  );
};

export default CustomCircularProgress;

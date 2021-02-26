import { Drawer, DrawerProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React from 'react';
import { CustomTheme } from '../../../theme';
import { ClassNameChildrenProps } from '../../../utils/types';

const useStyles = makeStyles((theme: CustomTheme) => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)',
    },
  },
  root: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
}));

interface SidebarProps extends DrawerProps, ClassNameChildrenProps {}

const Sidebar = (props: SidebarProps) => {
  const { open, variant, onClose, className, children } = props;

  const classes = useStyles();

  return (
    <Drawer anchor="left" classes={{ paper: classes.drawer }} onClose={onClose} open={open} variant={variant}>
      <div className={clsx(classes.root, className)}>{children}</div>
    </Drawer>
  );
};

export default Sidebar;

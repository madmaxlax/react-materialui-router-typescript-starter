import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React, { useState } from 'react';
import { CustomTheme } from '../../../theme';
import { ClassNameProps } from '../../../utils/types';

const useStyles = makeStyles((theme: CustomTheme) => ({
  root: {},
  flexGrow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  drawer: {},
}));
const Topbar = (props: ClassNameProps) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  return (
    <>
      <AppBar {...rest} position="relative" className={clsx(classes.root, className)}>
        <Toolbar>
          <IconButton
            edge="start"
            onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} component="div">
            App
          </Typography>
          <Button color="inherit">Button</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        classes={{ paper: classes.drawer }}
        onClose={() => setSidebarIsOpen(false)}
        open={sidebarIsOpen}
        variant="temporary"
      >
        <div className={clsx(classes.root, className)}>
          <Button>Example link</Button>
        </div>
      </Drawer>
    </>
  );
};

export default Topbar;

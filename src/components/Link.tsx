import { Container } from '@material-ui/core';
import { default as MaterialUILink, LinkTypeMap } from '@material-ui/core/Link';
import React from 'react';
import { NavLink } from 'react-router-dom';

const isInternalURL = (to: string) => {
  try {
    const url = new URL(to, window.location.origin);
    return url.hostname === window.location.hostname;
  } catch {
    return false;
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Link = <D extends React.ElementType = LinkTypeMap['defaultComponent'], P = Record<string, unknown>>(
  // trying to fix this type is needlessly difficult
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any
) => {
  return props.disabled ? (
    <Container {...props} />
  ) : (
    <MaterialUILink
      {...props}
      //internal vs external links
      href={!isInternalURL(props.to) ? props.to : undefined}
      component={isInternalURL(props.to) ? NavLink : 'a'}
      to={isInternalURL(props.to) ? props.to : '/'}
    />
  );
};

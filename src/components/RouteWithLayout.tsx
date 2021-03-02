import React, { ElementType } from 'react';
import { Route, RouteComponentProps, RouteProps } from 'react-router-dom';

export interface RouteWithLayoutProps extends RouteProps {
  layout: ElementType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  layoutprops?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

const RouteWithLayout = (props: RouteWithLayoutProps) => {
  const { layout: Layout, component: Component, layoutprops, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout layoutprops={layoutprops}>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};
export default RouteWithLayout;

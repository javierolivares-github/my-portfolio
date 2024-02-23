import { lazy, Fragment } from 'react';
import { Route } from 'react-router-dom';

export const renderRoutes = () => {
  return routes.map((route, index) => {
    const Component = route.element || Fragment;
    const Layout = route.layout || Fragment;
    return (
      <Route 
        key={index} 
        path={route.path} 
        element={
          <Layout>
            <Component />
          </Layout>   
        } 
      />
    );
  });
};

export const routes = [
  {
    path: "/",
    element: lazy(async () => await import("../pages/Home")),
    layout: lazy(async () => await import("../layouts/AppLayout"))
  },
  {
    path: "/about",
    element: lazy(async () => await import("../pages/About")),
    layout: lazy(async () => await import("../layouts/AppLayout"))
  },
  {
    path: "/blog",
    element: lazy(async () => await import("../pages/Blog")),
    layout: lazy(async () => await import("../layouts/AppLayout"))
  }
]
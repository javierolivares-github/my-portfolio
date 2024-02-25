import { Suspense } from 'react';
import { lazy, Fragment } from 'react';
import { Route } from 'react-router-dom';

export const renderRoutes = () => {
  return routes.map((route, index) => {
    const Component = route.element || Fragment;
    const Layout = route.layout || Fragment;
    const Guard = route.guard || Fragment;

    return (
      <Route 
        key={index} 
        path={route.path} 
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <Guard>
              <Layout>
                <Component />
              </Layout> 
            </Guard> 
          </Suspense> 
        } 
      />
    );
  });
};

export const routes = [
  // Public Routes:
  {
    path: "/login",
    element: lazy(async () => await import("../pages/Login")),
  },
  // Protected Routes:
  {
    path: "/",
    element: lazy(async () => await import("../pages/Home")),
    layout: lazy(async () => await import("../layouts/AppLayout")),
    guard: lazy(async () => await import("../guards/AuthGuard")),
  },
  {
    path: "/about",
    element: lazy(async () => await import("../pages/About")),
    layout: lazy(async () => await import("../layouts/AppLayout")),
    guard: lazy(async () => await import("../guards/AuthGuard")),
  },
  {
    path: "/blog",
    element: lazy(async () => await import("../pages/Blog")),
    layout: lazy(async () => await import("../layouts/AppLayout")),
    guard: lazy(async () => await import("../guards/AuthGuard")),
  },
]
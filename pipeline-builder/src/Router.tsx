import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import { AppShell, ScrollArea } from "@mantine/core";
import { PageNotFound } from "./components/pages/PageNotFound/PageNotFound";
import { Dashboard } from "./components/pages/Dashboard/Dashboard";
import { Sidebar } from "./components/organisms/Sidebar/Sidebar";
import { routeName } from "./shared/routeName";

export function Router() {
  const publicRoutes = createHashRouter(
    [
      {
        path: "/",
        element: (
          <ScrollArea.Autosize h="100vh">
            <AppShell navbar={{ width: 300, breakpoint: 700}}>
              <AppShell.Navbar>
                <Sidebar />
              </AppShell.Navbar>
              <AppShell.Main>
                <Outlet />
              </AppShell.Main>
            </AppShell>
          </ScrollArea.Autosize>
        ),
        errorElement: <PageNotFound />,
        children: [
          {
            path: "",
            element: <Dashboard />,
            errorElement: <PageNotFound />,
          },
          {
            path: routeName.DASHBOARD,
            element: <Dashboard />,
            errorElement: <PageNotFound />,
          },
        ],
      },
    ],
    { basename: "/" }
  );

  return <RouterProvider router={publicRoutes} />;
}

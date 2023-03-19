import { useContext, lazy, Suspense } from "react";
import { AppContext } from "./context/AppContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedElement, ProtectedRoute } from "./components/Protected";
import LoaderSuspense from "./components/LoaderSuspense";
import Nav from "./components/Nav";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";
const HomePage = lazy(() => import("./pages/HomePage"));
const DashBoardUsers = lazy(() => import("./pages/DashBoardUsers"));
const UserAddPage = lazy(() => import("./pages/UserAddPage"));
const UserChangePasswordForm = lazy(() =>
  import("./pages/UserChangePasswordForm")
);
const PeopleScheduleForm = lazy(() => import("./pages/PeopleScheduleForm"));
const PeoplePreviewSchedule = lazy(() =>
  import("./pages/PeoplePreviewSchedule")
);
const PeopleAddForm = lazy(() => import("./pages/PeopleAddForm"));
const PeopleEditForm = lazy(() => import("./pages/PeopleEditForm"));
const PeopleViews = lazy(() => import("./pages/PeopleViews"));
const PeopleReports = lazy(() => import("./pages/PeopleReports"));
const PeopleStatistics = lazy(() => import("./pages/PeopleStatistics"));
const FaqsPage = lazy(() => import("./pages/FaqsPage"));
const Error404Page = lazy(() => import("./pages/Error404Page"));

function App() {
  const { user } = useContext(AppContext);
  const avatar = user ? `/src/assets/${user.role}_avatar.png` : "";
  const permissions = user ? user.permissions : [];

  return (
    <BrowserRouter>
      <main className="container-fluid">
        <ProtectedElement isAllowed={!!user}>
          <Nav avatar={avatar} permissions={permissions} />
        </ProtectedElement>
        <Suspense fallback={<LoaderSuspense />}>
          <Routes>
            <Route index element={<LoginPage />} />
            <Route path="/auth/login" element={<LoginPage />} />

            <Route element={<ProtectedRoute isAllowed={!!user} />}>
              <Route path="/home/welcome" element={<HomePage />} />
              <Route
                path="/users/manage/password/:role/change"
                element={<UserChangePasswordForm />}
              />
              <Route
                path="/people/view/:id/edit"
                element={<PeopleEditForm />}
              />
              <Route path="/people/view" element={<PeopleViews />} />
              <Route path="/help/asks/frecuently" element={<FaqsPage />} />
            </Route>

            <Route
              element={
                <ProtectedRoute
                  isAllowed={!!user && user.permissions.includes("admin")}
                />
              }
            >
              <Route path="/users/manage" element={<DashBoardUsers />} />
              <Route path="/users/manage/add" element={<UserAddPage />} />
              <Route
                path="/users/manage/:role/delete"
                element={<DashBoardUsers />}
              />
            </Route>

            <Route
              path="/people/add"
              element={
                <ProtectedRoute
                  isAllowed={!!user && user.permissions.includes("add")}
                  navigateTo="/home/welcome"
                >
                  <PeopleAddForm />
                </ProtectedRoute>
              }
            />

            <Route
              path="/people/schedule"
              element={
                <ProtectedRoute
                  isAllowed={!!user && user.permissions.includes("schedule")}
                  navigateTo="/home/welcome"
                >
                  <PeopleScheduleForm />
                </ProtectedRoute>
              }
            />

            <Route
              path="/people/preview"
              element={
                <ProtectedRoute isAllowed={!!user} navigateTo="/home/welcome">
                  <PeoplePreviewSchedule />
                </ProtectedRoute>
              }
            />

            <Route
              path="/people/reports"
              element={
                <ProtectedRoute
                  isAllowed={!!user && user.permissions.includes("reports")}
                  navigateTo="/home/welcome"
                >
                  <PeopleReports />
                </ProtectedRoute>
              }
            />

            <Route
              path="/people/statistics"
              element={
                <ProtectedRoute
                  isAllowed={!!user && user.permissions.includes("statistics")}
                  navigateTo="/home/welcome"
                >
                  <PeopleStatistics />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<Error404Page />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

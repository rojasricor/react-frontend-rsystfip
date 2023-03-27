import { useContext, lazy, Suspense } from "react";
import { AppContext } from "./context/AppContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedElement, ProtectedRoute } from "./components/Protected";
import LoaderSuspense from "./components/LoaderSuspense";
import BlockContainer from "./components/BlockContainer";
import Nav from "./components/Nav";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";
const HomePage = lazy(() => import("./pages/HomePage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const AddUserPage = lazy(() => import("./pages/AddUserPage"));
const PasswordChangerPage = lazy(() => import("./pages/PasswordChangerPage"));
const SchedulePage = lazy(() => import("./pages/SchedulePage"));
const ScheduleViewPage = lazy(() => import("./pages/ScheduleViewPage"));
const AddPeoplePage = lazy(() => import("./pages/AddPeoplePage"));
const EditPeoplePage = lazy(() => import("./pages/EditPeoplePage"));
const ViewsPeoplePage = lazy(() => import("./pages/ViewsPeoplePage"));
const ReportsPeoplePage = lazy(() => import("./pages/ReportsPeoplePage"));
const StatisticsDailyPage = lazy(() => import("./pages/StatisticsDailyPage"));
const StatisticsScheduledPage = lazy(() =>
  import("./pages/StatisticsScheduledPage")
);
const FaqsPage = lazy(() => import("./pages/FaqsPage"));
const Error404Page = lazy(() => import("./pages/Error404Page"));
import "bootswatch/dist/zephyr/bootstrap.min.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const { user } = useContext(AppContext);
  const avatar = user ? `/img/${user.role}/avatar.png` : "";
  const permissions = user ? user.permissions : [];

  return (
    <BrowserRouter>
      <BlockContainer>
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
                element={<PasswordChangerPage />}
              />
              <Route
                path="/people/view/:id/edit"
                element={<EditPeoplePage />}
              />
              <Route path="/people/view" element={<ViewsPeoplePage />} />
              <Route path="/help/asks/frecuently" element={<FaqsPage />} />
            </Route>

            <Route
              element={
                <ProtectedRoute
                  isAllowed={!!user && user.permissions.includes("admin")}
                />
              }
            >
              <Route path="/users/manage" element={<DashboardPage />} />
              <Route path="/users/manage/add" element={<AddUserPage />} />
              <Route
                path="/users/manage/:role/delete"
                element={<DashboardPage />}
              />
            </Route>

            <Route
              path="/people/add"
              element={
                <ProtectedRoute
                  isAllowed={!!user && user.permissions.includes("add")}
                  navigateTo="/home/welcome"
                >
                  <AddPeoplePage />
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
                  <SchedulePage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/people/preview"
              element={
                <ProtectedRoute isAllowed={!!user} navigateTo="/home/welcome">
                  <ScheduleViewPage />
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
                  <ReportsPeoplePage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/people/statistics/daily"
              element={
                <ProtectedRoute
                  isAllowed={!!user && user.permissions.includes("statistics")}
                  navigateTo="/home/welcome"
                >
                  <StatisticsDailyPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/people/statistics/scheduled"
              element={
                <ProtectedRoute
                  isAllowed={!!user && user.permissions.includes("statistics")}
                  navigateTo="/home/welcome"
                >
                  <StatisticsScheduledPage />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<Error404Page />} />
          </Routes>
        </Suspense>
      </BlockContainer>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

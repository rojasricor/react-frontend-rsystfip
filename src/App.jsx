import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedElement from "./components/ProtectedElement";
import ProtectedRoute from "./components/ProtectedRoute";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import AddUserPage from "./pages/AddUserPage";
import PswChangeUserPage from "./pages/PswChangeUserPage";
import ProgrammingPage from "./pages/ProgrammingPage";
import ProgrammingViewPage from "./pages/ProgrammingViewPage";
import AddPeoplePage from "./pages/AddPeoplePage";
import EditPeoplePage from "./pages/EditPeoplePage";
import HistoryPeoplePage from "./pages/HistoryPeoplePage";
import HistoryCancelledPage from "./pages/HistoryCancelledPage";
import ReportsPeoplePage from "./pages/ReportsPeoplePage";
import StcsDailyPage from "./pages/StcsDailyPage";
import StcsScheduledPage from "./pages/StcsScheduledPage";
import FaqsPage from "./pages/FaqsPage";
import Error404Page from "./pages/Error404Page";
import "./index.scss";

const App = () => {
  const { user } = useContext(AppContext);
  const avatar = user ? `/img/${user.role}/avatar.png` : "";
  const permissions = user ? user.permissions : [];

  return (
    <BrowserRouter>
      <Container fluid>
        <ProtectedElement isAllowed={!!user}>
          <NavBar avatar={avatar} permissions={permissions} />
        </ProtectedElement>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/auth/login" element={<LoginPage />} />

          <Route element={<ProtectedRoute isAllowed={!!user} />}>
            <Route
              path="/home/welcome"
              element={<HomePage permissions={permissions} />}
            />
            <Route
              path="/users/manage/password/:role/change"
              element={<PswChangeUserPage />}
            />
            <Route path="/people/view" element={<HistoryPeoplePage />} />
            <Route
              path="/people/cancelled"
              element={<HistoryCancelledPage />}
            />
            <Route path="/people/view/:id/edit" element={<EditPeoplePage />} />
            <Route path="/help/asks/frecuently" element={<FaqsPage />} />
          </Route>

          <Route
            element={
              <ProtectedRoute
                isAllowed={!!user && permissions.includes("admin")}
              />
            }
          >
            <Route path="/users/manage" element={<UsersPage />} />
            <Route path="/users/manage/add" element={<AddUserPage />} />
            <Route path="/users/manage/:role/delete" element={<UsersPage />} />
          </Route>

          <Route
            path="/people/add"
            element={
              <ProtectedRoute
                isAllowed={!!user && permissions.includes("add")}
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
                isAllowed={!!user && permissions.includes("schedule")}
                navigateTo="/home/welcome"
              >
                <ProgrammingPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/people/preview"
            element={
              <ProtectedRoute isAllowed={!!user} navigateTo="/home/welcome">
                <ProgrammingViewPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/people/reports"
            element={
              <ProtectedRoute
                isAllowed={!!user && permissions.includes("reports")}
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
                isAllowed={!!user && permissions.includes("statistics")}
                navigateTo="/home/welcome"
              >
                <StcsDailyPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/people/statistics/scheduled"
            element={
              <ProtectedRoute
                isAllowed={!!user && permissions.includes("statistics")}
                navigateTo="/home/welcome"
              >
                <StcsScheduledPage />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Error404Page />} />
        </Routes>
      </Container>

      <Footer />
    </BrowserRouter>
  );
};

export default App;

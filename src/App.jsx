import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedElement from "./components/ProtectedElement";
import ProtectedRoute from "./components/ProtectedRoute";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PageAuth from "./pages/PageAuth";
import PageHome from "./pages/PageHome";
import PageManageUsers from "./pages/PageManageUsers";
import PageRegisterUsers from "./pages/PageRegisterUsers";
import PageChangePassword from "./pages/PageChangePassword";
import PageRecoveryPassword from "./pages/PageRecoveryPassword";
import PageLinkRecoveryPsw from "./pages/PageLinkRecoveryPsw";
import PageProgramming from "./pages/PageProgramming";
import PageCalendar from "./pages/PageCalendar";
import PageAddPeople from "./pages/PageAddPeople";
import PageEditPeople from "./pages/PageEditPeople";
import PageAgendatedPeople from "./pages/PageAgendatedPeople";
import PageCancelledPeople from "./pages/PageCancelledPeople";
import PageReportsPeople from "./pages/PageReportsPeople";
import PageStcsDaily from "./pages/PageStcsDaily";
import PageStcsScheduled from "./pages/PageStcsScheduled";
import PageFaqs from "./pages/PageFaqs";
import PageNotFound from "./pages/PageNotFound";
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
          <Route index element={<PageAuth />} />
          <Route path="/auth/login" element={<PageAuth />} />

          <Route element={<ProtectedRoute isAllowed={!!user} />}>
            <Route
              path="/home/welcome"
              element={<PageHome permissions={permissions} />}
            />
            <Route
              path="/users/manage/password/:role/change"
              element={<PageChangePassword />}
            />
            <Route path="/people/view" element={<PageAgendatedPeople />} />
            <Route path="/people/cancelled" element={<PageCancelledPeople />} />
            <Route path="/people/view/:id/edit" element={<PageEditPeople />} />
            <Route path="/help/asks/frecuently" element={<PageFaqs />} />
          </Route>

          <Route
            element={
              <ProtectedRoute
                isAllowed={!!user && permissions.includes("admin")}
              />
            }
          >
            <Route path="/users/manage" element={<PageManageUsers />} />
            <Route path="/users/manage/add" element={<PageRegisterUsers />} />
            <Route
              path="/users/manage/:role/delete"
              element={<PageManageUsers />}
            />
          </Route>

          <Route
            path="/people/add"
            element={
              <ProtectedRoute
                isAllowed={!!user && permissions.includes("add")}
                navigateTo="/home/welcome"
              >
                <PageAddPeople />
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
                <PageProgramming />
              </ProtectedRoute>
            }
          />

          <Route
            path="/people/preview"
            element={
              <ProtectedRoute isAllowed={!!user} navigateTo="/home/welcome">
                <PageCalendar />
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
                <PageReportsPeople />
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
                <PageStcsDaily />
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
                <PageStcsScheduled />
              </ProtectedRoute>
            }
          />

          <Route
            path="/forget/my/password"
            element={<PageRecoveryPassword />}
          />

          <Route
            path="/forget/my/password/:email/:resetToken"
            element={<PageLinkRecoveryPsw />}
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Container>

      <Footer />
    </BrowserRouter>
  );
};

export default App;

import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { ImUserPlus } from "react-icons/im";
import { API_ROUTE } from "../utils/constants";
import DashboardRow from "../components/DashboardRow";

export default function DashBoardUsers() {
  const [usersDashboard, setUsersDashboard] = useState([]);

  useEffect(() => {
    document.title = "RSystfip | Administrate users";
    fetch(`${API_ROUTE}/get/users/manage`)
      .then((request) => request.json())
      .then((data) => setUsersDashboard(data));
  }, []);

  return (
    <div className="row">
      <div className="col-md-6 mx-auto">
        <div className="card card-body">
          <h1 className="h3 text-center">Administrar usuarios</h1>
          <div className="col-md-12">
            <Link to="add" className="btn btn-dark btn-sm text-light mb-2 mt-2">
              <ImUserPlus />
            </Link>
          </div>
          <table className="table table-hover table-striped text-center">
            <caption>Usuarios con acceso.</caption>
            <thead>
              <tr>
                <th>Correo institucional</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usersDashboard.map((user, index) => (
                <DashboardRow key={index} user={user} />
              ))}
            </tbody>
          </table>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

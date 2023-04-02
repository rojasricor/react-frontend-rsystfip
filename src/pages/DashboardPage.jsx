import { useEffect } from "react";
import { Link } from "react-router-dom";
import DivRow from "../components/DivRow";
import TableUsers from "../components/TableUsers";
import { FaUserPlus } from "react-icons/fa";
import { ToastContainer } from "react-toastify";

export default function DashboardPage() {
  useEffect(() => {
    document.title = "RSystfip | Administrate Users";
  }, []);

  return (
    <DivRow>
      <div className="col-md-6 mx-auto">
        <div className="card card-body border-0 rounded-4 shadow">
          <h1 className="h3 text-center">Administrar usuarios</h1>
          <div className="col-md-12">
            <Link to="add" className="btn btn-dark btn-sm text-light mb-2 mt-2">
              <FaUserPlus />
            </Link>
          </div>
          <TableUsers />
        </div>
      </div>
      <ToastContainer />
    </DivRow>
  );
}

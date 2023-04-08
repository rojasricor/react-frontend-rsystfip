import { useEffect } from "react";
import { Link } from "react-router-dom";
import DivRow from "../components/DivRow";
import Cardx from "../components/Cardx";
import DivCol12 from "../components/DivCol12";
import TableUsers from "../components/TableUsers";
import { FaUserPlus } from "react-icons/fa";
import ToastBase from "../components/ToastBase";

export default function DashboardPage() {
  useEffect(() => {
    document.title = "RSystfip | Administrate Users";
  }, []);

  return (
    <DivRow>
      <Cardx title="Administrar usuarios">
        <DivCol12>
          <Link to="add" className="btn btn-dark btn-sm text-light mb-2 mt-2">
            <FaUserPlus />
          </Link>
        </DivCol12>
        <TableUsers />
      </Cardx>
      <ToastBase />
    </DivRow>
  );
}

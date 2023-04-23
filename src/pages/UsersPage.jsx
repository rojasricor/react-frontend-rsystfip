import { useEffect } from "react";
import { Link } from "react-router-dom";
import DivRow from "../components/DivRow";
import Cardx from "../components/Cardx";
import DivCol12 from "../components/DivCol12";
import TableUsers from "../components/TableUsers";
import Notify from "../components/Notify";
import { FaUserPlus } from "react-icons/fa";

const UsersPage = () => {
  useEffect(() => {
    document.title = "RSystfip | Administrate Users";
  }, []);

  return (
    <DivRow>
      <Cardx title="Administrar usuarios">
        <DivCol12>
          <Link to="add" className="btn btn-primary my-4">
            Registrar <FaUserPlus className="mb-1" />
          </Link>
        </DivCol12>
        <TableUsers />
      </Cardx>
      <Notify />
    </DivRow>
  );
};

export default UsersPage;

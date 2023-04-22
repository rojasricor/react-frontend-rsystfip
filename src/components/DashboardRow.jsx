import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { API_ROUTE } from "../constants/api";
import { BiTrash, BiKey } from "react-icons/bi";

export default function DashboardRow({ user: { id, email } }) {
  const [deleted, setDeleted] = useState(false);

  async function deleteUser(role) {
    if (!confirm("Seguro(a) de eliminar ese usuario?")) {
      return;
    }

    try {
      const request = await fetch(`${API_ROUTE}/user`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role,
        }),
      });
      const response = request.json();

      if (!response) {
        return toast.error("Error al eliminar");
      }

      setDeleted(true);
      toast.success("Usuario eliminado exitosamente", {
        position: "top-left",
      });
    } catch (err) {
      toast.error(err);
    }
  }

  if (deleted) {
    return null;
  }

  return (
    <tr>
      <td>{email}</td>
      <td>
        <Link
          to={`/users/manage/password/${id}/change`}
          className="btn btn-light border m-1"
          title={`Change password for user ${email}`}
        >
          <BiKey />
        </Link>
        <button
          onClick={() => deleteUser(id)}
          className={
            id !== 3 ? "btn btn-danger m-1" : "btn btn-danger m-1 disabled"
          }
          title={`Delete user ${email} (Requires confirmation)`}
        >
          <BiTrash />
        </button>
      </td>
    </tr>
  );
}

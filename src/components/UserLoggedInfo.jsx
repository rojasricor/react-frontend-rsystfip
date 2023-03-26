import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function UserLoggedInfo() {
  const { user } = useContext(AppContext);

  return (
    <h1 className="h3">
      {`${user.role === "secretaria" ? "Bienvenida" : "Bienvenido"} ${
        user.role
      }: ${user.name}`}
    </h1>
  );
}

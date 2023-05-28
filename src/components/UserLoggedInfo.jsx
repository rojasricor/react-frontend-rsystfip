import { useSelector } from "react-redux";

const UserLoggedInfo = () => {
  const authState = useSelector(({ auth }) => auth);

  return (
    <h1 className="h3">
      {`${authState.role === "secretaria" ? "Bienvenida" : "Bienvenido"} ${
        authState.role
      }: ${authState.name}`}
    </h1>
  );
};

export default UserLoggedInfo;

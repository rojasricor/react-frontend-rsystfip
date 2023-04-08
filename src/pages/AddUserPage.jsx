import { useEffect } from "react";
import DivRow from "../components/DivRow";
import Cardx from "../components/Cardx";
import FormUserAdd from "../components/FormUserAdd";
import ToastBase from "../components/ToastBase";

export default function AddUserPage() {
  useEffect(() => {
    document.title = "RSystfip | Register New User";
  }, []);

  return (
    <DivRow>
      <Cardx title="Registrar usuario nuevo">
        <FormUserAdd />
      </Cardx>
      <ToastBase />
    </DivRow>
  );
}

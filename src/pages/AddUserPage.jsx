import { useEffect } from "react";
import DivRow from "../components/DivRow";
import Cardx from "../components/Cardx";
import FormUserAdd from "../components/FormUserAdd";
import Notify from "../components/Notify";

const AddUserPage = () => {
  useEffect(() => {
    document.title = "RSystfip | Register New User";
  }, []);

  return (
    <DivRow>
      <Cardx title="Registrar usuario nuevo">
        <FormUserAdd />
      </Cardx>
      <Notify />
    </DivRow>
  );
};

export default AddUserPage;

import { useEffect } from "react";
import { PeopleContextProvider } from "../context/PeopleContext";
import DivRow from "../components/DivRow";
import Cardx from "../components/Cardx";
import FormPeople from "../components/FormPeople";

export default function EditPeoplePage() {
  useEffect(() => {
    document.title = "RSystfip | Data Person";
  }, []);

  return (
    <DivRow>
      <Cardx title="Actualizar Datos">
        <PeopleContextProvider>
          <FormPeople action="edit" />
        </PeopleContextProvider>
      </Cardx>
    </DivRow>
  );
}

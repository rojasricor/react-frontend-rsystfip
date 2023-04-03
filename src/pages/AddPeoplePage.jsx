import { useEffect } from "react";
import { PeopleContextProvider } from "../context/PeopleContext";
import DivRow from "../components/DivRow";
import Cardx from "../components/Cardx";
import FormPeople from "../components/FormPeople";

export default function AddPeoplePage() {
  useEffect(() => {
    document.title = "RSystfip | Fast Scheduling";
  }, []);

  return (
    <DivRow>
      <Cardx title="Agendamiento rápido">
        <PeopleContextProvider>
          <FormPeople action="add" />
        </PeopleContextProvider>
      </Cardx>
    </DivRow>
  );
}

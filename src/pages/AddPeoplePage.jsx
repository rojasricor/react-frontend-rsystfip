import { useEffect } from "react";
import { PeopleContextProvider } from "../context/PeopleContext";
import DivRow from "../components/DivRow";
import Cardx from "../components/Cardx";
import FormPeople from "../components/FormPeople";

const AddPeoplePage = () => {
  useEffect(() => {
    document.title = "RSystfip | Fast Scheduling";
  }, []);

  return (
    <DivRow>
      <Cardx title="Agendamiento diario">
        <PeopleContextProvider>
          <FormPeople action="add" />
        </PeopleContextProvider>
      </Cardx>
    </DivRow>
  );
};

export default AddPeoplePage;

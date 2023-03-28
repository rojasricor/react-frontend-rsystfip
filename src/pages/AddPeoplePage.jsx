import { useEffect } from "react";
import { PeopleContextProvider } from "../context/PeopleContext";
import DivRow from "../components/DivRow";
import FormPeople from "../components/FormPeople";

export default function AddPeoplePage() {
  useEffect(() => {
    document.title = "RSystfip | Fast Scheduling";
  }, []);

  return (
    <DivRow>
      <div className="col-md-6 mx-auto">
        <div className="card card-body border-0 rounded-4 shadow">
          <h1 className="h3 text-center">Agendamiento rápido</h1>
          <PeopleContextProvider>
            <FormPeople action="add" />
          </PeopleContextProvider>
        </div>
      </div>
    </DivRow>
  );
}

import { useEffect } from "react";
import { PeopleContextProvider } from "../context/PeopleContext";
import DivRow from "../components/DivRow";
import FormPeople from "../components/FormPeople";

export default function EditPeoplePage() {
  useEffect(() => {
    document.title = "RSystfip | Data Person";
  }, []);

  return (
    <DivRow>
      <div className="col-md-6 mx-auto">
        <div className="card card-body border-0 rounded-4 shadow">
          <h1 className="h3 text-center">Actualizar Datos</h1>
          <PeopleContextProvider>
            <FormPeople action="edit" />
          </PeopleContextProvider>
        </div>
      </div>
    </DivRow>
  );
}

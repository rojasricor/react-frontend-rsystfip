import { PeopleContextProvider } from "../context/PeopleContext";
import FormPeople from "../components/FormPeople";

export default function PeopleEditForm() {
  return (
    <div className="row">
      <div className="col-md-6 mx-auto">
        <div className="card card-body">
          <h1 className="h3 text-center">Actualizar Datos</h1>
          <PeopleContextProvider>
            <FormPeople action="edit" />
          </PeopleContextProvider>
        </div>
      </div>
    </div>
  );
}

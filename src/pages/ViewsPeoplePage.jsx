import { useEffect } from "react";
import Searcher from "../components/Searcher";

export default function ViewsPeoplePage() {
  useEffect(() => {
    document.title = "RSystfip | Agendated people";
  }, []);

  return (
    <div className="row">
      <div className="col-12">
        <h1 className="h3">Personas Agendadas</h1>
        <Searcher />
      </div>
    </div>
  );
}

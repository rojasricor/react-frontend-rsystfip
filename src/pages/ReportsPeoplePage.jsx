import { useEffect } from "react";
import DivCol12 from "../components/DivCol12";
import ActionerReports from "../components/ActionerReports";

export default function ReportsPeoplePage() {
  useEffect(() => {
    document.title = "RSystfip | Generate Reports";
  }, []);

  return (
    <div className="row">
      <DivCol12>
        <h1 className="h3">Reportes por mes</h1>
        <ActionerReports />
      </DivCol12>
    </div>
  );
}

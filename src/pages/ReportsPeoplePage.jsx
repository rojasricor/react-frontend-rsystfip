import { useEffect } from "react";
import ActionerReports from "../components/ActionerReports";

export default function ReportsPeoplePage() {
  useEffect(() => {
    document.title = "RSystfip | Generate Reports";
  }, []);

  return (
    <div className="row">
      <div className="col-12">
        <h1 className="h3">Reportes por mes</h1>
        <ActionerReports />
      </div>
    </div>
  );
}

import { useEffect } from "react";
import Rower from "../components/Rower";
import ActionerReports from "../components/ActionerReports";

export default function ReportsPeoplePage() {
  useEffect(() => {
    document.title = "RSystfip | Generate Reports";
  }, []);

  return (
    <Rower>
      <h1 className="h3">Reportes por mes</h1>
      <ActionerReports />
    </Rower>
  );
}

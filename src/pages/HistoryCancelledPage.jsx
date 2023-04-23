import { useEffect } from "react";
import Rower from "../components/Rower";
import TableCancelled from "../components/TableCancelled";
import Notify from "../components/Notify";

const HistoryCancelledPage = () => {
  useEffect(() => {
    document.title = "RSystfip | Cancelled History People";
  });

  return (
    <Rower>
      <h1 className="h3">Citas Agendadas</h1>
      <TableCancelled />
      <Notify />
    </Rower>
  );
};

export default HistoryCancelledPage;

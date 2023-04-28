import { Table } from "react-bootstrap";
import ReportRow from "./ReportRow";

const TableReports = ({ start, end, reportFiltered }) => (
  <Table hover striped size="sm" borderless className="text-center">
    <caption>
      Data about people schedule between {start} and {end}.
    </caption>
    <thead>
      <tr>
        <th>Nombres</th>
        <th>Fecha</th>
        <th>Últ. Modificación</th>
        <th>Agendamiento Programado</th>
        <th>Agendamiento Diario</th>
        <th>Tipo Persona</th>
      </tr>
    </thead>
    <tbody>
      {reportFiltered.map((person, index) => (
        <ReportRow key={index} report={person} />
      ))}
    </tbody>
  </Table>
);

export default TableReports;

import Table from "./Table";
import ReportRow from "./ReportRow";

export default ({ start, end, reportFiltered }) => (
  <Table clAdds=" table-borderless">
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

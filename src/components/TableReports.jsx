import ReportRow from "./ReportRow";

export default function TableReports({ reportFiltered }) {
  return (
    <table className="table table-hover table-borderless table-sm text-center">
      <caption>Datos sobre las personas agendadas este mes.</caption>
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
    </table>
  );
}

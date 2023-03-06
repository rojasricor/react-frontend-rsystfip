export default function ReportRow({ report }) {
  return (
    <tr>
      <td>{report.name}</td>
      <td>{report.date}</td>
      <td>{report.time}</td>
      <td>{report.presence_count}</td>
      <td>{report.absence_count}</td>
      <td>{report.person}</td>
    </tr>
  );
}

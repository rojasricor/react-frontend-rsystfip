export default ({ report }) => (
  <tr>
    <td>{report.name}</td>
    <td>{report.date}</td>
    <td>{report.time}</td>
    <td>{report.scheduling_count}</td>
    <td>{report.daily_count}</td>
    <td>{report.person}</td>
  </tr>
);

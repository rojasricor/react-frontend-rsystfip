import Table from "./Table";
import PersonRow from "./PersonRow";

export default function TablePeople({ peopleFiltered }) {
  return (
    <Table>
      <caption>Scheduled people history.</caption>
      <thead>
        <tr>
          <th>No.</th>
          <th>Nombres</th>
          <th>Identifación</th>
          <th>Categoría</th>
          <th>Facultad</th>
          <th>Asunto</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {peopleFiltered.map((person, index) => (
          <PersonRow key={index} person={person} />
        ))}
      </tbody>
    </Table>
  );
}

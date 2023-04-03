import PersonRow from "./PersonRow";

export default function TablePeople({ peopleFiltered }) {
  return (
    <table className="table table-hover table-sm text-center">
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
    </table>
  );
}

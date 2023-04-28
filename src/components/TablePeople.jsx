import { Table } from "react-bootstrap";
import PersonRow from "./PersonRow";

const TablePeople = ({ peopleFiltered }) => (
  <Table responsive hover striped size="sm" className="text-center">
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

export default TablePeople;

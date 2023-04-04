import { Link } from "react-router-dom";
import { FiEdit3 } from "react-icons/fi";

export default ({ person }) => (
  <tr>
    <td>{person.id}</td>
    <td>{person.name}</td>
    <td title={person.description}>
      {person.ty_doc} {person.num_doc}
    </td>
    <td>{person.person}</td>
    <td>{person.fac}</td>
    <td>{person.text_asunt}</td>
    <td>
      <Link
        to={`/people/view/${person.id}/edit`}
        className="btn btn-link link-fc"
        title={`Edit personal data for person ${person.name}`}
      >
        <FiEdit3 />
      </Link>
    </td>
  </tr>
);

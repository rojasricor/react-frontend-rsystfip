export default ({ idx, person }) => (
  <tr>
    <td>{idx + 1}</td>
    <td>{person.name}</td>
    <td title={person.description}>
      {person.ty_doc} {person.num_doc}
    </td>
    <td>{person.person}</td>
    <td>{person.fac}</td>
    <td>{person.cancelled_asunt}</td>
  </tr>
);

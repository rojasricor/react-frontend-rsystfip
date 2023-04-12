export default ({ person }) => (
  <tr>
    <td>{person.id}</td>
    <td>{person.name}</td>
    <td title={person.description}>
      {person.ty_doc} {person.num_doc}
    </td>
    <td>{person.person}</td>
    <td>{person.fac}</td>
    <td>{person.cancell_asunt}</td>
  </tr>
);

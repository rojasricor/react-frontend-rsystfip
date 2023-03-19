import { useRef, useState, useEffect } from "react";
import Searcher from "../components/Searcher";
import TablePeople from "../components/TablePeople";
import { API_ROUTE } from "../utils/constants";

export default function ViewsPeoplePage() {
  const iptFilterRef = useRef(null);

  const [loading, setLoading] = useState(0);
  const [people, setPeople] = useState([]);
  const [peopleFiltered, setPeopleFiltered] = useState([]);

  async function getPeople() {
    try {
      const request = await fetch(`${API_ROUTE}/get/people`);
      const data = await request.json();
      setPeople(data);
      setPeopleFiltered(data);
      iptFilterRef.current.focus();
    } catch (err) {
      setLoading(2);
    } finally {
      setLoading(1);
    }
  }

  useEffect(() => {
    document.title = "RSystfip | Agendated people";
    getPeople();
  }, []);

  let timerId = null;
  function handleFilterChange(evt) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      const query = evt.target.value.toLowerCase();
      setPeopleFiltered(
        people.filter(
          ({ name, num_doc }) =>
            name.toLowerCase().startsWith(query) || num_doc.startsWith(query)
        )
      );
    }, 500);
  }

  return (
    <div className="row">
      <div className="col-12">
        <h1 className="h3">Personas Agendadas</h1>
        <Searcher
          handleFilterChange={handleFilterChange}
          setPeopleFiltered={setPeopleFiltered}
          loading={loading}
          iptFilterRef={iptFilterRef}
        />
        <div className="table-responsive">
          <TablePeople peopleFiltered={peopleFiltered} />
        </div>
      </div>
    </div>
  );
}

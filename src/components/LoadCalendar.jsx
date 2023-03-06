import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import Spinner from "./Spinner";

export default function LoadCalendar() {
  const { loadEventsRef } = useContext(PeopleContext);

  return (
    <div className="load-events" ref={loadEventsRef}>
      Cargando <Spinner tam="sm" />
    </div>
  );
}

import Spinner from "./Spinner";

export default function LoadCalendar({ loadEventsRef }) {
  return (
    <div className="load-events" ref={loadEventsRef}>
      Cargando <Spinner tam="sm" />
    </div>
  );
}

import Spinner from "./Spinner";

export default ({ loadEventsRef }) => (
  <div className="load-events" ref={loadEventsRef}>
    Cargando <Spinner tam="sm" />
  </div>
);

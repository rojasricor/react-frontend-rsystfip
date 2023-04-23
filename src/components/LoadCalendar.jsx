import Spinner from "./Spinner";

const LoadCalendar = ({ loadEventsRef }) => (
  <div className="load-events" ref={loadEventsRef}>
    Cargando <Spinner tam="sm" />
  </div>
);

export default LoadCalendar;

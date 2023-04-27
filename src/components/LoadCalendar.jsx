import Spinner from "./Spinner";

const LoadCalendar = ({ loadEventsRef }) => (
  <div className="load-events" ref={loadEventsRef}>
    Cargando <Spinner />
  </div>
);

export default LoadCalendar;

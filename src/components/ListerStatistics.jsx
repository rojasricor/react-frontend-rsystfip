import DivCol12 from "./DivCol12";
import ListGroup from "./ListGroup";

export default ({
  mostAgendatedOnRange,
  mostAgendatedAlltime,
  start,
  end,
  scheduling_type,
}) => (
  <DivCol12 x="12 my-5">
    <ListGroup
      title={`Agendamiento ${scheduling_type} en el rango de fecha`}
      data={mostAgendatedOnRange}
      start={start}
      end={end}
    />

    <ListGroup
      title={`Agendamiento ${scheduling_type} en todas las fechas`}
      data={mostAgendatedAlltime}
      end={end}
    />
  </DivCol12>
);

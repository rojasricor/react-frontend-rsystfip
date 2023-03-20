import InputDate from "./InputDate";
import FilterChart from "./FilterChart";

export default function DaterStatistics({
  setStart,
  start,
  setEnd,
  end,
  setTyChart,
}) {
  return (
    <div className="row g-3">
      <InputDate labelInfo="Desde:" setDate={setStart} inputValue={start} />

      <InputDate labelInfo="Hasta:" setDate={setEnd} inputValue={end} />

      <FilterChart setTyChart={setTyChart} />
    </div>
  );
}

import DivRow from "./DivRow";
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
    <DivRow>
      <InputDate labelInfo="Desde:" setDate={setStart} inputValue={start} />

      <InputDate labelInfo="Hasta:" setDate={setEnd} inputValue={end} />

      <FilterChart setTyChart={setTyChart} />
    </DivRow>
  );
}

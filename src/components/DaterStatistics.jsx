import DivRow from "./DivRow";
import InputDate from "./InputDate";
import FilterChart from "./FilterChart";

const DaterStatistics = ({ setStart, start, setEnd, end, setChartType }) => (
  <DivRow>
    <InputDate labelInfo="Desde:" setDate={setStart} inputValue={start} />

    <InputDate labelInfo="Hasta:" setDate={setEnd} inputValue={end} />

    <FilterChart setChartType={setChartType} />
  </DivRow>
);

export default DaterStatistics;

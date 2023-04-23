import DivRow from "./DivRow";
import InputDate from "./InputDate";
import FilterSelectPerson from "./FilterSelectPerson";
import FetcherReports from "./FetcherReports";
import Notify from "./Notify";

const DaterReports = ({
  setStartDate,
  startDate,
  setEndDate,
  endDate,
  setCategory,
  reportsFiltered,
}) => (
  <DivRow clAdds=" mb-5">
    <InputDate
      labelInfo="Desde:"
      setDate={setStartDate}
      inputValue={startDate}
    />

    <InputDate labelInfo="Hasta:" setDate={setEndDate} inputValue={endDate} />

    <FilterSelectPerson setCategory={setCategory} />

    <FetcherReports
      startDate={startDate}
      endDate={endDate}
      reportsFiltered={reportsFiltered}
    />

    <Notify />
  </DivRow>
);

export default DaterReports;

import InputDate from "./InputDate";
import FilterSelectPerson from "./FilterSelectPerson";
import FetcherReports from "./FetcherReports";

export default function DaterReports({
  setStartDate,
  startDate,
  setEndDate,
  endDate,
  setCategory,
  reportsFiltered,
}) {
  return (
    <div className="row g-3">
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
    </div>
  );
}

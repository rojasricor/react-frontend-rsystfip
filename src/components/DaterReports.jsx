import InputDate from "../components/InputDate";
import FilterSelectPerson from "../components/FilterSelectPerson";
import GetterReports from "../components/GetterReports";

export default function DaterReports({
  setStartDate,
  startDate,
  setEndDate,
  endDate,
  setCategory,
  category,
  linkReport,
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

      <GetterReports
        linkReport={linkReport}
        startDate={startDate}
        endDate={endDate}
        category={category}
      />
    </div>
  );
}

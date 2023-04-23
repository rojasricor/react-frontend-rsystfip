import { useEffect } from "react";
import DivRow from "../components/DivRow";
import Statistics from "../components/Statistics";

const StcsSchedulePage = () => {
  useEffect(() => {
    document.title = "RSystfip | Statistics Scheduled People";
  }, []);

  return (
    <DivRow>
      <Statistics scheduling_type="scheduled" />
    </DivRow>
  );
};

export default StcsSchedulePage;

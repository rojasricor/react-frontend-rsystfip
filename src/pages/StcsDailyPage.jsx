import { useEffect } from "react";
import DivRow from "../components/DivRow";
import Statistics from "../components/Statistics";

const StcsDailyPage = () => {
  useEffect(() => {
    document.title = "RSystfip | Statistics Daily People";
  }, []);

  return (
    <DivRow>
      <Statistics scheduling_type="daily" />
    </DivRow>
  );
};

export default StcsDailyPage;

import { useEffect } from "react";
import DivRow from "../components/DivRow";
import Statistics from "../components/Statistics";

export default function StcsDailyPage() {
  useEffect(() => {
    document.title = "RSystfip | Statistics Daily People";
  }, []);

  return (
    <DivRow>
      <Statistics scheduling_type="daily" />
    </DivRow>
  );
}

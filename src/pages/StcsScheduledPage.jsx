import { useEffect } from "react";
import DivRow from "../components/DivRow";
import Statistics from "../components/Statistics";

export default function StcsScheduledPage() {
  useEffect(() => {
    document.title = "RSystfip | Statistics Scheduled People";
  }, []);

  return (
    <DivRow>
      <Statistics scheduling_type="scheduled" />
    </DivRow>
  );
}

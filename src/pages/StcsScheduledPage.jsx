import { useEffect } from "react";
import DivRow from "../components/DivRow";
import Charter from "../components/Charter";

export default function StcsScheduledPage() {
  useEffect(() => {
    document.title = "RSystfip | Statistics Scheduled People";
  }, []);

  return (
    <DivRow>
      <Charter scheduling_type="scheduled" />
    </DivRow>
  );
}

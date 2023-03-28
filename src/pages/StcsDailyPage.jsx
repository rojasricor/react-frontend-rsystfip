import { useEffect } from "react";
import DivRow from "../components/DivRow";
import Charter from "../components/Charter";

export default function StcsDailyPage() {
  useEffect(() => {
    document.title = "RSystfip | Statistics Daily People";
  }, []);

  return (
    <DivRow>
      <Charter scheduling_type="daily" />
    </DivRow>
  );
}

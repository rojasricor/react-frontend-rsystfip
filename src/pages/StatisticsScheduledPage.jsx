import { useEffect } from "react";
import Charter from "../components/Charter";

export default function StatisticsPeoplePage() {
  useEffect(() => {
    document.title = "RSystfip | Statistics Scheduled People";
  }, []);

  return (
    <div className="row">
      <Charter scheduling_type="scheduled" />
    </div>
  );
}

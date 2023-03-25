import { useEffect } from "react";
import Charter from "../components/Charter";

export default function StatisticsPeoplePage() {
  useEffect(() => {
    document.title = "RSystfip | Statistics daily people";
  }, []);

  return (
    <div className="row">
      <Charter scheduling_type="daily" />
    </div>
  );
}

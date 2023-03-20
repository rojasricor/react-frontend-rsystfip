import { useEffect } from "react";
import Charter from "../components/Charter";

export default function StatisticsPeoplePage() {
  useEffect(() => {
    document.title = "RSystfip | Statistics agendated people";
  }, []);

  return (
    <div className="row">
      <Charter />
    </div>
  );
}

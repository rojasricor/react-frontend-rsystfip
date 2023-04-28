import { useEffect } from "react";
import Statistics from "../components/Statistics";
import { Row } from "react-bootstrap";
import Notify from "../components/Notify";

const StcsSchedulePage = () => {
  useEffect(() => {
    document.title = "RSystfip | Statistics Scheduled People";
  }, []);

  return (
    <Row className="g-3">
      <Statistics scheduling_type="scheduled" />
      <Notify />
    </Row>
  );
};

export default StcsSchedulePage;

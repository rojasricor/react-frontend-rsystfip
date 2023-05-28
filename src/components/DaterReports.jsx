import { useState, useEffect } from "react";
import { UNSET_STATUS, RESOURCE_ROUTE } from "../constants";
import FetcherReports from "./FetcherReports";
import {
  Col,
  Row,
  FloatingLabel,
  FormControl,
  FormSelect,
} from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const DaterReports = ({
  setStartDate,
  startDate,
  setEndDate,
  endDate,
  setCategory,
  reportsFiltered,
}) => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const { data } = await axios(`${RESOURCE_ROUTE}?resource=categories`);
      setCategories(data);
    } catch ({ message }) {
      toast.error(message);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Row className="g-3 mb-5">
      <Col md={2}>
        <FloatingLabel label="Desde:">
          <FormControl
            onChange={({ target: { value } }) => setStartDate(value)}
            type="date"
            value={startDate}
          />
        </FloatingLabel>
      </Col>

      <Col md={2}>
        <FloatingLabel label="Hasta:">
          <FormControl
            onChange={({ target: { value } }) => setEndDate(value)}
            type="date"
            value={endDate}
          />
        </FloatingLabel>
      </Col>

      <Col md={2}>
        <FloatingLabel label="Persona:">
          <FormSelect onChange={({ target: { value } }) => setCategory(value)}>
            <option value={UNSET_STATUS}>No seleccionado</option>
            {categories.map(({ id, category }, index) => (
              <option key={index} value={id}>
                {category}
              </option>
            ))}
          </FormSelect>
        </FloatingLabel>
      </Col>

      <Col md={2}>
        <FetcherReports
          startDate={startDate}
          endDate={endDate}
          reportsFiltered={reportsFiltered}
        />
      </Col>
    </Row>
  );
};

export default DaterReports;

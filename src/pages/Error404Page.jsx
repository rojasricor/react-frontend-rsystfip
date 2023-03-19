import { useEffect } from "react";
import Error404Actioner from "../components/Error404Actioner";

export default function Error404Page() {
  useEffect(() => {
    document.title = "RSystfip | 404 Not Found";
  }, []);

  return (
    <div className="px-4 py-5 my-5 text-center">
      <img
        className="mb-4"
        src="/rsystfip.svg"
        alt="Rsystfip"
        width="72"
        height="57"
      />
      <h1 className="display-5 fw-bold">Error 404</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Not Found.</p>
        <Error404Actioner />
      </div>
    </div>
  );
}

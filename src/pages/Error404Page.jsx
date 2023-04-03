import { useEffect } from "react";
import DivCol12 from "../components/DivCol12";
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
      <DivCol12 x="6 mx-auto">
        <p className="lead mb-4">Not Found.</p>
        <Error404Actioner />
      </DivCol12>
    </div>
  );
}

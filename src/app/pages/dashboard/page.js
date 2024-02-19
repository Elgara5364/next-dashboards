"use client";
import { useState } from "react";
import clsx from "clsx";

const Dashboards = () => {
  const [status, setStatus] = useState("");
  console.log(status);

  const changeStatus = (value) => {
    setStatus(value);
  };
  return (
    <div>
      <h1>Ini Dashboards</h1>
      <p
        className={clsx("text-yellow-400", {
          "text-red-400": status == "pending",
          "text-blue-400 ": status == "paid",
        })}>
        Ini par
      </p>
      <div className="flex gap-3">
        {" "}
        <button onClick={() => changeStatus("paid")}>
          Change Color to blue
        </button>
        <button onClick={() => changeStatus("pending")}>
          Change Color to red
        </button>
        <button onClick={() => changeStatus("")}>Change Color to Yellow</button>
      </div>
    </div>
  );
};

export default Dashboards;

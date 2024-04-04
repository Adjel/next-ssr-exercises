"use client";
import React from "react";
import format from "date-fns/format";
import Spinner from "../../../components/Spinner/Spinner";

function Clock() {
  const [time, setTime] = React.useState(null);

  React.useEffect(() => {
    setTime(new Date());
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 50);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <p className="clock">
      {time ? format(time, "hh:mm:ss.S a") : Spinner("black")}
    </p>
  );
}

export default Clock;

import React, { useState, useEffect } from "react";

interface Time {
  offset: string;
}

function Clock(props: Time) {
  let [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const intervalID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(intervalID);
    };
  });

  function tick() {
    let t = new Date();
    t.setHours(
      t.getHours() + t.getTimezoneOffset() / 60 + parseInt(props.offset)
    );
    setTime((time = t.toLocaleString()));
  }

  return <span>{time}</span>;
}

export default Clock;

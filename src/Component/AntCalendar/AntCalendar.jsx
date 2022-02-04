import React, { useEffect, useState } from "react";
import { Calendar, Alert } from "antd";
import "./AntCalendar.css";
import moment from "moment";

const AntCalendar = ({ getDate }) => {
  const [value, setvalue] = useState(moment());

  const onSelect = (value) => {
    setvalue(value);
    getDate(value);
  };

  const onPanelChange = (value) => {
    setvalue(value);
  };

  useEffect(() => {
    getDate(value);
  }, []);

  return (
    <div>
      <Calendar
        defaultValue={moment}
        fullscreen={false}
        onPanelChange={onPanelChange}
        value={value}
        onSelect={onSelect}
      />
    </div>
  );
};

export default AntCalendar;

import React from "react";
import { useAlarms } from "../../context/Alarm";

const Alarms: React.FC = () => {
  const { alarms } = useAlarms();

  // TODO consume alarms
  return null;
};

export default Alarms;

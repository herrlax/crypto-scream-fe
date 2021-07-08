import React from "react";
import { Alarm, AlarmProvider } from "../../context/Alarm";

const Providers: React.FC = ({ children }) => {
  const initialValue: { alarms: Alarm[] } = {
    alarms: [
      { id: "mockAlarm1", coinPair: "ETHUSD", value: 4000 },
      { id: "mockAlarm2", coinPair: "XBTUSD", value: 59000 },
    ],
  };

  return <AlarmProvider alarms={initialValue.alarms}>{children}</AlarmProvider>;
};

export default Providers;

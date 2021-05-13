import React from "react";
import { useAlarms } from "../../context/Alarm";
import { CoinPair } from "../../utils";
import Alarm from "./components/Alarm";

const Alarms: React.FC = () => {
  const { alarms, addAlarm, editAlarm } = useAlarms();

  return (
    <div>
      {alarms && (
        <ul>
          {alarms.map((a) => (
            <li key={a.id}>
              <Alarm
                coinPair={a.coinPair}
                coinValue={a.value}
                onChange={(pair: CoinPair, value: number) => {
                  editAlarm(a.id, { coinPair: pair, value });
                }}
              />
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={() => {
          addAlarm({
            coinPair: "ETHUSD",
            id: new Date().getUTCMilliseconds().toString(),
            value: 0,
          });
        }}
      >
        Add alert
      </button>
    </div>
  );
};

export default Alarms;

import { styled } from "goober";
import React from "react";
import { useAlarms } from "../../context/Alarm";
import { CoinPair } from "../../utils";
import Alarm from "./components/Alarm";

const AlarmList = styled("ul")({
  margin: "12px 0",
  padding: 0,
  listStyle: "none",
  "li:not(:last-child)": {
    marginBottom: "8px",
  },
});

const ListItem = styled("li")({
  display: "flex",
});

const Alarms: React.FC = () => {
  const { alarms, addAlarm, editAlarm } = useAlarms();

  return (
    <div>
      {alarms && (
        <AlarmList>
          {alarms.map((a) => (
            <ListItem key={a.id}>
              <Alarm
                coinPair={a.coinPair}
                coinValue={a.value}
                onChange={(pair: CoinPair, value: number) => {
                  editAlarm(a.id, { coinPair: pair, value });
                }}
              />
            </ListItem>
          ))}
        </AlarmList>
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

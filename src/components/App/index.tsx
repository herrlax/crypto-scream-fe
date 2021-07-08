import { styled } from "goober";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { getValue } from "../../httpClient";
import Select, { SelectOption } from "../Select";
import coinPairs from "../../coinPairs.json";
import Alarms from "../Alarms";
import { CoinPair } from "../../utils";

const Wrap = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
});

const Value = styled("h1")({
  fontSize: "46px",
  fontWeight: 400,
  margin: "8px 0",
});

const App: React.FC = () => {
  const [coinPair, setCoinPair] = useState<CoinPair>("ETHUSD");
  const [value, setValue] = useState<number | undefined>(undefined);
  const interval = useRef<NodeJS.Timeout | undefined>(undefined);

  const updateValue = useCallback(async () => {
    try {
      const value = await getValue(coinPair);
      setValue(value);
    } catch (e) {
      console.error(e);
    }
  }, [coinPair]);

  useEffect(() => {
    if (interval.current) {
      clearInterval(interval.current);
    }

    updateValue();

    interval.current = setInterval(updateValue, 90 * 1000); // poll every 90 seconds

    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, [coinPair, updateValue]);

  return (
    <Wrap>
      {value && <Value>{value}</Value>}
      <Select
        current={{
          value: coinPair,
          label: coinPair.replace("XBT", "BTC"), // TODO do this replace somewhere else?
        }}
        options={coinPairs as SelectOption[]}
        onChange={setCoinPair}
      />
      <Alarms />
    </Wrap>
  );
};

export default App;

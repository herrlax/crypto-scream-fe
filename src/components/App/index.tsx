import { styled } from "goober";
import React, { useEffect, useRef, useState } from "react";
import { getValue } from "../../httpClient";
import Select from "../Select";
import coinPairs from "./coinPairs.json";

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
  const [coinPair, setCoinPair] = useState<[string, string]>(["ETH", "USD"]);
  const [value, setValue] = useState<number | undefined>(undefined);
  const interval = useRef<NodeJS.Timeout | undefined>(undefined);

  const updateValue = async () => {
    try {
      const value = await getValue();
      setValue(value);
    } catch (e) {
      console.error(e);
    }
  };

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
  }, [coinPair]);

  const handleCoinPairChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const coin1 = e.target.value.slice(0, 3);
    const coin2 = e.target.value.slice(3, 6);

    setCoinPair([coin1, coin2]);
  };

  return (
    <Wrap>
      <Value>{value}</Value>
      <Select options={coinPairs} onChange={handleCoinPairChange} />
    </Wrap>
  );
};

export default App;

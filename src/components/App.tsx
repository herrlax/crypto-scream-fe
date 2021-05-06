import { styled } from "goober";
import React, { useEffect, useState } from "react";
import { getValue } from "../httpClient";

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

const Select = styled("select")({
  fontSize: "14px",
  border: "none",
});

const App: React.FC = () => {
  const [value, setValue] = useState<number | undefined>(undefined);

  const updateValue = async () => {
    try {
      const value = await getValue();
      setValue(value);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    updateValue();
    const interval = setInterval(updateValue, 90 * 1000); // poll every 90 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Wrap>
      <Value>{value}</Value>
      <Select name="currency-pair" id="currency-pair">
        <option value="ETHUSD">ETHUSD</option>
        <option value="ETHEUR">ETHEUR</option>
        <option value="ETHXBT">ETHBTC</option>
        <option value="XBTUSD">BTCUSD</option>
        <option value="XBTEUR">BTCEUR</option>
      </Select>
    </Wrap>
  );
};

export default App;

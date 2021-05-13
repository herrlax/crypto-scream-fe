import React, { useRef, useState } from "react";
import Select, { SelectOption } from "../../../Select";
import coinPairs from "../../../../coinPairs.json";
import { CoinPair } from "../../../../utils";

type Props = {
  coinPair: CoinPair;
  coinValue: number;
  onChange: (pair: CoinPair, value: number) => void;
};

const Alarm: React.FC<Props> = ({
  coinPair: initialPair,
  coinValue: initialValue,
  onChange,
}) => {
  const [pair, setPair] = useState<CoinPair>(initialPair);
  const [value, setValue] = useState<number>(initialValue);
  const changeTimeout = useRef<NodeJS.Timeout>();

  const callOnChange = (pair: CoinPair, value: number) => {
    if (changeTimeout.current) {
      clearTimeout(changeTimeout.current);
    }

    changeTimeout.current = setTimeout(() => {
      onChange(pair, value);
    }, 250);
  };

  return (
    <>
      <input
        type="number"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const val = parseFloat(e.target.value);
          setValue(val);
          callOnChange(pair, val);
        }}
      />
      <Select
        options={coinPairs as SelectOption[]}
        current={{
          value: pair,
          label: pair.replace("XBT", "BTC"), // TODO do this replace somewhere else?
        }}
        onChange={(cp: CoinPair) => {
          setPair(cp);
          callOnChange(cp, value);
        }}
        size="small"
      />
    </>
  );
};

export default Alarm;

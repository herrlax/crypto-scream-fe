import { styled } from "goober";
import React from "react";
import { color } from "../colors";

const StyledInput = styled("input")({
  color: color.OFF_WHITE,
  fontFamily: "'Courier New', Courier, monospace",
  border: `1px solid ${color.GREY}`,
  padding: "4px",
  boxSizing: "border-box",
  background: color.OFF_BLACK,
  appearance: "none",
  fontSize: "14px",
  width: "118px",
  height: "30px",
  "&:focus": {
    outline: `1px solid ${color.WHITE}`,
  },
});

type Props = {
  value: number;
  onChange: (value: number) => void;
};

const CoinValueField: React.FC<Props> = ({ value, onChange }) => {
  return (
    <StyledInput
      type="number"
      step={0.001}
      name="coin-value-field"
      id="coinValueField"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseFloat(e.target.value);
        if (!isNaN(val)) {
          onChange(val);
        }
      }}
    />
  );
};

export default CoinValueField;

import { styled } from "goober";
import React from "react";
import { color } from "../colors";

const StyledSelect = styled("select")({
  fontSize: "16px",
  color: color.OFF_WHITE,
  fontFamily: "'Courier New', Courier, monospace",
  border: `1px solid ${color.GREY}`,
  padding: "4px",
  boxSizing: "content-box",
  width: "175px",
  height: "30px",
  background: color.OFF_BLACK,
  appearance: "none",
  backgroundImage: `linear-gradient(45deg, transparent 50%, ${color.OFF_WHITE} 50%), linear-gradient(135deg, ${color.OFF_WHITE} 50%, transparent 50%)`,
  backgroundPosition:
    "calc(100% - 22px) calc(1em), calc(100% - 14px) calc(1em)",
  backgroundSize: "8px 8px, 8px 8px",
  backgroundRepeat: "no-repeat",
  "&:focus": {
    outline: `2px solid ${color.WHITE}`,
    backgroundImage: `linear-gradient(45deg, transparent 50%, ${color.WHITE} 50%), linear-gradient(135deg, ${color.WHITE} 50%, transparent 50%)`,
  },
});

type Option = {
  value: string;
  label: string;
};

type Props = {
  options: Option[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select: React.FC<Props> = ({ options, onChange }) => {
  return (
    <StyledSelect
      name="coin-pair-select"
      id="coin-pair-select"
      onChange={onChange}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
      ;
    </StyledSelect>
  );
};

export default Select;

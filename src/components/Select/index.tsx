import { styled } from "goober";
import React from "react";
import { color } from "../colors";

type SelectSize = "small" | "medium";

const Arrrow = (color: string) =>
  `linear-gradient(45deg, transparent 50%, ${color} 50%), linear-gradient(135deg, ${color} 50%, transparent 50%)`;

const StyledSelect = styled("select")([
  {
    color: color.OFF_WHITE,
    fontFamily: "'Courier New', Courier, monospace",
    border: `1px solid ${color.GREY}`,
    padding: "4px",
    boxSizing: "content-box",
    background: color.OFF_BLACK,
    appearance: "none",
    backgroundImage: Arrrow(color.OFF_WHITE),
    backgroundRepeat: "no-repeat",
    "&:focus": {
      outline: `2px solid ${color.WHITE}`,
      backgroundImage: Arrrow(color.WHITE),
    },
  },
  (({ size }: { size: SelectSize }) => ({
    fontSize: size === "small" ? "12px" : "16px",
    width: size === "small" ? "125px" : "175px",
    height: size === "small" ? "20px" : "30px",
    backgroundPosition: `calc(100% - ${
      size === "small" ? "15px" : "22px"
    }) calc(1em), calc(100% - ${size === "small" ? "10px" : "14px"}) calc(1em)`,
    backgroundSize: size === "small" ? "5px 5px, 5px 5px" : "8px 8px, 8px 8px",
  })) as any,
]) as any;

export type SelectOption = {
  value: string;
  label: string;
};

type Props = {
  options: SelectOption[];
  current?: SelectOption;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  size?: "medium" | "small";
};

const Select: React.FC<Props> = ({
  options,
  current,
  onChange,
  size = "medium",
}) => (
  <StyledSelect
    name="coin-pair-select"
    id="coin-pair-select"
    onChange={onChange}
    size={size}
  >
    {current && (
      <option key={current.value} value={current.value}>
        {current.label}
      </option>
    )}
    {options
      .filter((o) => o.value !== current?.value)
      .map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    ;
  </StyledSelect>
);

export default Select;

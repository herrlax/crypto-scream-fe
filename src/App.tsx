import React, { useEffect, useState } from "react";
import { getValue } from "./httpClient";

const App: React.FC = () => {
  const [value, setValue] = useState<number | undefined>(undefined);

  const updateValue = async () => {
    try {
      const value = await getValue();
      setValue(value);
      console.log("ETHUSD", value);
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

  return <div>ETH in USD: {value}</div>;
};

export default App;

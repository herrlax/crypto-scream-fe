import React, { useEffect, useState } from "react";
import { getPrice } from "./httpClient";

const App: React.FC = () => {
  const [price, setPrice] = useState<number | undefined>(undefined);

  useEffect(() => {
    const update = async () => {
      try {
        const price = await getPrice();

        setPrice(price);
      } catch (e) {
        console.error(e);
      }
    };

    update();
  }, []);

  return <div>ETH in USD: {price}</div>;
};

export default App;

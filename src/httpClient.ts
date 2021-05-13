import { Coin, CoinPair } from "./utils";

const PUBLIC_API = "";

export const getValue = async (coinPair: CoinPair) => {
  const coin1 = coinPair.slice(0, 3) as Coin;
  const coin2 = coinPair.slice(3, 6) as Coin;

  // return Promise.resolve(
  //   Math.round((3000 + Math.random() * 500) * 1000) / 1000
  // );

  const url = process.env.NODE_ENV
    ? `http://localhost:9000/value/${coin1}/${coin2}`
    : `${PUBLIC_API}/value/${coin1}/${coin2}`;

  const res = await fetch(url, {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await res.json();

  if (resData.error) {
    throw new Error(resData.error);
  }

  return resData.data;
};

const PUBLIC_API = "";

export const getPrice = async () => {
  const url = process.env.NODE_ENV
    ? "http://localhost:9000/price/eth/usd"
    : PUBLIC_API;
  console.log("url", url);

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

const PUBLIC_API = "";

export const getValue = async () => {
  const url = process.env.NODE_ENV
    ? "http://localhost:9000/value/eth/usd"
    : PUBLIC_API;

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

const PUBLIC_API = "";

export const getValue = async (coin1: string, coin2: string) => {
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

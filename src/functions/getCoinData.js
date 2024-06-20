import axios from "axios";

export const getCoinData = (id, setError) => {
  const coin = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}?usd&x_cg_demo_api_key=CG-vkXdiwGrDAHGQ5ycnPiJ4BNi`)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((e) => {
      console.log(e.message);
      if (setError) {
        setError(true);
      }
    });

  return coin;
};

import axios from "axios";

export const convertCurrency = async (from, to, amount) => {
  if (from === to) return amount;

  try {
    const response = await axios.get(
      `https://economia.awesomeapi.com.br/json/last/${from}-${to}`
    );
    const rate = response.data[`${from}${to}`].bid;
    return (amount * rate).toFixed(2);
  } catch (error) {
    console.error("Erro ao converter a moeda:", error);
    throw error;
  }
};

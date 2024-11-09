import axios from "axios";

export const fetchCurrencies = async () => {
  try {
    const response = await axios.get(
      "https://economia.awesomeapi.com.br/json/all"
    );
    const data = response.data;
    const currencyCodes = {};

    Object.keys(data).forEach((key) => {
      currencyCodes[key] = data[key];
    });

    return currencyCodes;
  } catch (error) {
    console.error("Erro ao buscar as moedas:", error);
    throw error;
  }
};

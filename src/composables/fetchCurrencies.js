import { apiRequest } from "../services/api";

export const fetchCurrencies = async () => {
  try {
    const data = await apiRequest("all");

    data["BRL"] = {
      code: "BRL",
      codein: "BRL",
      name: "Real Brasileiro",
      bid: "1.00",
      ask: "1.00",
      high: "1.00",
      low: "1.00",
      varBid: "0.00",
      pctChange: "0.00",
      timestamp: Date.now(),
      create_date: new Date().toISOString(),
    };

    return data;
  } catch (error) {
    console.error("Erro ao buscar as moedas:", error);
    throw error;
  }
};

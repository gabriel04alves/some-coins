import { apiRequest } from "../services/api";
import { formatCurrency } from "@/utils/formatCurrency";

export const convertCurrency = async (from, to, amount) => {
  if (from === to) return formatCurrency(amount, "pt-BR", to);

  try {
    const response = await apiRequest(`last/${from}-${to}`);
    const rate = response[`${from}${to}`]?.bid;

    if (!rate) {
      throw new Error("Taxa de conversão não encontrada");
    }

    const convertedAmount = amount * rate;

    return formatCurrency(convertedAmount, "pt-BR", to);
  } catch (error) {
    console.error("Erro ao converter a moeda:", error);
    throw error;
  }
};

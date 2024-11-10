import axios from "axios";

const API_BASE_URL = "https://economia.awesomeapi.com.br/json/";

export const apiRequest = async (endpoint) => {
  try {
    const response = await axios.get(API_BASE_URL + endpoint);
    return response.data;
  } catch (error) {
    console.error("Erro na requisição à API:", error);
    throw error;
  }
};

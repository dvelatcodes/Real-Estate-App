import axios from "axios";

export const baseUrl = "https/bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = axios.get(url, {
    headers: {
      "X-RapidAPI-Key": process.env.RapidApiKey,
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return data;
};

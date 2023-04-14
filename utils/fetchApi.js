import axios from "axios";

export const baseUrl = "https/bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "f32063f3camshd5d011e654c416ap10d6e8jsnebdc02005f43",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return data;
};

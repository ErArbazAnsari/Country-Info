import axios from "axios";

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1",
});

// HTTP Get Method
export const getCountryData = async () => {
    return await api.get("/all?fields=name,population,region,capital,flags");
};

export const getCountryDetails = async (name) => {
    return await api.get(`/name/${name}?fullText=true`);
};

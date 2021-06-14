import { api } from "./api"

const getCountries = async () => {
    const data = await api({
        method: "get",
        url: "/countries",
    });
    return data.data;
};

export const countries = { getCountries }
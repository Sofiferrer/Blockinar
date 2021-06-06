import { api } from "./api"

const getCountries = async () => {
    const data = await api({
        method: "get",
        url: "/countries",
    });
    // console.log(data.data)
    return data.data;
};

export const countries = { getCountries }
import { api } from "./api"

const getInfected = async () => {
    const data = await api({
        method: "get",
        url: "/infected",
    });
    // console.log(data.data)
    return data.data;
};

export const infected = { getInfected }
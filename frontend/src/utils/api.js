import axios from "axios";

const BASE_URL = "https://65d0aa40ab7beba3d5e37f1b.mockapi.io/Socials/v1/";

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
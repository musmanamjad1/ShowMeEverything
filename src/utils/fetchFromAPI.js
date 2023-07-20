import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
	params: {
		maxResults: "50",
	},
	headers: {
		"X-RapidAPI-Key": "7c2ae3bbd5mshdba5c44a91c1020p196f85jsn442944de5ff9",
		"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
	},
};

export const fetchFromAPI = async (url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options);
	return data;
};

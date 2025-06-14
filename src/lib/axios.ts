import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: import.meta.env.MODE === "development" ? "https://spotifyback.onrender.com/api" : "/api",
})


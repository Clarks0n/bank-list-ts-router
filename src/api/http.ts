import axios from "axios";

// load file locally for testing purpose
const URL = 'data/bank.json'

export const http = axios.create({
    baseURL: "http://localhost:3500",
    timeout: 15000,
});
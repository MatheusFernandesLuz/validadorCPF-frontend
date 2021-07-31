import axios from "axios";
require('dotenv').config();

const api = axios.create({
  baseURL: process.env.BASE_URL || "http://localhost:5000"
})

export { api };
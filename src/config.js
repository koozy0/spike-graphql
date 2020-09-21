const dotenv = require('dotenv');

const loaded = dotenv.config();

if (!loaded) {
  throw new Error('.env not loaded');
}

const {
  PORT = 4000,
  JSON_SERVER_BASE_URL = 'http://localhost:3000',
} = process.env;

const config = {
  port: Number(PORT),
  baseURL: JSON_SERVER_BASE_URL,
};

module.exports = config;

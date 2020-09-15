const dotenv = require('dotenv');

const loaded = dotenv.config();

if (!loaded) {
  throw new Error('.env not loaded');
}

const { PORT } = process.env;

const config = {
  port: PORT || 4000,
};

module.exports = config;

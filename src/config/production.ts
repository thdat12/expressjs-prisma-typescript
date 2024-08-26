import dotenv from "dotenv";

dotenv.config();

export default {
  server: {
    host: process.env.SERVER_HOST || "localhost",
    protocol: "http",
    debug: true,
    name: process.env.SERVER_NAME || "LOCAL NAME",
    port: process.env.SERVER_PORT || 1337,
    secret: process.env.SERVER_SECRET,
  },
  database: {},
};

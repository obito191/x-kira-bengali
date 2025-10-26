const axios = require("axios");
const fetch = require("node-fetch");
async function getJson(url, options) {
  try {
    options ? options : {};
    const res = await axios({
      method: "GET",
      url: url,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
      },
      ...options,
    });
    return res.data;
  } catch (err) {
    return err;
  }
}

async function getBuffer(url) {
  try {
    const response = await fetch(url);
    return await response.buffer();
  } catch {
    return Buffer.from([]);
  }
}
module.exports = { getJson, getBuffer };

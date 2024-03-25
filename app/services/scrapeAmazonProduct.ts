const axios = require("axios");
const cheerio = require("cheerio");

export async function scrapeAmazonProductPrice(url: string) {
  try {
    const response = await axios.get(url);
    const html = response.data;

    const $ = cheerio.load(html);

    const priceElement = $(
      "div.a-section.a-spacing-micro span.a-price span.a-offscreen",
    );
    const priceText = priceElement.text().trim();

    console.log("PRICE TEXT:", priceText);

    return priceText;
  } catch (error) {
    console.error("Error fetching Amazon product page:", error);
    return null;
  }
}

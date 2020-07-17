import { checkStatus } from "../general";
import {
  TrendingProductsResponse,
  TrendingProduct,
} from "../../Models/products";

const api_key = "zfbmo6g0aar1s1ppg350oqro";
const API = "https://community-etsy.p.rapidapi.com/listings/trending";
const FIELDS = [
  "title",
  "description",
  "price",
  "currency_code",
  "url",
  "listing_id",
  "price",
];

export const getTrendingProducts = (
  page: string,
  offset: string,
  limit = "20"
): Promise<TrendingProductsResponse> => {
  return fetch(
    `${API}?${new URLSearchParams({
      api_key,
      page,
      limit,
      offset,
      fields: FIELDS.join(","),
    })}`
  )
    .then(checkStatus("Could not fetch products"))
    .then((res) => res.json());
};

export const filterTrendingProducts = (
  response: Promise<TrendingProductsResponse>
): Promise<TrendingProduct[]> => {
  return response.then((el) =>
    el.results.filter((product) => !product.hasOwnProperty("error_messages"))
  );
};

export const filterByName = (name: string) => (product: TrendingProduct) =>
  product.title.includes(name);

import http from "k6/http";
import { sleep } from "k6";

const BASE_API_URL = "https://api.redstone.finance";
const LATEST_PRICE_URL = `${BASE_API_URL}/prices?symbol=ETH&provider=redstone-rapid&fromTimestamp=1679980711000&toTimestamp=1679987880000&interval=300000`;

export default function () {
  http.get(LATEST_PRICE_URL);
  sleep(1);
}

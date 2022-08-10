import config from "./../config.json";
import httpService from "./httpService";

export function getProducts() {
  const url = `${config.uri}/product/store/${config.store_code}`;
  return httpService.get(url);
}

export function saveProduct(data) {
  const url = `${config.uri}/product`;
  return httpService.post(url, data);
}

export function deleteProduct(barcode) {
  const url = `${config.uri}/product/store/${config.store_code}/${barcode}`;
  return httpService.delete(url);
}

// Getting Orders
export function getOrders() {
  const url = `${config.uri}/order/sellers/JT`;
  return httpService.get(url);
}

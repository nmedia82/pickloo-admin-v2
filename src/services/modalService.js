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

// ============ Orders ============
// Getting Orders
export function getOrders() {
  const url = `${config.uri}/order/sellers/JT`;
  return httpService.get(url);
}

// ============ Transporter ============
// Getting Transporter
export function getTransporters() {
  const url =
    "https://5ipr2je3gm7l5mo24pq4kiyd540qtzjk.lambda-url.us-east-1.on.aws/?action=";
  return httpService.get_transporters(url);
}

// Adding Transpoter
export function saveTransporter(data) {
  const url =
    "https://5ipr2je3gm7l5mo24pq4kiyd540qtzjk.lambda-url.us-east-1.on.aws/?action=";
  return httpService.save_transporter(url, data);
}

// ============ Routes ============
// Getting Routes
export function getRoutes() {
  const url =
    "https://5ipr2je3gm7l5mo24pq4kiyd540qtzjk.lambda-url.us-east-1.on.aws/?action=";
  return httpService.get_routes(url);
}
// Adding Route
export function saveRoute(data) {
  const url =
    "https://5ipr2je3gm7l5mo24pq4kiyd540qtzjk.lambda-url.us-east-1.on.aws/?action=";
  return httpService.save_route(url, data);
}

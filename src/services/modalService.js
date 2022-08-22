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
  const url = `${config.uri_roaddy}?action=get_transporters`;
  const data = { phone: "all" };
  return httpService.post(url, data);
}

// Adding Transpoter
export function saveTransporter(data) {
  const url = `${config.uri_roaddy}?action=save_transporter`;
  return httpService.post(url, data);
}

// ============ Routes ============
// Getting Routes
export function getRoutes(data) {
  const url = `${config.uri_roaddy}?action=get_routes`;
  return httpService.post(url, data);
}
// Adding Route
export function saveMyRoute(data) {
  const url = `${config.uri_roaddy}?action=save_route`;
  return httpService.post(url, data);
}

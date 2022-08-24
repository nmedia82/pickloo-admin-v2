import config from "./../config.json";
import { get_transporter_phone } from "./auth";
import httpService from "./httpService";
import moment from "moment";

// ============ Products ============
// Getting Products
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

// Adding r
export function saveTransporter(data) {
  const url = `${config.uri_roaddy}?action=save_transporter`;
  return httpService.post(url, data);
}

// Setting Transpoter Status
export function setTransporterStatus() {
  const url = `${config.uri_roaddy}?action=set_transporter_status`;
  const data = { phone: get_transporter_phone() };
  return httpService.post(url, data);
}

// ============ Routes ============
// Getting Routes
export function getRoutes() {
  const url = `${config.uri_roaddy}?action=get_routes`;
  const data = { phone: get_transporter_phone() };
  return httpService.post(url, data);
}

// Adding Route
export function saveRoute(data) {
  const url = `${config.uri_roaddy}?action=save_route`;
  return httpService.post(url, data);
}
// Setting route Status
export function setRouteStatus(route_id, route_status) {
  const url = `${config.uri_roaddy}?action=set_route_status`;
  const data = {
    phone: get_transporter_phone(),
    route_id: route_id,
    route_status: route_status,
  };
  return httpService.post(url, data);
}

// ============ Bookings ============
// Getting Bookings
export function getBookings(route_id) {
  const url = `${config.uri_roaddy}?action=get_bookings`;
  const today = moment().utc().format("YYYY-MM-DDTHH:mm:ss") + "Z";
  const data = {
    transporter_phone: get_transporter_phone(),
    route_id: route_id,
    booking_date: today,
  };
  return httpService.post(url, data);
}

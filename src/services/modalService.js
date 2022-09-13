import config from "./../config.json";
import { get_store_code, get_transporter_phone } from "./auth";
import httpService from "./httpService";
import moment from "moment";

// ============ Products ============
// Getting Products
export function getProducts() {
  const store_code = get_store_code();
  const url = `${config.uri}/product/store/${store_code}`;
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

// send Welcome Email & Pin
export function sendWelcomePin(data) {
  const url = `${config.uri_roaddy}?action=send_welcome_pin`;
  return httpService.post(url, data);
}

// Setting Transpoter Status
export function setTransporterStatus(status) {
  const url = `${config.uri_roaddy}?action=set_transporter_status`;
  const data = { phone: get_transporter_phone(), transporter_status: status };
  return httpService.post(url, data);
}

// ============ Routes ============
// Getting Routes
export function getRoutes() {
  const url = `${config.uri_roaddy}?action=get_routes`;
  const data = { phone: get_transporter_phone() };
  return httpService.post(url, data);
}
// Getting Single
export function getRoute(route_id) {
  const url = `${config.uri_roaddy}?action=get_route`;
  const data = { phone: get_transporter_phone(), route_id: route_id };
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
// Getting Bookings All
export function getBookings(route_id) {
  const url = `${config.uri_roaddy}?action=get_bookings_by_date`;
  const today = moment().utc().format("YYYY-MM-DDTHH:mm:ss") + "Z";
  const data = {
    route_id: route_id,
    booking_date: today,
  };
  return httpService.post(url, data);
}

// Getting Bookings From Date Period Onward
export function getBookingsByDatePeriod(route_id) {
  const url = `${config.uri_roaddy}?action=get_bookings_by_date`;
  var today = moment().utc().local().format("YYYY-MM-DD");
  // today = moment.utc(today).local().format();
  console.log(today);
  const data = {
    route_id: route_id,
    booking_date: today,
  };
  return httpService.post(url, data);
}
// Setting Booking Status
export function setBookingStatus(
  route_id,
  booking_id,
  booking_status,
  seat_info,
  order_total
) {
  const url = `${config.uri_roaddy}?action=set_booking_status`;
  const data = {
    route_id: route_id,
    booking_id: booking_id,
    booking_status: booking_status,
    seat_info: seat_info,
    order_total: order_total,
  };
  return httpService.post(url, data);
}

// Adding Booking
export function saveBooking(data) {
  const url = `${config.uri_roaddy}?action=save_booking`;
  return httpService.post(url, data);
}

// ============ Cities ============
// Getting Cities
export function getCities(data) {
  const url = `${config.uri_roaddy}?action=get_cities`;
  return httpService.post(url, data);
}

export function saveCity(data) {
  const url = `${config.uri_roaddy}?action=save_city`;
  return httpService.post(url, data);
}

export function deleteCity(data) {
  const url = `${config.uri_roaddy}?action=delete_city`;
  return httpService.post(url, data);
}

// ============ Vehicles ============
// Getting Vehicles
export function getVehicles(data) {
  const url = `${config.uri_roaddy}?action=get_vehicles`;
  return httpService.post(url, data);
}

export function saveVehicle(data) {
  const url = `${config.uri_roaddy}?action=save_vehicle`;
  return httpService.post(url, data);
}

export function deleteVehicle(data) {
  const url = `${config.uri_roaddy}?action=delete_vehicle`;
  return httpService.post(url, data);
}

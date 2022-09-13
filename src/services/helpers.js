import { toast } from "react-toastify";
export const alert_info = (msg) => {
  toast.info(msg, {
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const alert_error = (msg) => {
  toast.error(msg, {
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const __price = (p) => {
  return `Rs. ${p}`;
};

export const serviceCharges = (cartTotal) => {
  return 50;
};

export const __date = () => {
  return new Date();
};

export const __todate = (ts) => {
  var d = new Date(ts);
  return d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
};

// return time
export const __totime = (ts) => {
  var date = new Date(ts * 1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = "0" + date.getSeconds();

  // Will display time in 10:30:23 format
  return hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
};

export const __totimeampam = (tm) => {
  var timeSplit = tm.split(":"),
    hours,
    minutes,
    meridian;
  hours = timeSplit[0];
  minutes = timeSplit[1];
  if (hours > 12) {
    meridian = "PM";
    hours -= 12;
  } else if (hours < 12) {
    meridian = "AM";
    if (hours === 0) {
      hours = 12;
    }
  } else {
    meridian = "PM";
  }

  return hours + ":" + minutes + " " + meridian;
};

export const __timeReadable = (date) => {
  var toDate = new Date(date);
  var seconds = Math.floor((new Date() - toDate) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
};

export const get_menu = (type = null) => {
  var menu = [{ title: "Home", to: "/", icon: "meter" }];
  switch (type) {
    case "transporter":
      menu = [
        ...menu,
        { title: "Routes & Bookings", to: "/routes/all", icon: "booking" },
        { title: "Add Route", to: "/routes/add", icon: "troute" },
        { title: "Cities", to: "/cities", icon: "city" },
        { title: "Vehicles", to: "/vehicles", icon: "vehicles" },
      ];
      break;
    case "vendor":
      menu = [
        ...menu,
        { title: "Products", to: "/products/all", icon: "booking" },
        { title: "Orders", to: "/orders/add", icon: "troute" },
      ];
      break;
    case "vehicles":
      menu = [
        ...menu,
        { title: "Vehicles", to: "/vehicles", icon: "vehicles" },
      ];
      break;

    default:
      menu = [...menu];
      break;
  }

  return menu;
};

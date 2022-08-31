import {
  FaHome,
  FaImages,
  FaPlusCircle,
  FaUser,
  FaTachometerAlt,
  FaRoute,
  FaCity,
} from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { BsFillPrinterFill } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
import { BiBusSchool } from "react-icons/bi";

function Icons({ icon }) {
  return (
    <>
      {icon === "home" && <FaHome />}
      {icon === "add" && <FaPlusCircle />}
      {icon === "user" && <FaUser />}
      {icon === "images" && <FaImages />}
      {icon === "meter" && <FaTachometerAlt />}
      {icon === "troute" && <FaRoute />}
      {icon === "booking" && <TbBrandBooking />}
      {icon === "cancel" && <GiCancel />}
      {icon === "print" && <BsFillPrinterFill />}
      {icon === "city" && <FaCity />}
      {icon === "vehicles" && <BiBusSchool />}
    </>
  );
}

export default Icons;

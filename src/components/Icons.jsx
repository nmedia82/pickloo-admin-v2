import {
  FaHome,
  FaImages,
  FaPlusCircle,
  FaUser,
  FaTachometerAlt,
  FaRoute,
} from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { BsFillPrinterFill } from "react-icons/bs";
import { FcCancel } from "react-icons/fc";

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
      {icon === "cancel" && <FcCancel />}
      {icon === "print" && <BsFillPrinterFill />}
    </>
  );
}

export default Icons;

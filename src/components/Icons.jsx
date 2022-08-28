import {
  FaHome,
  FaImages,
  FaPlusCircle,
  FaUser,
  FaTachometerAlt,
  FaRoute,
} from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";


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
    </>
  );
}

export default Icons;

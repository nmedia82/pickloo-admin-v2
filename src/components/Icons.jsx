import {
  FaHome,
  FaImages,
  FaPlusCircle,
  FaUser,
  FaTachometerAlt,
} from "react-icons/fa";

function Icons({ icon }) {
  return (
    <>
      {icon === "home" && <FaHome />}
      {icon === "add" && <FaPlusCircle />}
      {icon === "user" && <FaUser />}
      {icon === "images" && <FaImages />}
      {icon === "meter" && <FaTachometerAlt />}
    </>
  );
}

export default Icons;

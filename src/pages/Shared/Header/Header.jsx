import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center my-10 space-y-2">
      <img className="mx-auto" src={logo} alt="" />
      <p className="text-lg text-gray-600">Journalism Without Fear or Favour</p>
      <p className="text-xl text-gray-600 font-medium">
        {moment().format("dddd, MMMM Do, YYYY")}
      </p>
    </div>
  );
};

export default Header;

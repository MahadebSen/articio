import { Link } from "react-router-dom";
import logo from "../../images/logo 1.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = ({ data }) => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <nav className=" bg-[#283046] mx-6 rounded-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto my-5  px-5 py-2">
        <div>
          <Link to="/">
            <img className="w-[155px] rounded-md" src={logo} alt="" />
          </Link>
        </div>

        <ul className="flex items-center text-white flex-row gap-8">
          <li>
            <Link to="/">Home</Link>
          </li>

          {user ? (
            <ul className="flex flex-row items-center gap-8">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="cursor-pointer" onClick={handleSignOut}>
                Sign Out
              </li>
            </ul>
          ) : (
            <li>
              <Link to="/login">Log in</Link>
            </li>
          )}

          <li>
            <Link to="/about">About us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

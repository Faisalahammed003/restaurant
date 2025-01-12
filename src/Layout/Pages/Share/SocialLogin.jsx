import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Providers/AuthProviders";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        navigate("/");
      });
    });
  };
  return (
    <div className="p-8">
      <div className="divider"></div>
      <div>
        <button onClick={handleGoogleSignIn} className="flex">
          <FcGoogle className=" size-8 mr-2"></FcGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

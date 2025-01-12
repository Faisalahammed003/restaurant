import { Link, useNavigate } from "react-router-dom";
import coverImg from "../../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useContext } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import SocialLogin from "../Share/SocialLogin";

const SIngUp = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoUrl).then(() => {
          // create user entry in the database
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("users", userInfo).then((res) => {
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Created Successful",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <div className="hero bg-[url('https://i.ibb.co.com/1KtTyqx/authentication.png')] min-h-screen">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <img src={coverImg} alt="" />
          </div>
          <div className="card bg-[url('https://i.ibb.co.com/1KtTyqx/authentication.png')] md:w-1/2 max-w-sm shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
                {errors.name && <span>Name field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  {...register("photoUrl", { required: true })}
                  placeholder="photo Url"
                  className="input input-bordered"
                  required
                />
                {errors.photoUrl && <span>Photo Url field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
                {errors.email && <span>Email field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password")}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn text-white bg-[#D1A054]"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <p className="text-[#D1A054] text-center font-semibold">
                <small>
                  Already have an account?
                  <Link to="/login">Go to login</Link>
                </small>
              </p>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SIngUp;

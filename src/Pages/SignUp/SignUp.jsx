import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  const {register,handleSubmit,formState: { errors },} = useForm();
  const {createUser}= useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result=>{
      const loggedUser =result.user;
      console.log(loggedUser);
    })
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/wood-pattern.png')",
        backgroundColor: "#f7f7f7",
      }}
    >
      <Helmet>
        <title>Mango | Registration</title>
      </Helmet>
      <div className="bg-white shadow-lg rounded-xl flex w-full max-w-4xl overflow-hidden">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-4xl font-bold text-center mb-6">Sign Up</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Type here"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="Type here"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
             {errors.email && <span className="text-red-600">Email is required</span>}
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </p>
              )}
            </div>
            <div>
              <input  className="w-full bg-yellow-500 text-white py-2 rounded-lg font-semibold hover:bg-yellow-600"   type="submit" value="Sign Up" />
            </div>
          </form>
          <p className="text-sm text-center mt-4">
            Already registered?{" "}
            <Link to="/login" className="text-yellow-500">
              Go to logIn
            </Link>
          </p>
          <div className="text-center mt-6">
            <p className="text-sm mb-2">Or sign up with</p>
            <div className="flex justify-center space-x-4">
              <button className="text-gray-500 hover:text-blue-500">
                <i className="fab fa-facebook"></i>
              </button>
              <button className="text-gray-500 hover:text-red-500">
                <i className="fab fa-google"></i>
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-apple"></i>
              </button>
            </div>
          </div>
        </div>
        {/* Illustration Section */}
        <div className="hidden md:flex w-1/2 items-center justify-center bg-yellow-50">
          <img
            src="https://i.ibb.co.com/8DC0MBJ/authenticationimg-png.png" // Replace with your exact illustration
            alt="Illustration"
            className="w-3/4"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;

import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../../Components/SocialLogin";



const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const {user}= useContext(AuthContext);

  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6); // Initialize captcha with 6 characters
  }, []);



  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: 'User Login Successful.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            navigate(from, { replace: true });
        })
}
// console.log(user);
const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
        setDisabled(false);
    }
    else {
        setDisabled(true)
    }
}
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
        <title>Mango | Login</title>
      </Helmet>
      <div className="bg-white shadow-lg rounded-xl flex w-full max-w-4xl overflow-hidden">
        {/* Illustration Section */}
        <div className="hidden md:flex w-1/2 items-center justify-center bg-yellow-50">
          <img
            src="https://i.ibb.co.com/8DC0MBJ/authenticationimg-png.png" // Replace with your exact illustration
            alt="Illustration"
            className="w-3/4"
          />
        </div>
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-4xl font-bold text-center mb-6">Log In</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Type here"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <a
                href="#"
                className="text-sm text-yellow-500 hover:underline mt-2 block"
              >
                Forgot password?
              </a>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Captcha
              </label>
              <LoadCanvasTemplate />
              <input
                type="text"
                name="captcha"
                placeholder="Type the captcha above"
                onBlur={handleValidateCaptcha}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 rounded-lg font-semibold hover:bg-yellow-600"
              disabled={disabled}
            >
              Log In
            </button>
          </form>
          <p className="text-sm text-center mt-4">
            New Here?{" "}
            <Link to="/signup" className="text-yellow-500 hover:underline">
              Go to Sign Up
            </Link>
          </p>
          <div className="text-center mt-6">
            <p className="text-sm mb-2">Or log in with <SocialLogin></SocialLogin></p>
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
      </div>
    </div>
  );
};

export default Login;

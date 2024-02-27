import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const password = form.password.value;
    const email = form.email.value;
    console.log(name, password, email);
    e.target.reset();

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `your password should have at least 6 character`,
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your password should have at least one uppercase letter",
      });
      return;
    } else if (!/(?=.*[@$!%*?&])/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `your password should have at least one special character (@$!%*?&)`,
      });
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
      
        if (userCredential) {
          Swal.fire({
            title: "Congratulations!",
            text: "User Created Successfully",
            icon: "success",
          });
        }
        navigate("/");
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
          });
        }
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((userCredential) => {
        if (userCredential) {
          navigate("/");
        }
      })

      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight  text-black">
            Register Your Account
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleRegister} className="space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6  text-black"
                >
                  Name
                </label>
              </div>
              <div className="mt-2">
                <input
                  name="name"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6  text-black"
                >
                  Email
                </label>
              </div>
              <div className="mt-2">
                <input
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6  text-black"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  name="password"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account ? please{" "}
            <Link
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              to={`/login`}
            >
              Login
            </Link>
          </p>

          <div className="py-4">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline w-full text-sm"
            >
              <FcGoogle className="text-2xl" />
              Sign up with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

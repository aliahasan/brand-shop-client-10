import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {
const {signInUser , signInWithGoogle} = useContext(AuthContext)
const location = useLocation ()
const navigate = useNavigate()

  const handleLogin = e =>{
    e.preventDefault()
    const form = new FormData(e.currentTarget);
    const email =form.get('email');
    const password = form.get('password');
    e.currentTarget.reset()

    signInUser(email, password)
    .then((userCredential) =>{
       if(userCredential){
        navigate (location?.state ? location.state : '/')
       }
   
    })
    .catch((error) =>{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message                 
          });
    })

}


const handleGoogleLogin = () =>{
  signInWithGoogle()
  .then(userCredential =>{
    if(userCredential){
      navigate ('/')
    }
  })

  .catch(error =>{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message
                         
    });
  })
}













  return (
    <div className="">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight  text-black">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-black"
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
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Dont have an account ? please {''}
            <Link
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              to={`/register`}
            >
              Register
            </Link>
          </p>

          <div className="py-4">
                <button onClick={handleGoogleLogin} className="btn btn-outline w-full text-sm">
                  <FcGoogle className="text-2xl" />
                  Login with google
                </button>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

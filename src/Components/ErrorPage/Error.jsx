import { NavLink, useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError();
    console.log(error)
    
    return (
        <div className="flex h-screen justify-center items-center">
        <div>
            
          <h1 className="text font-bold text-7xl">{error.status}</h1>
          <h1 className="text-xl font-semibold ">{error.statusText}</h1>
          <h1 className="text-xl text-red-600">{error.data}</h1>
          <div className="text-blue-800 font-medium">
            <NavLink  to={`/`} >Go home</NavLink>
          </div>
        </div>
      
      </div>
    );
};

export default Error;
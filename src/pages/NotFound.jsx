import { NavLink, useRouteError } from "react-router-dom"

export const NotFound = () => {
    const  error = useRouteError();
    if(error.status === 404)
        console.log(error);
    return(
        <>
            <h1>404 error page</h1>
            <NavLink to="/" >
                Go back to Home Page
            </NavLink>
        </>
        
    )
}
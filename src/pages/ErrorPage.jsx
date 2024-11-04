import { NavLink, useRouteError, useNavigate } from "react-router-dom"

export const ErrorPage = () => {
    const  error = useRouteError();

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    // const handleGoBackToHome = () => {
    //     navigate("/");
    // }

    if(error.status === 404)
        console.log(error);
    return(
        <>
            <h1>404 error page</h1>
            {/* <NavLink to="/" >
                Go back to Home Page
            </NavLink> */}
            {/* <button className="btn" onClick={handleGoBackToHome}>
                Go Back to Home Page
            </button> */}
            <button className="btn" onClick={handleGoBack}>
                Go Back 
            </button>
        </>
        
    )
}
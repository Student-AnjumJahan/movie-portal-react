import { NavLink } from "react-router-dom"


export const Header = () => {
    // return(
    //     <h1>Header</h1>
    // )
    const getNavLinkStyle = ({isActive}) => {
        return{
            color: isActive ? "blue": "black"
        }
    }
    return (
        <>
            <header className="section-navbar">
            <section className="top_txt">
                <div className="head container">
                <div className="head_txt">
                    <p>Free shipping, 30-day return or refund gurantee.</p>
                </div>
                <div className="sign_in_up">
                    <NavLink to="# ">SIGH IN</NavLink>
                    <NavLink to="# ">SIGH UP</NavLink>
                </div>
                </div>
            </section>
            <div className="container">
                <div className="navbar-brand">
                <NavLink to="index.html">
                    {/* <img src="./public/images/log.png" alt="ecom logo" class="logo" width="80%" height="auto" /> */}
                    ThapaFlex
                </NavLink>
                </div>
                <nav className="navbar">
                <ul>
                    <li className="nav-item">
                    <NavLink to="/" className={({isActive}) => isActive ? "blue": "black"}
                    >Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/about" className="nav-link"style={({isActive}) => {
                       return { color: isActive? "blue" : "black"}
                    }}>About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/service" className={({isActive}) => isActive ? "nav-link active-link":"nav-link"}
                    >Service</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/movie" className="nav-link" style={getNavLinkStyle}>Movie</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                    </li>
            
                    {/* <li class="nav-item">
                    <NavLink to="addToCart.html" class="nav-link add-to-cart-button" id="cartValue">
                        <i class="fa-solid fa-cart-shopping"> 0 </i>
                    </NavLink>
                    </li> */}
                </ul>
                </nav>
            </div>

            </header>
        </>
    )
}
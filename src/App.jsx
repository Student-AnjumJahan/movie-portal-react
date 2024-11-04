import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Service } from "./pages/Service";
import { Movie } from "./pages/Movie";
import { Contact, contactData } from "./pages/Contact";
import AppLayout from "./components/layout/AppLayout";
import "./App.css";
import { ErrorPage } from "./pages/ErrorPage";
import { NotFound } from "./pages/NotFound";
import { GetMoviesData } from "./API/GetAPIData";
import { MovieDetails } from "./components/UI/MovieDetails";
import { GetMoviesDetails } from "./API/GetMovieDetails";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout  />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        }, 
        {
          path: "/about",
          element: <About />,
        }, 
        {
          path: "/service",
          element: <Service />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: GetMoviesData,
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader: GetMoviesDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData, 
        },
        // {
        //   path: "*",
        //   element:<NotFound/>
        // }
      ]
    },
    
  ]);

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route >
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/contact" element={<Contact />} />
  //       <Route path="/movie" element={<Movie />} />
  //       <Route service="/home" element={<Service />} />
  //     </Route>
  //   )
  // );


  return(
    <RouterProvider router={router} />
  )
}
export default App;
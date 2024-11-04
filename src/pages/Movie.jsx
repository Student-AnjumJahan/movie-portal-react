import { useLoaderData } from "react-router-dom"
import { Card } from "../components/UI/Card";

export const Movie = () => {
    const moviesData = useLoaderData();
    console.log(moviesData);

    return(
        // <h1>Movie page</h1>
        <>
            <ul className="contianer grid grid-four-cols">

                {moviesData && moviesData.Search.map((curMovie) => {
                    return <Card key={curMovie.imdbID} curMovie={curMovie}/>;
                })}
            </ul>
        </>
    )
}
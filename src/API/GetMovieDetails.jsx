import { useParams } from "react-router-dom";

export const GetMoviesDetails = async({params}) => {
    // console.log(params);
    // &s=titanic&page=1
    const id = params.movieID;

    try{
        const response = fetch(
            `http://www.omdbapi.com/?i=${id}&apikey=1c12799f&s=titanic&page=1`
        );
        const data = (await response).json();
        return data;
    }catch(error){
        console.log(error);
    }
}
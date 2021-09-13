import React, { useEffect } from 'react'
import MovieListing from '../../components/MovieListing/MovieListing'
import movieApi from "../../common/apis/movieApi"
import { APIKEY } from "../../common/apis/MovieApiKey"
import { addMovies } from '../../features/movies/movieSlice'
import { useDispatch } from 'react-redux'


const Home = () => {

    const movieText = "Lord";
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchMovies = async () => {
            const response = await movieApi.get(`?apiKey=${APIKEY}&s=${movieText}&type=movie`)
            .catch((err) => {
                console.log("err: ", err);
            });
            dispatch(addMovies(response.data));
        };
        
        fetchMovies();
    });

    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    )
}

export default Home

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import user from '../../images/user.png'
import './Header.scss'
import { RiSkull2Fill } from "react-icons/ri";
import movieApi from "../../common/apis/movieApi";
import { APIKEY } from "../../common/apis/MovieApiKey";
import { addMovies } from "../../features/movies/movieSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const [search, setSearch] = useState("");
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (!search) return;
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKEY}&s=${search}&type=movie`)
        .catch((err) => {
          console.log("err: ", err);
        });
      dispatch(addMovies(response.data));
    };

    fetchMovies();
  }, [search, dispatch]);
  console.log(search);
    
    const handleSearch = (e) => {
      setSearch(e.target.value)
    }

    return (
      <div className="header">
        <Link to="/">
          <div className="logo">
            <RiSkull2Fill />
          </div>
        </Link>
        <div className="search-container">
          <input value={search} className="search" placeholder="Search..." onChange={handleSearch}/>
        </div>
        <div className="user-image">
          <img src={user} alt="user" />
        </div>
      </div>
    );
}

export default Header

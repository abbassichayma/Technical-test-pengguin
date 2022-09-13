import React, { useEffect} from 'react'
import CustumCard from 'components/CustumCard/CustumCard'
import {axiosTMDB} from '../../utils/axios';
import { useDispatch } from 'react-redux';
import {getMovies} from "../../redux/movie.slice"

const Home = ({search}) => {
const dispatch = useDispatch()

const fetchMovies = async () => {
  try {
      const res = await axiosTMDB.get("tv/popular")
      dispatch(getMovies(res.data.results))
     
      
  } catch (error) {
      console.log(error)
  }
}

useEffect(() => {
  fetchMovies()
}, [])

  return (
    <div style={{marginTop:"80px"}}>
      <CustumCard search={search}/>
    </div>
  )
}

export default Home
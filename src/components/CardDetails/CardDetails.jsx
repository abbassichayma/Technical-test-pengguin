import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import {Button, CardMedia } from '@mui/material';
import {DetailsContainer,HeaderContainer} from './CardDetails.styles'
import { axiosTMDB } from 'utils/axios';

const CardDetails = ({search}) => {

    const getPosterURL = (posterpath)=>{
        return(`https://image.tmdb.org/t/p/w220_and_h330_face${posterpath}`)
        
      }
    const {id} = useParams()
    const [movies,setMovies] = useState({})
    
    const getMoviesDetails = async () => {
        try {
            const {data} = await axiosTMDB.get(`tv/${id}`)
            setMovies(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getMoviesDetails()
    }, [])
    

  return (
    <DetailsContainer >  
   <HeaderContainer>
    
          <div className='title'>{movies.name}</div>
          <div className='information'>
            <div className='buttons'>
              {movies.genres?.map(genre=><Button>{genre.name}</Button>)}
              <Button>{movies.first_air_date}</Button>
              <Button>{movies.number_of_seasons} season(s)</Button>
            </div>
            <div className='producer' >
              created by:
             {movies.created_by?.map(el=> <div >{el.name}</div>)}
             </div>
          </div>
          <div className='overview'>
            <Typography  variant="body2" color="text.secondary">{movies.overview}</Typography>
          </div>
       
   </HeaderContainer>
     
     <div className='episodes'><h2>Episodes</h2></div>
     {movies.seasons?.filter((el)=>el.name.toLowerCase().includes(search)).length==0 && <span className='NoResult'>"No results for your query {search}"</span>}
    {movies.seasons?.filter((el)=>el.name.toLowerCase().includes(search)).map(el=>
      
      <div className='all'>
      <div className='episode'>
      {el.episode_count}
      </div>   
      <div className='image'>    
     <CardMedia
          component="img"
          image={el.poster_path!=null ? getPosterURL(el.poster_path) :getPosterURL(movies.poster_path)}
          alt={el.name}
        />
        </div> 
        <div className='desc'>
       <h4>{el.name}</h4>
       <Typography variant="body2">
       
         {el.overview!=''? el.overview : movies.overview}
       </Typography>
       </div> 
       </div>
)}
    </DetailsContainer>  
  )}

export default CardDetails
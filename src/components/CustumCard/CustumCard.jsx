
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Button, IconButton } from '@mui/material';
import{CustumBox,CustumCard} from './CustumCard.styles'
import Typography from '@mui/material/Typography';
import {CardActions } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import{AddToWatchList} from "../../redux/movie.slice"
import AddIcon from '@mui/icons-material/Add';

function Cards({search}) {
  const dispatch = useDispatch()
  const WatchList =(ID)=>{
    alert("TV Show added successfully to your WatchList")
    dispatch(AddToWatchList(ID))
  }

  const movies =useSelector(state=>state.movies.movies)
 
  const getPosterURL = (posterpath)=>{
    return(`https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`)
  }
  return (
    <>
    <CustumBox>   
    {movies?.filter((el)=>el.name.toLowerCase().includes(search)).map(el=>(
   <CustumCard style={{width:"240px"}}  className='hover'>
    <Link to={`/show/${el.id}`}>
     <CardMedia
          component="img"
          height={300}
          image={getPosterURL(el.poster_path)}
          alt={el.name}
        />
     </Link>
      <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          {el.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {el.first_air_date}
          </Typography>
      </CardContent>
      <CardContent >
      <CardActions>
       <Button onClick={()=>(WatchList(el.id))}>
       <IconButton >
      <AddIcon />
     </IconButton>
        Add to watchList
       </Button>
      </CardActions>
      </CardContent>

</CustumCard>
))}
 {movies?.filter((el)=>el.name.toLowerCase().includes(search)).length==0 && <span> "No results for your query {search}"</span>}
    </CustumBox>
    
    </>
  )
 
}

export default Cards

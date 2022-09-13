import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Button,IconButton} from '@mui/material';
import Typography from '@mui/material/Typography';
import {CardActions } from '@mui/material';
import {useDispatch, useSelector } from 'react-redux';
import {CustumBox,CustumCard} from"./WatchList.styles"
import { Link } from 'react-router-dom';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { deleteFromWatchList } from 'redux/movie.slice';


const WatchList = ({search}) => {
const dispatch = useDispatch()
 const List =useSelector(state=>state.movies.watchList)
 const deleteWatchList =(ID)=>{
  dispatch(deleteFromWatchList(ID))
 }

  const getPosterURL = (posterpath)=>{
    return  (`https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`)
  }
  return (
    <>
    <div className='watchTitle'><h2>Watch List</h2></div>
    <CustumBox>
    {List?.filter((el)=>el.name.toLowerCase().includes(search)).map(el=>(
<CustumCard style={{width:"240px"}} className='hover'>
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
        
   <Button size="small" onClick={()=>deleteWatchList(el.id)}>
    <IconButton >
     <RemoveCircleOutlineIcon/>
    </IconButton>
    Remove from WatchList
    </Button>
   
      </CardActions>
      </CardContent>

</CustumCard>
))}
  {List?.filter((el)=>el.name.toLowerCase().includes(search)).length==0 && <span> "No results for your query {search}"</span>}
</CustumBox>
  </>
  )
 
  
}

export default WatchList
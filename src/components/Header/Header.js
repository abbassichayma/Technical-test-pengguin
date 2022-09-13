import { AppBar, Input, Toolbar, Typography} from '@mui/material'
import React from 'react'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import ToggleButton from 'components/shared/Button/Button';
import { Link } from 'react-router-dom';


const Header = ({setSearch,search}) => {
  return (
    <div>
      <AppBar sx={{background:"#696969"}}>
        <Toolbar>
          <LiveTvIcon sx={{cursor:"pointer"}}/>
          <div className='search'>
          <Input
          placeholder='start searching' 
          onChange={(e)=>setSearch(e.target.value)}
          />
          {search &&  <Typography  variant="body2"> You are searching for "{search}"</Typography>}
          </div>
          
          
          <Link to={"/watchlist"}>
            <button variant="red" className='addwatchlist'>watchList</button>
          </Link>

         <ToggleButton/>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
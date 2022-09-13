import React, { useState } from 'react'
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Div} from './Button.styles'
import { useDispatch } from 'react-redux';
import { setThemeMode } from 'redux/theme.slice';

function Button() { 
const dispatch = useDispatch()
const [theme,setTheme]=useState("")
const [change,setChange]=useState(false)
const updateTheme=()=>{
  setChange(!change)
  if(change==true){
    setTheme('dark')
  }else{
    setTheme('light')
  }
  
  dispatch(setThemeMode(theme))
}


  return (
    <Div>
       <FormControlLabel
          value="bottom"
          control={<Switch color="primary" onClick={()=>updateTheme()}/>}
          label={change ? "dark" :"light" }

        />
    </Div>
  )
}

export default Button

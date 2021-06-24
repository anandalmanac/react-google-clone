import React from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {setsearch} from '../action'



function Search({hideButtons=false}) {

    const Term=useSelector(state=>state.Term)
    const dispatch=useDispatch()

    const [input,setInput]=useState('')
    const history=useHistory();

    const search=e=>{
        e.preventDefault();
        console.log('clicked',input)
        dispatch(setsearch(input))
       if(input!=''){
        history.push('/search')
       }
        
        
        
    }
    console.log('term',Term)
    return (
        
        <form className="search">
            <div className='search_input'>
                <button type='submit' style={{border:'none',outline:'none',backgroundColor:'transparent'}} onClick={search}>
                    <SearchIcon className='search_inputicon' />
               
                </button>
                 <input  value={input} onChange={e=>setInput(e.target.value)}/>
                <MicIcon />
        
            </div>
            {!hideButtons?(
                <div className="search_buttons">
            <Button type='submit' variant="outlined" onClick={search}>Google Search</Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
      
            </div>
            ):(
            <div className="search_buttons_hide">
            <Button type='submit' variant="outlined" onClick={search}>Google Search</Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
      
            </div>
            )}
            
        </form>
    )
}

export default Search


//1.40
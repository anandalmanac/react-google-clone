import React from 'react'
import {Link} from 'react-router-dom'
import '../pages/Home.css'
import AppsIcon from '@material-ui/icons/Apps'
import {Avatar} from '@material-ui/core'
import Search from '../components/Search'

function Home() {
    return (
        <div className="home">
          
            <div className="home_header">
                <div className="home_headerLeft">
                    <Link to='/about'>About</Link>{/*instead of <a> ,no refresh*/}
                    <Link to='/store'>Store</Link>
                

                </div>
                <div className="home_headerRight">
                <Link to='/gmail'>Gmail</Link>
                <Link to='/images'>Images</Link>
                <AppsIcon></AppsIcon>
                <Avatar id='avatar'></Avatar>

                </div>

            </div>
            <div className="home_body">
                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"></img>
                <div className="home_body_search">
                    <Search />
                     
                </div>
            
            
            
            </div>


        </div>
    )
}

export default Home

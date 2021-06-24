import './SearchPage.css';
import React from 'react'
import { useSelector } from 'react-redux';
import useGoogleSearch from '../useGoogleSearch';
import response from '../response';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import { DescriptionOutlined, Image, ImageOutlined, Map, MoreVertOutlined, MovieOutlined, SearchOutlined, VideoCall } from '@material-ui/icons';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import { useEffect } from 'react';






function SearchPage() {
    window.addEventListener('scroll', () => {
        console.log(window.scrollY)
        if (window.scrollY > 100) {
            document.querySelector('.searchPage_options').style.display = 'none';
            if (window.innerWidth < 760) {
                document.querySelector('.searchPage_logo').style.display = 'none';
            }

        }
        else {
            document.querySelector('.searchPage_options').style.display = 'flex';
            document.querySelector('.searchPage_logo').style.display = 'flex';
        }



    })



    const Term = useSelector(state => state.Term)
    //live api call
    const { data } = useGoogleSearch(Term);
    //moke api call
    //const data=response;
    console.log(data);
    return (
        <div className='searchPage'>
            <div className="searchPage_header">
                <Link to='/'>
                    <img className='searchPage_logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"></img>


                </Link>
                <div className="searchPage_headerbody">
                    <Search hideButtons />
                    <div className="searchPage_options">
                        <div className="options_left">
                            <div className="searchPage_option">
                                <SearchOutlined className='searchPage_icon' />
                                <Link to='/all'>All</Link>
                            </div>
                            <div className="searchPage_option">
                                <ImageOutlined className='searchPage_icon' />
                                <Link to='/images'>Images</Link>
                            </div>
                            <div className="searchPage_option">
                                <MovieOutlined className='searchPage_icon' />
                                <Link to='/videos'>Videos</Link>
                            </div>
                            <div className="searchPage_option">
                                <DescriptionOutlined className='searchPage_icon' />
                                <Link to='/News'>News</Link>
                            </div>
                            <div className="searchPage_option">
                                <RoomOutlinedIcon className='searchPage_icon' />
                                <Link to='/maps'>Map</Link>
                            </div>
                            <div className="searchPage_option">
                                <MoreVertOutlined className='searchPage_icon' />
                                <Link to='/more'>More</Link>
                            </div>
                        </div>
                        <div className="options_right">
                            <div className="searchPage_option">
                                <Link>Settings</Link>

                            </div>
                            <div className="searchPage_option">

                                <Link>Tools</Link>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
            {true && (
                <div className="searchPage_results">
                    <p className="searchPage_count">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {Term}

                    </p>
                    {data?.items.map(item => (
                        <div className="searchPage_result">
                            <a href={item.link}>{item.displayLink}</a>
                            <a href={item.link} className="searchPage_resultTitle">
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchPage_snippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>

            )}

        </div>

    )
}

export default SearchPage

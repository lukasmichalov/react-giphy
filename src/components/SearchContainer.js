
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

import "./SearchContainer.css"

const SearchContainer = () => {
  return (
    <div className='search-container' >
        <input type='text' placeholder='Seach all the gifts...'></input>
        <div className='search-icon'>
            <SearchIcon/>
        </div>
    </div>
  )
}

export default SearchContainer
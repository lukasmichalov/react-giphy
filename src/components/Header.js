
import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className='header'>
            <img src='/images/giphyLogo.png' alt='logo'></img>
        <div className='menu' >
            <h2>Reaction</h2>
            <h2>Entertainment</h2>
            <h2>Sports</h2>
            <h2>Stickers</h2>
            <h2>Artists</h2>
            <h2>MoreVertIcon</h2>
        </div>
        <div className='button' ><h2>Upload</h2></div>
        <div className='button' ><h2>Create</h2></div>

        <div className='profile' >
            <img src='/images/avatar.png' alt='avatar'/>
            <h2>Jessy</h2>
            <h2>Key</h2>
        </div>


    </div>
  )
}

export default Header
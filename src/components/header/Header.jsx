import React from 'react'
import './style.scss'

const Header = ({downloadImage}) => {
  return (
    <nav className='navContainer'>
      <div className='navInner'>
        <div className="logo">Social Media <span>Post</span> Generator

        </div>
        <div className="downloadBtn" onClick={downloadImage} ><i className="fa-solid fa-download" style={{color: '#fafafa'}}></i>Download</div>
      </div>
    </nav>
  )
}

export default Header

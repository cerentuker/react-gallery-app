import React from 'react';
import './App.css';
import "./config.js";

const MainNav = () => {
  return (
      <nav className="main-nav">
          <ul>
              <NavItem text="sunsets" />
              <NavItem text="waterfalls" />
              <NavItem text="rainbows" />
          </ul>
      </nav>
  )
}

const NavItem = ({text}) => {
  return (
      <li><a href='#'>{text}</a></li>
  )
}

const Gallery = () => {
  return (
      <div className="photo-container">
          <h2>Results</h2>
          <ul>
              <Photo></Photo>
              <Photo></Photo>
              <Photo></Photo>
              <Photo></Photo>
          </ul>
      </div>
  )
}

//image item to be displayed
const Photo = () => {
  return (
      <li>
          <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
      </li>
  )
}

// no results retrieved for search
const NotFound = () => {
  return (
      <li className="not-found">
          <h3>No Results Found</h3>
          <p>You search did not return any results. Please try again.</p>
      </li>
  )
}

/*search = () => {
  if (e.target.value !== "") {
  }
}*/

const SearchForm = () => {
  return (
      <form className="search-form">
          <input type="search" name="search" placeholder="Search" required />
          <SearchButton></SearchButton>
      </form>
  )
}
const SearchButton = () => {
  const searchButtonClick = (e) => (console.log("search has been clicked!"));
  return( 
    <button type="submit" className="search-button" onClick={searchButtonClick}>
        <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            <path d="M0 0h24v24H0z" fill="none" />
        </svg>
    </button>
  )
}

const Title = () => {
  return (
      <div>
          <h2>FLICKR IMAGE SEARCH API</h2>
      </div>
  )
}

const Content = () => {
  return (
      <div className="player">
          <Title />
          <SearchForm />
          <MainNav />
          <Gallery />
          DUMMY
      </div>
  )
}

function App() {
  return (
    <div className="App">
      <Content></Content>
    </div>
  );
}

export default App;

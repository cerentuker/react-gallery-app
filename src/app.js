
import "../hello-world/src/config";
import React from 'react';
import MainNav from './Components/MainNav';
import Gallery from './Components/Gallery';
import SearchForm from './Components/SearchForm';
import Title from './Components/Title';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
 

//image item to be displayed
/*const Photo = () => {
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
*/
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

ReactDOM.render(
    <Content />,
    document.getElementsByClassName('container')[0] //the container element
)

const App = () => (
    <BrowserRouter>
       <div className="player">
            <Title />
            <SearchForm />
            <MainNav />
            <Gallery />
            DUMMY
        </div>
    </BrowserRouter>
);

export default App;

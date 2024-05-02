import './MainPage.css';
import React from 'react';

import UniversityName from './Components/UniversityDetail';

class MainPage extends React.Component{
    render(){
        return(
            <div className="main-heading">
            <header >
                <h1>University Details</h1>
            </header>
                <h2>List of Universities</h2>
                <UniversityName />
        </div>);
    }   
}
export default MainPage;
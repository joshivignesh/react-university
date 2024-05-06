import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import SearchBar from '../Common/SearchBar';

function UniversityComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [q, setQ] = useState("");
    const [filterParam, setFilterParam] = useState("United Arab Emirates");

    const univInitialValue = () => {
        return JSON.parse(window.localStorage.getItem("universitystore")) || [];
    };

    const [alluniversity, setallUniversity] = useState(univInitialValue());

    useEffect(() => {
        if (alluniversity !== undefined || !alluniversity) {
        fetch(
            `http://universities.hipolabs.com/search?country=${filterParam}`
        )
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                    setallUniversity(localStorage.setItem('universitystore', JSON.stringify(result)));                    
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }                           
            );
        }
    }, [alluniversity, filterParam]);

    const data = Object.values(items);

    function search(items) {
        const searchedItems=  items.filter((item) => item.country.toLowerCase == filterParam.toLowerCase);

         if(q === ''){
          return searchedItems;
         }
         else{
              const searchedData= searchedItems.filter(item=> item.name.toLowerCase().includes(q.toLowerCase()));
              return searchedData;
         }
    }
    if (error) {
        return  <> setIsLoaded(true);
                        setError(error)</>;
        ;
    } else if (!isLoaded) {
        return <>loading...</>;
    } else {
        return (
            <div className="wrapper">
                <h1>Universities</h1>
               
                <div className="search-wrapper">
                    <label htmlFor="search-form">
                        <input
                            type="search"
                            name="search-form"
                            id="search-form"
                            className="search-input"
                            placeholder="University search..."
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                        />                       
                    </label>
                    <div className="select">
                        <select
                            onChange={(e) => {
                                setFilterParam(e.target.value);
                            }}
                            className="custom-select"
                            aria-label="Filter Countries By Region">
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Oman">Oman</option>
                            <option value="Qatar">Qatar</option>
                        </select>
                        <span className="focus"></span>
                    </div>   
                </div>
                <h2 className="list-heading">List of the Universities in {filterParam}</h2>
                <ul className="university-container">
                    {search(data).map((item, index) => (                        
                        <li key={index} className="university" >
                                    <h2 className="card-name">{item.name}</h2>
                                    <p className="details-btn"><button>
                                        <Link to="/university-details" state={item}>University Details</Link></button></p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default UniversityComponent;
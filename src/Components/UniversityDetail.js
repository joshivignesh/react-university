import React, { useState, useEffect } from 'react';
import '../App.css';

const UniversityName =() => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [university, setUniversity] = useState([]);

    useEffect(() => {
        fetch("http://universities.hipolabs.com/search?country=United+Arab+Emirates")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUniversity(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }

                )

    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    }
    else {
        return (
            <div>
            <ul>
               {university.map(usdet => (
                    <li className='' key={usdet.domains[0]}>{usdet.name}</li>                    
                ))}
                </ul>
            </div>
            );
    }
}
export default UniversityName;
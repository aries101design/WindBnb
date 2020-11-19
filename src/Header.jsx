import { Button } from '@material-ui/core';
import React ,{useState} from 'react';
import './Header.css';


export default function Header({loc,find,guest}) {

    const [location , setLocation] = useState(loc);
    const [number , setNumber] = useState(guest);
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === "loc"){
            return setLocation(value);
        }else if (name === 'guest'){
            return setNumber(value)
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log("Clicked");
        const name = e.target.name;
        console.log(name);
        if (name === "sub"){
            console.log("Reached");
            return (
                find(location,number)
            )
        }
    }

    return (
        <div className="header" >
            <div className="logo">
                <img className="image" alt="err" src="logo.png" />
            </div>
            <div className="search">
                <form>
                    <input  id="search__bar__home" onChange={handleChange} name="loc" className="loc" type="text" placeholder="Enter Location" value={location} />
                    <input id="search__bar__home" onChange={handleChange} name="guest" className="guests" placeholder="Add Guest"  value={number} /> 
                    <Button onClick = {handleClick} name="sub" type="submit" className="search__image"><img name="sub" className="search__logo" alt="err" src="search.svg" /></Button>  
                </form>
                
            </div>
            
        </div>
    )
}

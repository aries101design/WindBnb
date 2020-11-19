import React ,{useState , useEffect} from 'react';
import './Home.css';

//Import Dependicies;
import stays from './stays';
import Header from './Header';
import Drawer from './Drawer';
import {motion} from 'framer-motion';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Button } from '@material-ui/core';


export default function Home() {
    const [loc,setLoc] = useState('Finland');
    const [guest , setGuest] = useState('');
    const [search] = loc.split(' ');
    const [search1] = loc.split(',');
    const [drawer , setDrawer] = useState(false);
    console.log(search)
    const handleSearch = (location , number) => {
        setLoc(location);
        setGuest(number);
    }
    const handleDrawer = (e) => {
        console.log("open");
        setDrawer(false)
    }
    return (
        <>
            <Header loc={loc} find={handleSearch} guest={guest} />
            <div className="home" >
                <div className="head">
                    <h1 className="result">Stays in {loc}</h1>
                    <Button className="number" onClick = {()=>setDrawer(true)} ><FilterListIcon className="filter" /> Filter</Button>
                </div>
                <div className="main">
                    {stays?.map((item , index) => {
                        let number = 0;
                        number = number + 0.3;
                        if ((search.toLowerCase() === item.city.toLowerCase()) || (search1.toLowerCase() === item.city.toLowerCase()) || (search.toLowerCase() === item.country.toLowerCase()) ){
                            return (
                                <>
                                <motion.div initial={{y:"-1vh"}} animate={{y:0 , transition:{duration:1,delay:{number} }}} id = {index} key={index} className="stays">
                                    <div className="image__wrapper">
                                        <img className="stays__image" alt="err" src={item?.photo} />
                                        {item.superHost && (<div className="host"><p>Super Host</p></div>)}
                                    </div>
                                    <div className="data">
                                        <div className="basic">
                                            <span>
                                                <p className="type">{item?.type}</p>
                                                <p className="beds" >{item.beds===null ? null : (<>{item.beds} Beds </>) }</p>
                                            </span>
                                            <p className="stars"><img className="stars__img" src="star.png" alt="err"/> {item.rating} </p>
                                        </div>
                                        <div className="desc">
                                            <p className="text">{item?.title.length>30 ? item.title.substring(0,30)+"..." : item.title }</p>
                                        </div>
                                    </div>
                                </motion.div>
                                </>
                            )
                        }
                    })}
                    
                </div>
                <Drawer 
                    open = {drawer}
                    setOpen = {handleDrawer}
                />
            </div>
        </>
    )
}

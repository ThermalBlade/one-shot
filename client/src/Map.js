import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const images = [
    {id:"Map 1 - Overworld",src:"/img/map1.png"},
    {id:"Map 2 - Local",src:"/img/map2.png"},
    {id:"Map 3 - Dungeon",src:"/img/map3.png"}
];


const imagearray = ["/img/map1.png","/img/map2.png","/img/map3.png"];
function Map() {
    const [map, setMap] = useState(0)

    function clickNext(){
        if(map + 1 === images.length)
        {
            setMap(0);
        }
        else
        {
            setMap(map+1);
        }
    }

    function clickPrevious(){
        if(map - 1 === -1)
        {
            setMap(images.length-1);
        }
        else
        {
            setMap(map-1);
        }
    }
    return (
        <div className="Map">
            <h2> {images[map].id} </h2>
            <p> {map}</p>
            <img src={process.env.PUBLIC_URL + images[map].src} alt = "map" width = "400px" height = "400px"/>
            <button onClick={() => clickPrevious()}> Previous </button>
            <button onClick={() => clickNext()}> Next </button>
        </div>
    );
}

export default Map;